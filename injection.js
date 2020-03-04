// Fix CSS
// 
// Move from iFrame in React App to single script that creates iFrame which then loads React app
// Card and Row layout - data-attributes script


const iFrame = document.createElement('iframe')
const thisScript = document.getElementById('capstone')
const darkMode = thisScript.getAttribute('darkMode') || 'false'
const flowDirection = thisScript.getAttribute('direction')
const courseID = thisScript.getAttribute('courseId') || ''
iFrame.src = `http://127.0.0.1:3000/build/index.html?darkmode=${darkMode}&direction=${flowDirection}&courseID=${courseID}`
thisScript.parentNode.insertBefore(iFrame, thisScript.nextSibling)
