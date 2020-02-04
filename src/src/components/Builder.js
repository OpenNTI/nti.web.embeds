import React from 'react';
import { checkPropTypes } from 'prop-types';

var courseID=""
var style=""
var mode=""

function courseID_Entered(val) {
    courseID = val;
    updateExtract();
}
function modeRadioClick(sourceRad) {
    var rowRad = document.getElementById("rowRad");
    var colRad = document.getElementById("colRad");
    
    if (sourceRad == rowRad) {
        if (rowRad.checked == true) {
            colRad.checked = false;
            style="row";
        }
        else {
            colRad.checked = true;
            style="col";
        }
    }
    else {
        if (colRad.checked == true) {
            rowRad.checked = false;
            style = "col";
        }
        else {
            rowRad.checked = true;
            style = "row";
        }
    }
    updateExtract();
}
function styleRadioClick() {
    var lightRad = document.getElementById("lightRad");
    var darkRad = document.getElementById("darkRad");
    
    if (sourceRad == lightRad) {
        if (lightRad.checked == true) {
            darkRad.checked = false;
            style="light";
        }
        else {
            darkRad.checked = true;
            style="dark";
        }
    }
    else {
        if (darkRad.checked == true) {
            lightRad.checked = false;
            style = "dark";
        }
        else {
            lightRad.checked = true;
            style = "light";
        }
    }
    updateExtract();
}
function updateExtract(sourceFunc) {
    var extract = document.getElementById("extract");
    //TO-DO
}
function toggleMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
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
    <div style={{margin: 'auto 0'}}>
      <h1>Course Card Builder</h1>
      <br/>
      <p>Course URL</p>
      <input type="text" name="CourseURL" onchange="courseID_Entered(this.value)">
      <p>Style</p>
      <input type="radio" value="row" id="rowRad" onchange="styleRadioClick(this)">
      <label>Row</label>
      <input type="radio" value="col" id="colRad" onchange="styleRadioClick(this)">
      <label>Column</label>
      <p>Mode</p>
      <input type="radio" value="light" id="lightRad" onchange="modeRadioClick()">
      <label>Light</label>
      <input type="radio" value="dark" id="darkRad" onchange="modeRadioClick()">
      <label>Dark</label>
      <br/>
      <p>Copy the text below into your page. ...</p>
      <p id="extract"></p>
    </div>
  </div></a>
  )

export default Builder