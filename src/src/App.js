import React from 'react';
import Card from './components/Card'
import Frame from 'react-frame-component';


const REQ_URL = 'https://alpha.nextthought.com/dataserver2/++etc++hostsites/alpha.nextthought.com/++etc++site/Courses/DefaultAPICreated/OUCS-1/CourseCatalogEntry'
class App extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      courses: []
    }
  }

  componentDidMount = () => {
    fetch(REQ_URL, {
      headers: {
        'X-Requested-With': 'XMLHTTPRequest'
      }
    }).then(response => response.json().then(courseCatalog => this.setState({courses: [courseCatalog]})) )
  }

  render(){
    return (
      <Frame style={{width: '100%', border: 'none'}}>
        <div className="App">
          {this.state.courses.map(course => <Card title={course.title}
          description={course.RichDescription} />)}
        </div>
      </Frame>
    )
  }
}

export default App;
