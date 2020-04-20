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
class Builder extends React.Component {
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

export default Builder;

ReactDOM.render(<Builder/>, document.getElementById('root'));