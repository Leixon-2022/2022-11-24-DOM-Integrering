console.log('This script-file is now connected')

// onclick från html

function onClickGetInnerHTML() {
  console.log("We clicked on => onClickGetInnerHTML")
  const text = document.getElementById("paragraph-1").innerHTML
  console.log("Our paragraph 1 text innerHTML is: ", text)

  const preTag = document.getElementById("display-on-click-text")
  preTag.innerText = text

}

function onClickGetInnerText() {
  console.log("We clicked on => onClickGetInnerText")
  const text = document.getElementById("paragraph-1").innerText

  const preTag = document.getElementById("display-on-click-inner-text")
  preTag.innerText = text
}