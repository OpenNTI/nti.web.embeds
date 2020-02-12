import React from 'react';
import { checkPropTypes } from 'prop-types';


function toggleMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}
const Card = (props) => (
  <a href="#" style={{textDecoration: 'none'}}>
  <div  style={{
    position: "fixed",
    backgroundColor: props.darkMode ? '#333340':'white',
    maxHeight:"250px",
    height: '100%',
    width: 'fit-content',
    padding: 8,
    scrolling:"no",
    maxWidth: props.direction == 'row' ? 'none' : "225px",
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

  </div></a>
  


  )

export default Card