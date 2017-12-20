/*
	Handles the parallax scrolling of the banner
*/

var windowMethods = require('../../windowMethods.js');

windowMethods.registerOnLoad(function(){
	var img = document.getElementById("bimg");
	windowMethods.registerOnScroll(function(){
		var top = (document.documentElement.scrollTop) / 2 - 650;
		img.style.top = `${top}px`;
	});
});
