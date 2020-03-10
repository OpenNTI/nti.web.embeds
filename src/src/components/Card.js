import React from 'react';
import { checkPropTypes } from 'prop-types';


function toggleMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}

const COMMON_PREFIX = 'tag:nextthought.com,2011-10:';
const HREF_SPECIFIC_TYPE = '__nti_object_href';
const {btoa} = global; 
function encodeIdFrom(href) { 
  try { 
    const id = encodeURIComponent(btoa(href));
    return `${COMMON_PREFIX}${HREF_SPECIFIC_TYPE}-${id}`;
} catch(e) {
    console.error('Missing polyfill for btoa'); 
    throw e; 
  } 
} 
function getRouteForCatalogEntry(entry) { 
  //BASE URL SHOULD GO HERE  https://alpha.nextthought.com
  return `/app/catalog/nti-course-catalog-entry/${encodeIdFrom(entry.href)}`;
}
const Card = (props) => (
  
  <a href={getRouteForCatalogEntry(props.href)} style={{textDecoration: 'none'}}>
  <div scrolling="no" style={{
    backgroundColor: props.darkMode ? 'gray':'white',
    maxHeight:"250px",
    height: '100%',
    
    padding: 8,
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