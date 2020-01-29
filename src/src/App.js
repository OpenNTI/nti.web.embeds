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
    }
  }

  componentDidMount = () => {
    fetch(REQ_URL, {
      headers: {
        'X-Requested-With': 'XMLHTTPRequest',
        'User-Agent' : 'NextThought OUCS Capstone 1920'
      }
    }).then(response => response.json().then(courseCatalog => this.setState({courses: [courseCatalog]})) )

  }


  render(){
    return (
      //<Frame style={{width: '100%', border: 'none'}}>
        <div className="App">
          {this.state.courses.map(course => <Card title={course.ProviderDisplayName}
          description={course.DCTitle} image={BASE_URL+course.PlatformPresentationResources[0].href + IMAGE_NAME}  />)}
        </div>
      //</Frame>

    )
  }
}

export default App;
