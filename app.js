import React from 'React'


const response = {
  "title": "Capstone Course 1",
  "ProviderUniqueID": "OUCS-1",
  "PlatformPresentationResources": [
    {

      "Class": "DisplayablePlatformPresentationResources",

      "CreatedTime": 1572543527,

      "InheritPlatformName": null,

      "Last Modified": 1572543526,

      "PlatformName": "shared",

      "Version": 1,

      "href": "/content/sites/alpha.nextthought.com/Courses/DefaultAPICreated/OUCS-1/presentation-assets/shared/v1/"

    },

    {

      "Class": "DisplayablePlatformPresentationResources",

      "CreatedTime": 1572543527,

      "InheritPlatformName": "shared",

      "Last Modified": 1572543526,

      "PlatformName": "webapp",

      "Version": 1,

      "href": "/content/sites/alpha.nextthought.com/Courses/DefaultAPICreated/OUCS-1/presentation-assets/webapp/v1/"

    },

    {

      "Class": "DisplayablePlatformPresentationResources",

      "CreatedTime": 1572543528,

      "InheritPlatformName": "shared",

      "Last Modified": 1572543526,

      "PlatformName": "iPad",

      "Version": 1,

      "href": "/content/sites/alpha.nextthought.com/Courses/DefaultAPICreated/OUCS-1/presentation-assets/iPad/v1/"

    }

  ],

  "Preview": true

}




// const Frame = () => <iframe src="https://api.nextthought.com/authentication" > {this.props.children} </iframe> 


export default class Index extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      courses: [response]
    }
  }

  render(){
    return (
      this.state.courses.map((element) => {
        <Card title={title} />
      })
    )
  }
}

