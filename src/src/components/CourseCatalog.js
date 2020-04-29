import React from 'react';
import { checkPropTypes } from 'prop-types';
import Card from './Card';
import styles from './catalog.module.css'

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
                            Items
                        } = data
                        let catNum = null;
                        for (let i=0; i < Items.length; i++){
                            if(Items[i]["Title"] == "Catalog"){
                                catNum = i;
                            }
                        }
                        CATALOG_URL = BASE_URL + Items[catNum]["Items"][0]["href"]+"\n";//+Class
                        fetch(CATALOG_URL, {headers: {
                            "X-Requested-With":"XMLHTTPRequest",
                            "User-Agent":"NextThought OUCS Capstone 1920",
                            "Authorization": "Basic " + btoa(userName + ":" + passWord)}}).then(data => data.json()).then(data => {
                                var {
                                    Items
                                } = data
                                this.setState({courses:Items}) //This sets the catalog of courses
                                console.log(this.state.courses[0].href)


                            })
                    })

            // TODO #2: Set the courses in the state equal to that array of course items
        }
        
        componentDidMount(){
            this.getCourseInformation()
            let decodedURL = decodeURIComponent(window.location.search);

            const urlParams = new URLSearchParams(decodedURL);  
            const darkmode = urlParams.get('darkmode') || false       
            const direction = urlParams.get('direction') || 'column'

            let isCol = direction == 'column' || direction == 'col'

            this.setState({darkmode,  direction});

        }
      render(){

        let decodedURL = decodeURIComponent(window.location.search);

        const urlParams = new URLSearchParams(decodedURL);  
        const darkmode = urlParams.get('darkmode') || false       
        const direction = urlParams.get('direction') || 'column'
        let isCol = direction == 'column' || direction == 'col'
        const scroll = urlParams.get('scroll')
        if (scroll == 'true'){
            console.log("KEEP SCROLL BAR")
            let style_stuff = ""
        }
        else{
            console.log("LOSE THE SCROLL BAR")
            let style_stuff = "<style>::-webkit-scrollbar {   display: none;    }</style>"
        }
        let iframe_height;
        let iframe_width;
        if(direction =='row'){
            iframe_height= '250px'
            iframe_width='100%'
        }
        else { //if row
            iframe_height='245px' 
            iframe_width='210px'
        }
                    


        return(
            
            <div className={styles.noScrollTrial} id="catologcomponent" style={{paddingBottom:"15px;", paddingRight:"15px;"}}>

                {
                    
                //Column Catalog dark mode
                    //this.state.courses.map(course => <iframe src = {'http://127.0.0.1:3006/build/index.html?darkmode=true&direction=column&courseID='+BASE_URL+ course.href} height='245px' width='210px' 
                    //style={{'border-style': 'ridge'}}></iframe>)  
                //Column Catalog light mode
                    // this.state.courses.map(course => <iframe src = {'http://127.0.0.1:3006/build/index.html?darkmode=false&direction=column&courseID='+BASE_URL+ course.href} height='245px' width='210px' 
                    // style={{'border-style': 'ridge'}}></iframe>)  
                
                //Row Catalog dark mode-  only do 10 cards
                    this.state.courses.map((course, index) => index>10? null : <> <iframe className={styles.noScrollTrial} src = {`http://127.0.0.1:3006/build/index.html?darkmode=${darkmode}&direction=${direction}&courseID=`+BASE_URL+ course.href} height={iframe_height} width={iframe_width} 
                    style={{'border-style': 'ridge'}}></iframe> </>) 

                //Row Catalog light mode
                    //this.state.courses.map(course => <iframe src = {'http://127.0.0.1:3006/build/index.html?darkmode=false&direction=row&courseID='+BASE_URL+ course.href} height='180px' width='100%' 
                    //style={{'border-style': 'ridge'}}></iframe>)  


                //Row Catalog light mode
                    //this.state.courses.map(course => <iframe src = {'http://127.0.0.1:3006/build/index.html?darkmode=false&direction=row&courseID='+BASE_URL+ course.href} height='180px' width='100%' 
                    //style={{'border-style': 'ridge'}}></iframe>)  
                }
                
                &nbsp;&nbsp;&nbsp;
            </div>
        )


      }
      
      
      
}


export default CourseCatalog