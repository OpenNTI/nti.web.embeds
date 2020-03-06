import React from 'react';
import { checkPropTypes } from 'prop-types';

var courseURL=""
var style="row"
var mode="light"
var height="100"
var width="100"

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
            height="100";
            width="100";
        }
        else {
            colRad.checked = true;
            style="col";
            height="100";
            width="100";
        }
    }
    else {
        if (colRad.checked == true) {
            rowRad.checked = false;
            style = "col";
            height="100";
            width="100";
        }
        else {
            rowRad.checked = true;
            style = "row";
            height="100";
            width="100";
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
            mode="light";
        }
        else {
            darkRad.checked = true;
            mode="dark";
        }
    }
    else {
        if (darkRad.checked == true) {
            lightRad.checked = false;
            mode = "dark";
        }
        else {
            lightRad.checked = true;
            mode = "light";
        }
    }
    updateExtract();
}
function updateExtract() {
    var extract = document.getElementById("extract");
    var text="&lt;iFrame src='http://127.0.0.1:5500/build/index.html?darkmode=" + mode + "&direction=" + style + "&courseID=" + courseURL + "' style=\"height: " + height + "px; width: " + width + "px; \" /&gt;";
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
      <pre><code id="extract" style="padding: 12px; outline: auto; outline-style: solid; outline-color: black; outline-width: thin; width: 200px; white-space: pre-wrap;">&lt;iFrame src='http://127.0.0.1:5500/build/index.html?darkmode=&direction=&courseID=' style="height: 100px; width: 100px;"/&gt; </code></pre>
    </div>
  </div></a>
  )

export default Builder