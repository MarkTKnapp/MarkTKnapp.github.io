module.exports = {
	registerOnLoad(func){
		var oldOnLoad = window.onload;
		if (typeof window.onload != 'function'){
			window.onload = func;
		}
		else{
			window.onload = function() {
				if (oldOnLoad) 
					oldOnLoad();
				func();
			}
		}
	},

	registerOnScroll(func){
		var oldOnScroll = window.onscroll;
		if (typeof window.onscroll != 'function'){
			window.onscroll = func;
		}
		else{
			window.onscroll = function() {
				if (oldOnScroll) 
					oldOnScroll();
				func();
			}
		}
	}
}