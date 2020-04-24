import React from 'react';
import { checkPropTypes } from 'prop-types';
import defcard from './defaultClassCard.png'
//import './card.css';

function toggleMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}



const Card = (props) => (
  
  <a href={props.courseURL} style={{textDecoration: 'none'}}>
  <div scrolling="no" style={{
    backgroundColor: props.darkMode ? 'gray':'white',
    maxHeight:"250px",
    borderRadius: '20px',
    height: '100%',
    padding: 8,
    maxWidth: props.direction == 'row' ? 'none' : "225px",
    display: 'flex',
    flexDirection: props.direction,
    boxShadow: '10px 10px 5px 0px rgba(181,181,181,1)'

  }}> 
    <img src={props.image} style={{borderRadius: '20px', paddingBottom: '10'}} height="232" width="170" onError={(e)=>{e.target.onerror = null; e.target.src="/static/media/defaultClassCard.0af5809a.png"}} />

    <div style={{margin: 'auto 0'}}>
      <p style={{color: props.darkMode ? 'white' : 'gray', fontWeight: '500'}}>{props.title}</p> 
      <div style={{color: props.darkMode ? 'white' : 'gray', fontWeight: '700'}}>
        {props.description} 
      </div> 
    </div>

  </div>
  </a>
  


  )

export default Card