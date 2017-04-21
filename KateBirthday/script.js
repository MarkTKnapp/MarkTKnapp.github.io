$(document).ready(function(){
  	$(".main").onepage_scroll({
	   sectionContainer: "section",     // sectionContainer accepts any kind of selector in case you don't want to use section
	   easing: "ease",                  // Easing options accepts the CSS3 easing animation such "ease", "linear", "ease-in",
	                                    // "ease-out", "ease-in-out", or even cubic bezier value such as "cubic-bezier(0.175, 0.885, 0.420, 1.310)"
	   animationTime: 1000,             // AnimationTime let you define how long each section takes to animate
	   pagination: true,                // You can either show or hide the pagination. Toggle true for show, false for hide.
	   updateURL: false,                // Toggle this true if you want the URL to be updated automatically when the user scroll to each page.
	   beforeMove: function(index) {},  // This option accepts a callback function. The function will be called before the page moves.
	   afterMove: function(index) {},   // This option accepts a callback function. The function will be called after the page moves.
	   loop: false,                     // You can have the page loop back to the top/bottom when the user navigates at up/down on the first/last page.
	   keyboard: true,                  // You can activate the keyboard controls
	   responsiveFallback: false,        // You can fallback to normal page scroll by defining the width of the browser in which
	                                    // you want the responsive fallback to be triggered. For example, set this to 600 and whenever
	                                    // the browser's width is less than 600, the fallback will kick in.
	   direction: "vertical"            // You can now define the direction of the One Page Scroll animation. Options available are "vertical" and "horizontal". The default value is "vertical".  
	});
});

function load(){
	var balloons = document.getElementById("balloons");
	var balloon1 = document.getElementById("balloon1");
	var balloon2 = document.getElementById("balloon2");
	var balloon3 = document.getElementById("balloon3");
	var top = document.documentElement.clientHeight;
	var topball = 0;
	setInterval(function(){ 
		balloons.style.top = top + "px";
		balloon1.style.top = (60 + Math.sin(topball / 60)        * 10) + "px";
		balloon2.style.top = (30 + Math.sin((topball + 20) / 60) * 10) + "px";
		balloon3.style.top = (0  + Math.sin((topball + 40) / 60) * 10) + "px";
		if (top > 200)
			top -= 1;
		else {
			top -= (top / 200)
		}
		topball = topball + 1;
	}, 10);
}

function scroll(){
	/*$('html, body').animate({
	    scrollTop: $("#second").offset().top;
	  });*/

	//document.getElementById('second').scrollIntoView();
	/*if (document.body.scrollTop > 50){
		console.log("T");
	    var ttop = $('#second').offset().top;
	    $('html,body').animate({scrollTop: ttop}, 1000);
	}*/
}

var lastScrollTop = 0;
/*$(window).scroll(function(event){
	return 1;
   var st = $(this).scrollTop();
   if (st > lastScrollTop){
       // downscroll code
       console.log("st: " + st);
       console.log("last: " + lastScrollTop);
	    var ttop = $('#second').offset().top;
	    $('html,body').animate({scrollTop: ttop}, 1000);
   } else {
      // upscroll code
       console.log("st: " + st);
       console.log("last: " + lastScrollTop);
   }
   lastScrollTop = st;
});*/

$(window).on('resize', function() {
    if($(window).width()/$(window).height() < 1.5) {
        $('.bgimage').addClass('fillHeight');
        $('.bgimage').removeClass('fillWidth');
    }else{
        $('.bgimage').addClass('fillWidth');
        $('.bgimage').removeClass('fillHeight');
    }
})