import React from 'react';
import Card from './components/Card';
import Frame from './components/Frame';


const BASE_URL = 'https://alpha.nextthought.com'
const REQ_URL = BASE_URL+'/dataserver2/++etc++hostsites/alpha.nextthought.com/++etc++site/Courses/DefaultAPICreated/OUCS-1/CourseCatalogEntry'
const IMAGE_NAME = 'contentpackage-landing-232x170.png'
//const REQ_IMG_URL = BASE_URL+'content/sites/alpha.nextthought.com/Courses/DefaultAPICreated/OUCS-1/presentation-assets/webapp/v1/contentpackage-landing-232x170.png'

class App extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      courses: [],
      darkmode: false,
      direction: 'column'
    }
  }

  componentDidMount = () => {
    const urlParams = new URLSearchParams(window.location.search);      
    const courseId = urlParams.get('courseID') || ''

    fetch(REQ_URL, {
      headers: {
        'X-Requested-With': 'XMLHTTPRequest',
        'User-Agent' : 'NextThought OUCS Capstone 1920'
      }
    }).then(response => response.json().then((courseCatalog) => {
      const darkmode = urlParams.get('darkmode') || false
      const direction = urlParams.get('direction') || 'column'
      const courseId = urlParams.get('courseID') || ''
      this.setState({courses: [courseCatalog], direction, darkmode, courseId})
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
            darkMode={this.state.darkmode == 'true'} />)}
          </div>
        </div>
    )
  }
}

export default App;
