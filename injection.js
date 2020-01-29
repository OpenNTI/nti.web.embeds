// Fix CSS
// 
// Move from iFrame in React App to single script that creates iFrame which then loads React app
// Card and Row layout - data-attributes script


const iFrame = document.createElement('iframe')
const thisScript = document.getElementById('capstone')
iFrame.contentWindow.nXTID = thisScript.dataset.courseID
iFrame.src = "http://127.0.0.1:5500/index.html"
thisScript.parentNode.insertBefore(iFrame, thisScript.nextSibling)
