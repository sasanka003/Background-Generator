// var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var gradientCSS = document.getElementById("myInput");

function setGradient(){
	body.style.background = "linear-gradient(to right, "+ color1.value +","+ color2.value +")";
	gradientCSS.value = body.style.background + ";" ;
	// console.log(body.style.background);
}

color1.addEventListener("input",setGradient);

color2.addEventListener("input",setGradient);




function copyFunction() {
  var copyText = gradientCSS;
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyText.value);
  
  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copied: " + copyText.value;
}

function outFunc() {
  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copy to clipboard";
}

