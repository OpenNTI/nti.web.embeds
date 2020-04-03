import React from 'react';
import { checkPropTypes } from 'prop-types';
import "./Card.css";

function toggleMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}



const Card = (props) => (
  <div id = "ClassCard" className="card"style={{
    backgroundColor: props.darkMode ? 'gray':'white',
    maxHeight:"250px",
    height: '100%',
    padding: 8,
    //width: '100%',
    //maxWidth: props.direction == 'row' ? 'none' : "225px",
    maxWidth: "250px",
    //display: 'flex',
    flexDirection: props.direction,
    boxShadow: '10px 10px 5px 0px rgba(181,181,181,1)'

  }}>
    <span>
  <a href={props.courseURL} style={{textDecoration: 'none'}}>
    <div scrolling="no" style={{
              backgroundColor: props.darkMode ? 'gray':'white',
              maxHeight:"250px",
              height: '100%',
              padding: 8,
              width: '100%',
              //maxWidth: props.direction == 'row' ? 'none' : "225px",
              //maxWidth: "780px",
              display: 'flex',
              flexDirection: props.direction,
              boxShadow: '10px 10px 5px 0px rgba(181,181,181,1)'

            }}> 
    
      <img src={props.image} />

      <div style={{margin: 'auto 0'}}>
        <p style={{color: props.darkMode ? 'white' : 'gray', fontWeight: '500'}}>{props.title}</p> 
        <div style={{color: props.darkMode ? 'white' : 'gray', fontWeight: '700'}}>
          {props.description} 
        </div> 
      </div>
    
    </div>
   
  </a>
  </span>
  </div>


  )

export default Card