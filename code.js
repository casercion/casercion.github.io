function turnpic(){
	     $("img").css("transform", "rotate(-180deg)");
	     $("img").css("-webkit-transform", "rotate(-180deg)");
	     $("img").css("-moz-transform", "rotate(-180deg)");
	}
  
  	function returnpic(){
	     $("img").css("transform", "rotate(0deg)");
	     $("img").css("-webkit-transform", "rotate(0deg)");
	     $("img").css("-moz-transform", "rotate(0deg)");
	}

	function rickroll() {
		$("div#video").html("The video is gone now! :0");
	}

	function nicetry(){
		$("div#video").html("Did you think double-clicking this would bring it back? Nice try")
	}
