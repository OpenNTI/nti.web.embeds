import React from 'react';
import { checkPropTypes } from 'prop-types';
import Card from './Card';


class CourseCatalog extends React.Component{
    constructor(props){
        super(props)
        this.state = {
          courses: [], //These are the items from the course catalog
        }
      }
    
    // async so we can "await" API call - examples here https://javascript.info/async-await
        async getCourseInformation(){
            // TODO #1: Make request and then grab whatever endpoints and make another one till you get the course items
            var BASE_URL = "https://alpha.nextthought.com"
            var SERVICE_DOCS_URL = "https://alpha.nextthought.com/dataserver2/service"
            var userName = "slidingsteven";
            var passWord = "Capstone2020";
            var CATALOG_URL = null;
            var fetch = require("node-fetch")

            fetch(SERVICE_DOCS_URL, {headers: {
                    "X-Requested-With":"XMLHTTPRequest",
                    "User-Agent":"NextThought OUCS Capstone 1920",
                    "Authorization": "Basic " + btoa(userName + ":" + passWord)}}).then(data => data.json()).then(data => {
                        var {
                            //DCTitle, CourseNTIID
                            Items
                        } = data
                        let catNum = null;
                        for (let i=0; i < Items.length; i++){
                            if(Items[i]["Title"] == "Catalog"){
                                catNum = i;
                            }
                        }
                        CATALOG_URL = BASE_URL + Items[catNum]["Items"][0]["href"]+"\n";//+Class
                        console.log(CATALOG_URL)
                        //fetch the second URL for the course catalog
                        fetch(CATALOG_URL, {headers: {
                            "X-Requested-With":"XMLHTTPRequest",
                            "User-Agent":"NextThought OUCS Capstone 1920",
                            "Authorization": "Basic " + btoa(userName + ":" + passWord)}}).then(data => data.json()).then(data => {
                                var {
                                    //DCTitle, CourseNTIID
                                    Items
                                } = data
                                this.setState({courses:[Items]}) //This sets the catalog of courses

                                // for (let i =0; i<Items.length; i++){
                                //     console.log(i + " : " + Items[i]["DCTitle"] +" ---- " + Items[i]["ProviderDisplayName"])
                                //     if (Items[i]["PlatformPresentationResources"].length >0){
                                //         console.log(i + " : " + Items[i]["PlatformPresentationResources"][0]["PlatformName"])
                                //         console.log(i + " : " + Items[i]["PlatformPresentationResources"][0]["href"])

                                //     //     for(let j=0; j< Items[i]["PlatformPresentationResources"];j++){
                                //     //     if (Items[i]["PlatformPresentationResources"][j]["PlatformName"] == "iPad"){
                                //     //         console.log(i + " : " + Items[i]["PlatformPresentationResources"][j]["href"])
                                            
                                //     //     }
                                        
                                //     // }
                                //     }
                                //     else{
                                //         console.log(i + " : No resource URL")
                                //     }
                                //     for(let j=0; j< Items[i]["PlatformPresentationResources"];j++){
                                //         if (Items[i]["PlatformPresentationResources"][j]["PlatformName"] == "webapp"){
                                //             console.log(i + " : " + Items[i]["PlatformPresentationResources"][j]["href"])
                                            
                                //         }
                                        
                                //     }
                                //     // console.log(Items[i]["DCTitle"])
                                //     // console.log(Items[i]["ProviderDisplayName"])
                                // }
                                
                                //CATALOG_URL = BASE_URL + Items[catNum]["Items"][1]["href"]+"\n";//+Class

                            })
                    })

            // TODO #2: Set the courses in the state equal to that array of course items
        }
        
        componentDidMount(){
            this.getCourseInformation()
        
        }
      render(){
          //
          return (
            //Directly from the App.js file
            <div className="App">
              <div>
                {this.state.courses.map(course => <Card title={course.ProviderDisplayName}
                description={course.DCTitle} 
                image={BASE_URL+course.PlatformPresentationResources[0].href + IMAGE_NAME}
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



// const CourseCatalog = (props) => (
  
//   <a href={props.courseURL} style={{textDecoration: 'none'}}>
//   <div scrolling="no" style={{
//     backgroundColor: props.darkMode ? 'gray':'white',
//     maxHeight:"250px",
//     height: '100%',
//     padding: 8,
//     maxWidth: props.direction == 'row' ? 'none' : "225px",
//     display: 'flex',
//     flexDirection: props.direction,
//     boxShadow: '10px 10px 5px 0px rgba(181,181,181,1)'

//   }}> 
//     <img src={props.image} />

//     <div style={{margin: 'auto 0'}}>
//       <p style={{color: props.darkMode ? 'white' : 'gray', fontWeight: '500'}}>{props.title}</p> 
//       <div style={{color: props.darkMode ? 'white' : 'gray', fontWeight: '700'}}>
//         {props.description} 
//       </div> 
//     </div>

//   </div></a>
  


//   )

export default CourseCatalog