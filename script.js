const GCLUTTER_UI = "gclutter_ui";

// add glcutter_io class to body
var bodyEle = document.body;
bodyEle.classList.add(GCLUTTER_UI);

// toggle gclutter ui class on the body element
function toggleGClutter() {
  var status = bodyEle.classList.toggle(GCLUTTER_UI);
  // console.log("toggle status", status);
  return status;
}

// keyboard shortcut for toggle
function handleToggle(event) {
  // cmd + j
  if (event.metaKey && event.which == 74) {
    toggleGClutter();
    event.preventDefault();
  }
}
window.addEventListener("keydown", handleToggle, false);
