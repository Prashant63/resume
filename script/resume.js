$(document).ready(function(){
  $("#skills").click(function(){

    $(".content, .profile").css({
    	"display":"none"
    });
    $("#skills_description").css({
    	"display":"block"
    });
  });

  	$("#cs").hover(function(){
    	$("body, footer, header, heading span, aside").css({
    		"background-color": "#FFFFFF",
    		"color": "#000000"
    	});

    	$("#skills_description div:nth-child(even)").css({
  			"background-color":"#ffffff",
			"color": "#000000"
  		});

  		$("#skills_description div:nth-child(odd)").css({
  			"background-color":"#000000",
			"color": "#ffffff"
  		});
  	});

  $("#jq").click(function(){
  	var url = window.location.href;
      	$( "#layout" ).load( url, "#layout");
  });
});
