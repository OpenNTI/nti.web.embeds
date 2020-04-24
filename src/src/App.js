import React from 'react';
import Card from './components/Card';
import Frame from './components/Frame';
import defaultClassCard from './defaultClassCard.png'

const BASE_URL = 'https://alpha.nextthought.com'
const REQ_URL = BASE_URL+'/dataserver2/++etc++hostsites/alpha.nextthought.com/++etc++site/Courses/DefaultAPICreated/OUCS-1/CourseCatalogEntry'
const IMAGE_NAME = 'contentpackage-landing-232x170.png'
var userName = "slidingsteven";
var passWord = "Capstone2020";
//const REQ_IMG_URL = BASE_URL+'https://alpha.nextthought.comcontent/sites/alpha.nextthought.com/Courses/DefaultAPICreated/OUCS-1/presentation-assets/webapp/v1/contentpackage-landing-232x170.png'
//https://alpha.nextthought.com/dataserver2/++etc++hostsites/alpha.nextthought.com/++etc++site/Courses/DefaultAPICreated/OUCS-1/CourseCatalogEntry
class App extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      courses: [],
      darkmode: false,
      direction: 'column',
      courseURL: '',
      coreHref: '',
      courseURL:'',
      imgURL: '',
      titleForCard:''
    }
  }

  componentDidMount = () => {
    let decodedURL = decodeURIComponent(window.location.search);
    console.log("After decodeURIComponent--- " + decodedURL)
    const urlParams = new URLSearchParams(decodedURL);      
    console.log("After URLSearchParams--- " + urlParams)
    let nameCleaned = decodedURL.toString().split("courseID=")[1];
    const COMMON_PREFIX = 'tag:nextthought.com,2011-10:';
    const HREF_SPECIFIC_TYPE = '__nti_object_href';
    const {btoa} = global; 
    function encodeIdFrom(href) { 
      try { 
        const id = encodeURIComponent(btoa(href));
        return `${COMMON_PREFIX}${HREF_SPECIFIC_TYPE}-${id}`;
    } catch(e) {
        console.error('Missing polyfill for btoa'); 
        throw e; 
      } 
    } 
    function getRouteForCatalogEntry(entry) { 
      //BASE URL SHOULD GO HERE  
      let BASE = 'https://alpha.nextthought.com'
      return BASE+ `/app/catalog/nti-course-catalog-entry/${encodeIdFrom(entry.href)}`;
    }
     //props.courseURL 
    fetch(nameCleaned, {
      headers: {
        'X-Requested-With': 'XMLHTTPRequest',
        'User-Agent' : 'NextThought OUCS Capstone 1920',
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        "Authorization": "Basic " + btoa(userName + ":" + passWord)
      }
    }).then(response => response.json().then((courseCatalog) => {
      const darkmode = urlParams.get('darkmode') || false
      const direction = urlParams.get('direction') || 'column'
      const courseId = urlParams.get('courseID') || ''
      const courseURL = getRouteForCatalogEntry(courseCatalog);
      console.log(courseCatalog)

      //ASSIGNING THE IMAGE,  THIS IS WHAT IS WRONG
      //let source; //BASE_URL+ courseCatalog['PlatformPresentationResources'][0]['href']+IMAGE_NAME//source for image
      // if(courseCatalog['PlatformPresentationResources'][0]==undefined ||courseCatalog['PlatformPresentationResources'][0]['href']==undefined){
      //     source=defaultClassCard
      // } else {
      //     //source= BASE_URL+ courseCatalog['PlatformPresentationResources'][0]['href']+IMAGE_NAME
      //     let newsrc = BASE_URL+ courseCatalog['PlatformPresentationResources'][0]['href']+IMAGE_NAME
      //     fetch(newsrc).then(function(response) {
      //       console.log("CHECKING IF VALID")
      //       console.log(response.status); // returns 200
      //       if (response.status.toString() == '404'){
      //         console.log("WAS 404")
      //         source=defaultClassCard
      //         console.log("TRY TO CHANGE SOURCE " + source)
      //       }
      //       else{
      //         console.log("WAS 200")
      //         source = newsrc
      //         console.log("SOURCE CHANGE TO " + source)
      //       }
      //     });
      //   }

        try{
                    
                    var source= BASE_URL+ courseCatalog['PlatformPresentationResources'][0]['href']+IMAGE_NAME
                    let newsrc = BASE_URL+ courseCatalog['PlatformPresentationResources'][0]['href']+IMAGE_NAME
                    fetch(newsrc).then(function(response) {
                      console.log("CHECKING IF VALID")
                      console.log(response.status); // returns 200
                      //if (response.status.toString() == '404'){
                      if(response.status == 200){
                        console.log("WAS 200")
                        source = newsrc
                        console.log("SOURCE CHANGE TO " + source)

                      }
                      else{
                        console.log("WAS 404")
                        source=defaultClassCard
                        console.log("TRY TO CHANGE SOURCE " + source)
                      }
                    });
        }
        catch(err){
          var source=defaultClassCard

        }
      console.log("SOURCE " +source)

      let cardTitle =''
      if(courseCatalog['ProviderDisplayName']==undefined) 
          cardTitle="not found"
      else 
          cardTitle= courseCatalog['ProviderDisplayName']
      
      this.setState({courses: [courseCatalog], direction, darkmode, courseId, courseURL,  coreHref: BASE_URL+courseCatalog['href'], imgURL: source, titleForCard:cardTitle})
    }))



  }


  render(){
    return (
    
    <div className="App" style={{borderRadius: '20px', backgroundColor:"#960207"}}>
          <div style={{borderRadius: '20px', backgroundColor:"#960207"}}>
            {this.state.courses.map(course => <Card title={course.ProviderDisplayName}
            description={course.DCTitle} 
            image={this.state.imgURL}
            direction={this.state.direction}
            href={this.state.coreHref}
            courseURL = {this.state.courseURL}
            darkMode={this.state.darkmode == 'true'} />)}
          </div>
        </div>
    )
  }
}

export default App;
