console.log('This script-file is now connected')

// onclick från html

// för att komma åt all html i elementet
function onClickGetInnerHTML() {
  console.log("We clicked on => onClickGetInnerHTML")
  const text = document.getElementById("paragraph-1").innerHTML
  // console.log("Our paragraph 1 text innerHTML is: ", text)
  const preTag = document.getElementById("display-on-click-text")
  preTag.innerText = text
}

// för att komma åt texten i elementet utan formattering
function onClickGetInnerText() {
  console.log("We clicked on => onClickGetInnerText")
  const text = document.getElementById("paragraph-1").innerText
  const preTag = document.getElementById("display-on-click-inner-text")
  preTag.innerText = text
}

// för att komma åt texten i elementet formatterat utan taggar
function onClickGetTextContent() {
  console.log("We clicked on => onClickGetTextContent")
  const text = document.getElementById("paragraph-1").textContent
  const preTag = document.getElementById("display-on-click-text-content")
  preTag.innerText = text
}

function onClickRepeatContent() {
  const paragraphRepeatText = document.getElementById("paragraph-repeat-text")
  // paragraphRepeatText.innerHTML = paragraphRepeatText.innerHTML + paragraphRepeatText.innerHTML
  paragraphRepeatText.innerHTML += paragraphRepeatText.innerHTML
}