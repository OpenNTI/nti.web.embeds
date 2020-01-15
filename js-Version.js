var fetch = require("node-fetch")

var URL = "https://alpha.nextthought.com/dataserver2/++etc++hostsites/alpha.nextthought.com/++etc++site/Courses/DefaultAPICreated/OUCS-1/CourseCatalogEntry?fields=Creator,CreatedTime"

fetch(URL, {headers: {"X-Requested-With":"XMLHTTPRequest","User-Agent":"NextThought OUCS Capstone 1920"}}).then(data => data.json()).then(data => {
                var {
                    DCTitle, CourseNTIID
                } = data
                console.log(DCTitle+"\n"+CourseNTIID)
            })