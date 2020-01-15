# importing the requests library 
import requests 

# api-endpoint 
URL = "https://alpha.nextthought.com/dataserver2/++etc++hostsites/alpha.nextthought.com/++etc++site/Courses/DefaultAPICreated/OUCS-1/CourseCatalogEntry?fields=Creator,CreatedTime"
  
# location given here 
location = "delhi technological university"
  
# defining a params dict for the parameters to be sent to the API 
#PARAMS = {'address':location} 

# defining headers dict for the headers to be sent to the API
HEADERS = {"X-Requested-With":"XMLHTTPRequest",
            "User-Agent":"NextThought OUCS Capstone 1920"}
# sending get request and saving the response as response object 
r = requests.get(url = URL, headers=HEADERS) 
  
# extracting data in json format 
data = r.json() 

DCTitle = data['DCTitle']
CourseNTIID = data['CourseNTIID']


print(DCTitle,"\n",CourseNTIID)