import React from 'react';
import { checkPropTypes } from 'prop-types';

var courseURL=""
var style="row"
var mode="light"
var height="180px"
var width="100%"

function courseURL_Entered(val) {
    courseURL = encodeURIComponent(val);
    updateExtract();
}
function styleRadioClick(sourceRad) {
    var rowRad = document.getElementById("rowRad");
    var colRad = document.getElementById("colRad");
    
    if (sourceRad == rowRad) {
        if (rowRad.checked == true) {
            colRad.checked = false;
            style="row";
            height="180px";
            width="100%";
        }
        else {
            colRad.checked = true;
            style="col";
            height="245px";
            width="210px";
        }
    }
    else {
        if (colRad.checked == true) {
            rowRad.checked = false;
            style = "col";
            height="245px";
            width="210px";
        }
        else {
            rowRad.checked = true;
            style = "row";
            height="180px";
            width="100%";
        }
    }
    updateExtract();
}
function modeRadioClick(sourceRad) {
    var lightRad = document.getElementById("lightRad");
    var darkRad = document.getElementById("darkRad");
    
    if (sourceRad == lightRad) {
        if (lightRad.checked == true) {
            darkRad.checked = false;
            mode="false";
        }
        else {
            darkRad.checked = true;
            mode="true";
        }
    }
    else {
        if (darkRad.checked == true) {
            lightRad.checked = false;
            mode = "true";
        }
        else {
            lightRad.checked = true;
            mode = "false";
        }
    }
    updateExtract();
}
function updateExtract() {
    var extract = document.getElementById("extract");
    var text="&lt;iFrame src='http://127.0.0.1:5500/build/index.html?darkmode=" + mode + "&direction=" + style + "&courseID=" + courseURL + "' style=\"height: " + height + "; width: " + width + "; \" /&gt;";
    extract.innerHTML = text;
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
    <div onload="updateExtract()" style="font-family: Helvetica, "sans-serif"; background-color: #e8ffef; background-blend-mode: lighten; padding: 10px; margin: 10px; width: 60%; min-width: 715px; display: block; margin-left: auto; margin-right: auto; box-shadow: 10px 10px 8px grey;">
      <h1>Course Card Builder</h1>
      <br/>
      <h3>Course URL</h3>
      <input type="text" name="CourseURL" onchange="courseURL_Entered(this.value)">
      <br/>
      <h3>Style</h3>
      <input type="radio" value="row" id="rowRad" onchange="styleRadioClick(this)">
      <label>Row</label>
      <input type="radio" value="col" id="colRad" onchange="styleRadioClick(this)">
      <label>Column</label>
      <br/>
      <h3>Mode</h3>
      <input type="radio" value="light" id="lightRad" onchange="modeRadioClick(this)">
      <label>Light</label>
      <input type="radio" value="dark" id="darkRad" onchange="modeRadioClick(this)">
      <label>Dark</label>
      <br/>
      <h3>Copy the text below into your page. ...</h3>
      <textarea id="extract" style="width: 95%">&lt;iFrame src='http://127.0.0.1:5500/build/index.html?darkmode=false&direction=row&courseID=' style="height: 180px; width: 100%;"/&gt; </textarea>
    </div>
  </div></a>
  )

export default Builder