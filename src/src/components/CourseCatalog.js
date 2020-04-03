import React from 'react';
import { checkPropTypes } from 'prop-types';
import Card from './Card';


var BASE_URL = "https://alpha.nextthought.com"
var TEMP_URL = "/dataserver2/++etc++hostsites/alpha.nextthought.com/++etc++site/Courses/DefaultAPICreated/OUCS-2/CourseCatalogEntry"
var SERVICE_DOCS_URL = "https://alpha.nextthought.com/dataserver2/service"
var userName = "slidingsteven";
var passWord = "Capstone2020";
var CATALOG_URL = null;
var fetch = require("node-fetch")

class CourseCatalog extends React.Component{
    constructor(props){
        super(props)
        this.state = {
          courses: [], //These are the items from the course catalog
        }
      }
    
    // async so we can "await" API call - examples here https://javascript.info/async-await
        async getCourseInformation(){
          var fetch = require("node-fetch")
            // TODO #1: Make request and then grab whatever endpoints and make another one till you get the course items


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
                                this.setState({courses:Items}) //This sets the catalog of courses
                                console.log(this.state.courses[0].href)
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
          
          //console.log("Hi");
          //console.log(this.state.courses);

        //   return (
        //     //Directly from the App.js file
        //     <div className="App" id="catologcomponent" >
        //         {this.state.courses.map(course => <Card title={course.ProviderDisplayName}
        //                                   description={course.DCTitle} 
        //                                   //image={BASE_URL+course.PlatformPresentationResources[0].href + IMAGE_NAME}
        //                                   direction={this.state.direction}
                                          
        //                                   //maybe this needs to be 
        //                                   //BASE_URL+
        //                                   href={this.state.coreHref}
        //                                   // courseURL = {this.state.courseURL}
        //                                   darkMode={this.state.darkmode}
        //                                   courseURL = {this.state.courseURL}
        //                                   //darkMode='true'
                                        
        //                                   />)

        //         }
                
        //     </div>
        // )
                //var obj =JSON.parse(this.state.courses)
                    //console.log(obj)




        return(
            <div className="App" id="catologcomponent">
                {
                //Column Catalog dark mode
                    this.state.courses.map(course => <iframe src = {'http://127.0.0.1:3006/build/index.html?darkmode=true&direction=column&courseID='+BASE_URL+ course.href} height='245px' width='210px' 
                    style={{'border-style': 'ridge'}}></iframe>)  
                //Column Catalog light mode
                    //this.state.courses.map(course => <iframe src = {'http://127.0.0.1:3006/build/index.html?darkmode=false&direction=column&courseID='+BASE_URL+ course.href} height='245px' width='210px' 
                    //style={{'border-style': 'ridge'}}></iframe>)  
                
                //Row Catalog dark mode
                    //this.state.courses.map(course => <iframe src = {'http://127.0.0.1:3006/build/index.html?darkmode=true&direction=row&courseID='+BASE_URL+ course.href} height='180px' width='100%' 
                    //style={{'border-style': 'ridge'}}></iframe>) 
                //Row Catalog light mode
                    //this.state.courses.map(course => <iframe src = {'http://127.0.0.1:3006/build/index.html?darkmode=false&direction=row&courseID='+BASE_URL+ course.href} height='180px' width='100%' 
                    //style={{'border-style': 'ridge'}}></iframe>)  


                //Row Catalog light mode
                    //this.state.courses.map(course => <iframe src = {'http://127.0.0.1:3006/build/index.html?darkmode=false&direction=row&courseID='+BASE_URL+ course.href} height='180px' width='100%' 
                    //style={{'border-style': 'ridge'}}></iframe>)  
                }
                
                
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