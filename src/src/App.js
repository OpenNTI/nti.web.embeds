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
    //solution 1
    // console.log("After split " + urlParams.toString().split("courseID=")[1])
    // const courseId = urlParams.get('courseID') 
    // console.log("After urlParams.get(CourseID)--- " + courseId);
    // const nameCleaned = courseId.replace(/\s/g, '+')
    // console.log("URL after hardcode--- " + nameCleaned)
    //end solution 1

    //Solution 2
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
      //BASE URL SHOULD GO HERE  https://alpha.nextthought.com
      return `/app/catalog/nti-course-catalog-entry/${encodeIdFrom(entry.href)}`;
    }
     //props.courseURL 
    fetch(nameCleaned, {
         // fetch(REQ_URL, {
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
      //console.log(BASE_URL+ courseCatalog['href'])
      //console.log(courseCatalog)

      //this is to allow for entries that do not have a Presentation image
      let source=''//source for image
      if(courseCatalog['PlatformPresentationResources'[0]['href']]==undefined) 
          source=defaultClassCard
      else 
          source= courseCatalog['PlatformPresentationResources'[0]['href']]
      //console.log(courseCatalog['PlatformPresentationResources'[0]['href']])

      let cardTitle =''
      if(courseCatalog['ProviderDisplayName']==undefined) 
          cardTitle="not found"
      else 
          cardTitle= courseCatalog['ProviderDisplayName']
      this.setState({courses: [courseCatalog], direction, darkmode, courseId, courseURL,  coreHref: BASE_URL+courseCatalog['href'], imgURL: source, titleForCard:cardTitle})
    }))



  }


  render(){
    //console.log("In Render");
    //console.log(this.state.coreHref);
    // let imageSrc = null;
  //console.log(JSON.stringify(this.state.courses[0]['DCTitle']));
    // if(this.state.courses[0].PlatformPresentationResources[0].href==null) imageSrc = defaultClassCard
    // else imageSrc= BASE_URL+this.state.courses[0].PlatformPresentationResources[0].href + IMAGE_NAME
    //this.state.courses.map(imgSrc => sourceURL = imgSrc.PlatformPresentationResources[0].href);
  
    return (
        <div className="App">
          <div>
            {this.state.courses.map(course => <Card title={course.ProviderDisplayName}
            description={course.DCTitle} 
            image={this.state.imgURL}
            //if (BASE_URL+course.PlatformPresentationResources[0].href)
            direction={this.state.direction}

            //maybe this needs to be 
            //BASE_URL+
            href={this.state.coreHref}
            courseURL = {this.state.courseURL}
            darkMode={this.state.darkmode == 'true'} />)}
          </div>
        </div>
    )
  }
}

export default App;
