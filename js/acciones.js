// JavaScript Document

$(document).ready(function() {
	document.addEventListener("deviceready", function(){
	   $('#B1').tap(function(){
		    navigator.notification.beep(3);
	   }); //TAP B1
	}); //device ready
});//ready