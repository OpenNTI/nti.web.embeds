    import React, { Component } from 'react';
    import { checkPropTypes } from 'prop-types';
    
    // Functional Components
    function Title(props) {
        return <h1>{props.name}</h1>;
    }
    function Label(props) {
        return <label>{props.name}</label>;
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
    function CatalogTextInput(props) {
        return <input type="text" name={props.name} onChange={catalogURL_Entered(this.value)}>;
    }
    function CatalogStyleRadioButton(props) {
        return <input type="radio" value={props.name} id={props.id} onChange={catalogStyleRadioClick(this)}>
    }
    function CatalogModeRadioButton(props) {
        return <input type="radio" value={props.name} id={props.id} onChange={catalogModeRadioClick(this)}>
    }
    function CardTextInput(props) {
        return <input type="text" name={props.name} onChange={courseURL_Entered(this.value)}>;
    }
    function CardStyleRadioButton(props) {
        return <input type="radio" value={props.name} id={props.id} onChange={cardStyleRadioClick(this)}>
    }
    function CardModeRadioButton(props) {
        return <input type="radio" value={props.name} id={props.id} onChange={cardModeRadioClick(this)}>
    }
    function BuilderSelect(props) {
        return <select id="builders" onChange={builderSelected(this)}> <option value="courseCard">Course Card</option> <option value="catalog">Catalog</option></select>;
    }
    function VisiblePane(props) {
        return <div id="demo"></div>;
    }
            
    // Catalog Builder
    class CatalogBuilder extends React.Component {
        var catalog_URL=""
        var catalog_style="row"
        var catalog_mode="true"
        var catalog_height="180px"
        var catalog_width="100%"
        
        catalogURL_Entered(val) {
            catalog_URL = encodeURIComponent(val);
            updateCatalogExtract();
        }
        catalogStyleRadioClick(sourceRad) {
            var rowRad = document.getElementById("rowRad");
            var colRad = document.getElementById("colRad");
    
            if (sourceRad == rowRad) {
                if (rowRad.checked == true) {
                    colRad.checked = false;
                    style="row";
                    height="500px";
                    width="910px";
                }
                else {
                    colRad.checked = true;
                    style="column";
                    height="490px";
                    width="910px";
                }
            }
            else {
                if (colRad.checked == true) {
                    rowRad.checked = false;
                    style = "column";
                    height="490px";
                    width="910px";
                }
                else {
                    rowRad.checked = true;
                    style = "row";
                    height="500px";
                    width="910px";
                }
            }
            updateCatalogExtract();
        }
        catalogModeRadioClick(sourceRad) {
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
            updateCatalogExtract();
        }
        updateCatalogExtract() {
            var extract = document.getElementById("extract");
            var text = `&lt;iFrame src='http://127.0.0.1:3006/?darkmode=${catalog_mode}&direction=${catalog_style}&courseID=${catalog_courseURL}' height='${catalog_height}' width='${catalog_}'  sandbox='allow-scripts allow-top-navigation'/&gt;`;
            
            extract.innerHTML = text;
        }
        render() {
            return (
                <div onload="updateExtract()" style="font-family: Helvetica, "sans-serif"; background-color: #e8ffef; background-blend-mode: lighten; padding: 10px; margin: 10px; width: 60%; min-width: 715px; display: block; margin-left: auto; margin-right: auto; box-shadow: 10px 10px 8px grey;">
                    <Title name="Catalog Builder"/>
                    <Header name="URL"/>
                    <CatalogTextInput name="URL"/>
                    <Header name="Style"/>
                    <CatalogStyleRadioButton props.name="row" props.id="rowRad"/>
                    <Label name="List"/>
                    <CatalogStyleRadioButton props.name="col" props.id="colRad"/>
                    <Label name="Grid"/>
                    <Header name="Mode"/>
                    <CatalogModeRadioButton props.name="light" props.id="lightRad"/>
                    <Label name="Light"/>
                    <CatalogModeRadioButton props.name="dark" props.id="darkRad"/>
                    <Label name="Dark"/>
                    <Header name="Copy the text below into your page. ..."/>
                    <Extract name="&lt;iFrame src='http://127.0.0.1:3000/?darkmode=true&direction=row&courseID=' height='500px' width='910px'  sandbox='allow-scripts allow-top-navigation'/&gt;"/>
                </div>        
            );
        }
    }
    
    // Course Card Builder
    class CourseCardBuilder extends React.Component {
        var courseURL=""
        var card_style="row"
        var card_mode="false"
        var card_height="180px"
        var card_width="100%"
        var card_styling="border-style: ridge"

        courseURL_Entered(val) {
            courseURL = encodeURIComponent(val);
            updateCardExtract();
        }
        cardStyleRadioClick(sourceRad) {
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
            updateCardExtract();
        }
        cardModeRadioClick(sourceRad) {
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
            updateCardExtract();
        }
        updateCardExtract() {
            var extract = document.getElementById("extract");
            var text = `&lt;iframe src = 'http://127.0.0.1:3006/build/index.html?darkmode=${card_mode}&direction=${card_style}&courseID=${courseURL}' height='${card_height}' width='${card_width}' style='${card_styling}' &gt; &lt;/iframe&gt`
            
            extract.innerHTML = text;
        }
        render() {
            return (
                <div onload="updateExtract()" style="font-family: Helvetica, "sans-serif"; background-color: #e8ffef; background-blend-mode: lighten; padding: 10px; margin: 10px; width: 60%; min-width: 715px; display: block; margin-left: auto; margin-right: auto; box-shadow: 10px 10px 8px grey;">
                    <Title name="Course Card Builder"/>
                    <Header name="Course URL"/>
                    <CardTextInput name="CourseURL"/>
                    <Header name="Style"/>
                    <CardStyleRadioButton props.name="row" props.id="rowRad"/>
                    <Label name="Row"/>
                    <CardStyleRadioButton props.name="col" props.id="colRad"/>
                    <Label name="Column"/>
                    <Header name="Mode"/>
                    <CardModeRadioButton props.name="light" props.id="lightRad"/>
                    <Label name="Light"/>
                    <CardModeRadioButton props.name="dark" props.id="darkRad"/>
                    <Label name="Dark"/>
                    <Header name="Copy the text below into your page. ..."/>
                    <Extract name="&lt;iFrame src='http://127.0.0.1:3006/build/index.html?darkmode=false&direction=row&courseID=' height='180px' width='100%' style='border-style: ridge'/&gt;"/>
                </div>
            );
        }
    }
            
    // Builder
    class Builder extends React.Component {
        builderSelected() {
            var selection = document.getElementById("builders").value;
            if (selection == "courseCard") {
                document.getElementById("demo").innerHTML = "<CourseCardBuilder/>" ;
            }
            if (selection == "catalog") {
                document.getElementById("demo").innerHTML = "<CatalogBuilder/>" ;
            }
        }

        render() {
            return (
                <div onload="updateExtract()">
                    <Title name="Builder"/> 
                    <BuilderSelect/> 
                    <VisiblePane/>
                </div>
            );
        }  
    }

    export default CatalogBuilder;
    export default CourseCardBuilder;
    export default Builder;
        
    ReactDOM.render(<Builder/>, document.getElementById('root'));