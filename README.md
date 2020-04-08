# nti.web.embeds

## Overview
This branch is used for the development and maintenance of embedable web elements. These web elements include course cards and course catalogues. Customers can embed these elements into their own sites with the help of the builder component.
## Prerequisites
Before starting installation, make sure you have the following installed on your computer:
- Node.js version v13.6.0
- npm version 6.13.4
## Installation
You can set up this environment on your own computer by following these steps:
1. Clone the repository
2. Open the Node.js command prompt
3. Navigate to the 'src' folder (relative path - nti.web.embeds/src)
4. Run 'npm install'
5. Run 'npm run start'
## Course card 
The course card components display the title, image, and quick description of any available course. The component can be altered in terms of light or dark mode and row or column display. You can embed this component using the builder component. You can find the javascript file for the course card under /src/src/components/Card.js .
## Catalogue 
The catalogue component displays a list of many course cards. This component can also be altered in terms of light or dark mode. You can embed this component using the builder component. You can find the javascript file for the catalogue under /src/src/components/CourseCatalogue.js .
## Builder 
The builder component allows users to select what component they would like to embed and produce they code they need to insert into an HTML file. This is done by allowing users to input dark/light mode and orientation as well as a link (to the course for the course card or to multiple courses for the catalogue). You can find the javascript file for the catalogue under /src/src/components/Builder.js .
## Server links
- Link to course card -> 
- Link to catalogue ->
- Link to builder -> 

### TODO
user guide 
  - once everything is up and running, this is what it should look like
    - screenshots
  - general info about the project
