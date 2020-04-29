import React from 'react';
import Card from './components/Card';
import Frame from './components/Frame';
import courseCatalog from './components/CourseCatalog';
import CourseCatalog from './components/CourseCatalog';
import styles from './components/catalog.module.css' //this should be able to disable the scrolling but cant get it to work

const BASE_URL = 'https://alpha.nextthought.com'
const REQ_URL = BASE_URL+'/dataserver2/++etc++hostsites/alpha.nextthought.com/++etc++site/Courses/DefaultAPICreated/OUCS-1/CourseCatalogEntry'
const IMAGE_NAME = 'contentpackage-landing-232x170.png'

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
    const urlParams = new URLSearchParams(decodedURL);      
    const courseId = urlParams.get('courseID') 
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
      return `/app/catalog/nti-course-catalog-entry/${encodeIdFrom(entry.href)}`;
    }

       const darkmode = urlParams.get('darkmode') || false
       const direction = urlParams.get('direction') || 'column'
      
      const courseURL = null;// getRouteForCatalogEntry(courseCatalog);

       this.setState({courses: null, direction, darkmode, courseId, courseURL,  coreHref: null})// BASE_URL+courseCatalog['href']})
    
  }


  render(){    
    return (
        <div className={styles.noScrollTrial} id="App">
          {
            <CourseCatalog />
          }
        </div>
    )
  }
}

export default App;
