window.onload = whichMe;

var logos = new Array("img/me_0.png");
var totalPictures = 10;
var i;
var pictureName = "";

//Which me am I gonna be today
function whichMe() {

	for(i=1; i < totalPictures; i++ ){
	pictureName += "img/me_" + i + ".png";
	logos.push(pictureName);
	pictureName = "";
}

     var random = Math.floor(Math.random() * logos.length);
     document.getElementById("profile").src = logos[random];
 }
