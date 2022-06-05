function hamburgerIcon() {
  var x = document.getElementById("menuBarID");
  if (x.className === "menuBar") {
    x.className += " responsive";
  } else {
    x.className = "menuBar";
  }
}