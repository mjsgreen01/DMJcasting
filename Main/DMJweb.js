$(document).ready(function(){

//Navigation Bar Functionality
	$("#about").click(function (e){
        //$(this).animate(function(){
        	e.preventDefault();
            $('html, body').animate({
                scrollTop: $("#sec1").offset().top -100
            }, 1500);
        //});
    });
	$("#services").click(function (e){
        //$(this).animate(function(){
        	e.preventDefault();
            $('html, body').animate({
                scrollTop: $("#sec2").offset().top -100
            }, 1000);
        //});
    });
	$("#technology").click(function (e){
        //$(this).animate(function(){
        	e.preventDefault();
            $('html, body').animate({
                scrollTop: $("#sec3").offset().top -100
            }, 1000);
        //});
    });
	$("#conversions").click(function (e){
        //$(this).animate(function(){
        	e.preventDefault();
            $('html, body').animate({
                scrollTop: $("#sec4").offset().top -100
            }, 1000);
        //});
    });
    $("#faqs").click(function (e){
        //$(this).animate(function(){
        	e.preventDefault();
            $('html, body').animate({
                scrollTop: $("#sec5").offset().top -100
            }, 1000);
        //});
    });
    $("#contactUs").click(function (e){
        //$(this).animate(function(){
        	e.preventDefault();
            $('html, body').animate({
                scrollTop: $("#sec6").offset().top -100
            }, 1000);
        //});
    });


//paralax scrolling effects
var screenTop = $(window).scrollTop();

	function parallax(){
    	var scrolled = $(window).scrollTop();
    	$('.headParal').css('background-position-y', -(scrolled * 0.2) + 'px');
    };

    function parallaxContent(content, adjuster, inertia){
    	var scrolled = $(window).scrollTop();
    	$(content).css('margin-top', -((scrolled + adjuster) * inertia) + 'px');
    };
    
    
    
    if (window.console) console.log(screenTop);

    $(window).scroll(function(e){
    	parallax();
	});

    $(window).scroll(function(e){
    	parallaxContent('.headImg', 65, 0.45);
	});
    
        
   
    

//Google Maps API
	function initialize() {
        var map_canvas = document.getElementById('mapCanvas');
        var map_options = {
          center: new google.maps.LatLng(40.757738,-73.981424),
          zoom: 15,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map = new google.maps.Map(map_canvas, map_options)
        var marker1 = new google.maps.Marker({
	      position: new google.maps.LatLng(40.757738,-73.981424),
	      map: map,
 		 });
      }
      google.maps.event.addDomListener(window, 'load', initialize);


})


$(window).scroll(function () { 
    //You've scrolled this much:
       $('#scrollTopDiv').text($(window).scrollTop());
});