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
			styling="border-style: ridge";

        }
        else {
            darkRad.checked = true;
            mode="true";
			styling="border-style: none";

        }
    }
    else {
        if (darkRad.checked == true) {
            lightRad.checked = false;
            mode = "true";
			styling="border-style: none";

        }
        else {
            lightRad.checked = true;
            mode = "false";
			styling="border-style: ridge";

        }
    }
    updateExtract();
}
function updateExtract() {
    var extract = document.getElementById("extract");
    //var text="&lt;iFrame src='http://127.0.0.1:5500/build/index.html?darkmode=" + mode + "&direction=" + style + "&courseID=" + courseURL + "' style=\"height: " + height + "; width: " + width + "; \" /&gt;";
	var text = `&lt;iframe src = 'http://127.0.0.1:3000/build/index.html?darkmode=${mode}&direction=${style}&courseID=${courseURL}' height='${height}' width='${width}' style='${styling}' &gt; &lt;/iframe&gt`

    extract.innerHTML = text;
}
function toggleMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}
function Label(props) {
    return <label>{props.name}</label>;
}
function Title(props) {
    return <h1>{props.name}</h1>;
}
function Header(props) {
    return <br/><h3>{props.name}</h3>;
}
function Extract(props) {
    return <textarea id="extract" style="width: 95%">{props.name}</textarea>;
}
function TextInput(props) {
    return <input type="text" name={props.name} onChange={courseURL_Entered(this.value)}>;
}
function StyleRadioButton(props) {
    return <input type="radio" value={props.name} id={props.id} onChange={styleRadioClick(this)}>
}
function ModeRadioButton(props) {
    return <input type="radio" value={props.name} id={props.id} onChange={modeRadioClick(this)}>
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
      <Title name="Course Card Builder"/>
      <Header name="Course URL"/>
      <TextInput name="CourseURL"/>
      <Header name="Style"/>
      <StyleRadioButton props.name="row" props.id="rowRad"/>
      <Label name="Row"/>
      <StyleRadioButton props.name="col" props.id="colRad"/>
      <Label name="Column"/>
      <Header name="Mode"/>
      <ModeRadioButton props.name="light" props.id="lightRad"/>
      <Label name="Light"/>
      <ModeRadioButton props.name="dark" props.id="darkRad"/>
      <Label name="dark"/>
      <Header name="Copy the text below into your page. ..."/>
      <Extract name="&lt;iFrame src='http://127.0.0.1:5500/build/index.html?darkmode=false&direction=row&courseID=' height='180px' width='100%' style='border-style: ridge'/&gt;"/>
 
    </div>
  </div></a>
  )

export default Builder