toStyle = document.getElementById("styled");
// inline Style
console.log(toStyle);
toStyle.style.fontWeight = "bold";
toStyle.style.cssText = "color:red; opacity:0.9";

// Setting and Removig inline Style
toStyle.style.removeProperty("opacity");
toStyle.style.setProperty("font-size", "30px");

// Setting and Removing external Style
document.styleSheets[0].rules[0].style.removeProperty("line-height");
document.styleSheets[0].rules[0].style.setProperty("background-color", "grey", "important");