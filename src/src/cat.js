<script>
//var fetch = require("node-fetch")

var SERVICE_DOCS_URL = "https://alpha.nextthought.com/dataserver2/service"
var userName = "slidingsteven";
var passWord = "Capstone2020";

// function authenticateUser(user, password)
// {
//     var token = user + ":" + password;

//     // Should i be encoding this value????? does it matter???
//     // Base64 Encoding -> btoa
//     var hash = btoa(token); 

//     return "Basic " + hash;
// }

fetch(SERVICE_DOCS_URL, {headers: {
    "X-Requested-With":"XMLHTTPRequest",
    "User-Agent":"NextThought OUCS Capstone 1920",
    "Authorization": "Basic " + btoa(userName + ":" + passWord),
}}).then(data => data.json()).then(data => {
                var {
                    //DCTitle, CourseNTIID
                    Items, Class
                } = data
                console.log(Items+"\n"+Class)
            })


function CallWebAPI() {

    // New XMLHTTPRequest
    var request = new XMLHttpRequest();
    request.open("GET", SERVICE_DOCS_URL, false, userName, passWord);
    //request.setRequestHeader("Authorization", authenticateUser(userName, passWord)); 
    request.send();
    // view request status
    alert(request.status);
    response.innerHTML = request.responseText;
}
</script>

<div>
<div id="response">

</div>
<input type="button" class="btn btn-primary" value="Call Web API" onclick="javascript:CallWebAPI();" />