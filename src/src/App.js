import React from 'react';
import Card from './components/Card';
import Frame from './components/Frame';
import courseCatalog from './components/CourseCatalog';
import CourseCatalog from './components/CourseCatalog';

const BASE_URL = 'https://alpha.nextthought.com'
const REQ_URL = BASE_URL+'/dataserver2/++etc++hostsites/alpha.nextthought.com/++etc++site/Courses/DefaultAPICreated/OUCS-1/CourseCatalogEntry'
const IMAGE_NAME = 'contentpackage-landing-232x170.png'
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
      courseURL:''
    }
  }

  componentDidMount = () => {
    let decodedURL = decodeURIComponent(window.location.search);
    console.log(decodedURL)
    const urlParams = new URLSearchParams(decodedURL);      
    const courseId = urlParams.get('courseID') 
    //console.log(courseId)data
    //const courseID = window.frameElement.getAttribute('data-courseID');
    //const courseIDD = decodeURIComponent(courseId);
    //console.log(courseIDD)
    //console.log(window.location.search);
    //const nameCleaned = courseId.replace(/\s/g, '+')
    //console.log(nameCleaned)
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
    // fetch(nameCleaned, {
    //      // fetch(REQ_URL, {
    //   headers: {
    //     'X-Requested-With': 'XMLHTTPRequest',
    //     'User-Agent' : 'NextThought OUCS Capstone 1920',
    //     'Content-Type': 'application/json',
    //     'Accept': 'application/json'
    //   }
    // }).then(response => response.json().then((courseCatalog) => {
       const darkmode = urlParams.get('darkmode') || false
       const direction = urlParams.get('direction') || 'column'
      // courseId = null;// urlParams.get('courseID') || ''
      
      const courseURL = null;// getRouteForCatalogEntry(courseCatalog);
    //   //console.log(BASE_URL+ courseCatalog['href'])
    //   console.log(courseCatalog)
       this.setState({courses: null, direction, darkmode, courseId, courseURL,  coreHref: null})// BASE_URL+courseCatalog['href']})
    // }))
  }


  render(){
    console.log(this.state.coreHref);
    
    return (
        <div className="App" id="App">
          {
            <CourseCatalog />
          /* <div>

            {this.state.courses.map(course => <Card title={course.ProviderDisplayName}
            description={course.DCTitle} 
            image={BASE_URL+course.PlatformPresentationResources[0].href + IMAGE_NAME}
            direction={this.state.direction}

            //maybe this needs to be 
            //BASE_URL+
            href={this.state.coreHref}
            courseURL = {this.state.courseURL}
            darkMode={this.state.darkmode == 'true'} />)} 

          </div>*/}
        </div>
    )
  }
}

export default App;
