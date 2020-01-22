import React from 'react';
import { checkPropTypes } from 'prop-types';


function toggleMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}
const Card = (props) => (
  //<iframe title={props.title} id={props.title} frameBorder="0" scrolling="no" width ="250" height="350" src="iframetest.html"></iframe>
  <a href="#"><div scrolling="no" style={{
    backgroundColor: 'white',
    height:"250px",
    width:"225px"

  }}> 
    <img src={props.image} />

    <p style={{backgroundColor:'black', color:'white'}}>{props.title}</p> 
    <div>
      {props.description} 
    </div> 

  </div></a>
  

  )

export default Card