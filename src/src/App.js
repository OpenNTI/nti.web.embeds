import React from 'react';
import Card from './components/Card';
import Frame from './components/Frame';


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
      coreHref: ''
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
    const nameCleaned = courseId.replace(/\s/g, '+')
    console.log(nameCleaned)

     //props.courseURL 
    fetch(nameCleaned, {
         // fetch(REQ_URL, {
      headers: {
        'X-Requested-With': 'XMLHTTPRequest',
        'User-Agent' : 'NextThought OUCS Capstone 1920',
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }).then(response => response.json().then((courseCatalog) => {
      const darkmode = urlParams.get('darkmode') || false
      const direction = urlParams.get('direction') || 'column'
      const courseId = urlParams.get('courseID') || ''
      console.log(courseCatalog['href'])
      console.log(courseCatalog)
      this.setState({courses: [courseCatalog], direction, darkmode, courseId, coreHref: courseCatalog['href']})
    }))
  }


  render(){
    return (
        <div className="App">
          <div>
            {this.state.courses.map(course => <Card title={course.ProviderDisplayName}
            description={course.DCTitle} 
            image={BASE_URL+course.PlatformPresentationResources[0].href + IMAGE_NAME}
            direction={this.state.direction}
            href={this.state.coreHref}
            darkMode={this.state.darkmode == 'true'} />)}
          </div>
        </div>
    )
  }
}

export default App;
