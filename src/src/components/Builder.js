import React from 'react';
import { checkPropTypes } from 'prop-types';

function Title(props) {
    return <h1>{props.name}</h1>;
}
function BuilderSelect(props) {
    return <select id="builders" onChange={builderSelected(this)}> <option value="courseCard">Course Card</option> <option value="catalog">Catalog</option></select>;
}
function builderSelected() {
    var selection = document.getElementById("builders").value;
    if (selection == "courseCard") {
        document.getElementById("demo").innerHTML = "<CourseCardBuilder name='courseCardBuilder'/>" ;
    }
    if (selection == "catalog") {
        document.getElementById("demo").innerHTML = "<CatalogBuilder name='catalogBuilder'/>" ;
    }}
function VisiblePane(props) {
    return <div id="demo"></div>;
}
const Builder = (props) => (
  <a href="#" style={{textDecoration: 'none'}}>
  <div scrolling="no" style={{
    backgroundColor: props.darkMode ? '#333340':'white',
    maxHeight:"250px",
    height: '100%',
    width: 'fit-content',
    padding: 8,
    maxWidth: props.direction == 'row' ? 'none' : "225px",
    display: 'flex',
    flexDirection: props.direction,
    
    boxShadow: '10px 10px 5px 0px rgba(181,181,181,1)'

  }}> 
    <div onload="updateExtract()" style="font-family: Helvetica, "sans-serif"; background-color: #e8ffef; background-blend-mode: lighten; padding: 10px; margin: 10px; width: 60%; min-width: 715px; display: block; margin-left: auto; margin-right: auto; box-shadow: 10px 10px 8px grey;">
      <Title name="Builder"/>
      <BuilderSelect/>
      <VisiblePane/>
    </div>
  </div></a>
  )

export default Builder