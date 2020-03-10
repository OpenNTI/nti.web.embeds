// Fix CSS
// 
// Move from iFrame in React App to single script that creates iFrame which then loads React app
// Card and Row layout - data-attributes script


const iFrame = document.createElement('iframe')
const thisScript = document.getElementById('capstone')
const darkMode = thisScript.getAttribute('darkMode') || 'false'
const flowDirection = thisScript.getAttribute('direction')
const courseID = thisScript.getAttribute('courseId') || ''
//iFrame.style = "overflow:hidden"
iFrame.src = `https://morning-springs-67368.herokuapp.com/build/index.html?darkmode=${darkMode}&direction=${flowDirection}&courseID=${courseID}`
thisScript.parentNode.insertBefore(iFrame, thisScript.nextSibling)
