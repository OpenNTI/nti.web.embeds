import React from 'react';
import { checkPropTypes } from 'prop-types';

var courseID=""
var style="row"
var mode="light"

function courseID_Entered(val) {
    courseID = val;
    updateExtract();
}
function styleRadioClick(sourceRad) {
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
    var text="iFrame.src = `http://127.0.0.1:5500/build/index.html?darkmode=${" + mode + "}&direction=${" + style + "}&courseID=${" + courseID + "}` <br/> thisScript.parentNode.insertBefore(iFrame, thisScript.nextSibling)";
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
    <div style={{margin: 'auto 0'}}>
      <h1>Course Card Builder</h1>
      <br/>
      <p>Course URL</p>
      <input type="text" name="CourseID" onchange="courseID_Entered(this.value)">
      <p>Style</p>
      <input type="radio" value="row" id="rowRad" onchange="styleRadioClick(this)">
      <label>Row</label>
      <input type="radio" value="col" id="colRad" onchange="styleRadioClick(this)">
      <label>Column</label>
      <p>Mode</p>
      <input type="radio" value="light" id="lightRad" onchange="modeRadioClick(this)">
      <label>Light</label>
      <input type="radio" value="dark" id="darkRad" onchange="modeRadioClick(this)">
      <label>Dark</label>
      <br/>
      <p>Copy the text below into your page. ...</p>
      <p id="extract">iFrame.src = `http://127.0.0.1:5500/build/index.html?darkmode=${}&direction=${}&courseID=${}` <br/> thisScript.parentNode.insertBefore(iFrame, thisScript.nextSibling)</p>
    </div>
  </div></a>
  )

export default Builder