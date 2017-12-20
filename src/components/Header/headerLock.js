/*
	Locks the header to the top of the page when scrolling down.
*/

var windowMethods = require('../../windowMethods.js');

windowMethods.registerOnLoad(function(){
	var header = document.getElementById("header");
	var bannerHeight = document.getElementById("banner").clientHeight;

	windowMethods.registerOnScroll(function(){	
		var top = document.documentElement.scrollTop;
		if (top > bannerHeight){
			header.style.position = "fixed";
			header.style.top = "0px";
		}else{
			header.style.position = "absolute";
			header.style.top = "";
		}
	});
});