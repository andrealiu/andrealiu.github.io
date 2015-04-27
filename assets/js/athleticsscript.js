$(document).ready(function(){
	
   $(".slider-back").hide();

    var clicksRight = 0;;
    var clicksLeft = 3;
    var currMarginLeft = 0;
    var nextFaded = false;
    var backFaded = true;
    var activeDecorator = "#main-decorator";
    var activeSection = "#main-section";
    $(activeDecorator).show();
    $(".slider-next").click(function() {
        // var currMarginLeft = parseInt($('.slider').css('margin-left').replace("px", ""));
        if (clicksRight >= 3) {
            return false;
        } else {
            currMarginLeft -= 650;
            $("#slider").css("margin-left", (currMarginLeft));
            $("#textBanner-container").css("margin-left", (currMarginLeft));
            clicksRight += 1;
            clicksLeft -= 1;
            if(backFaded) {
                $(".slider-back").fadeIn(400);
                backFaded = false;
            }
            if (clicksRight >= 3) {
                $(".slider-next").fadeOut(600);
                nextFaded = true;
            }
        }
  })

    $(".slider-back").click(function() {
        //var currMarginLeft = parseInt($('.slider').css('margin-left').replace("px", ""));
        if (clicksLeft >= 3) {
            return false;
        } else {
          currMarginLeft += 650;
            $("#slider").css("margin-left", (currMarginLeft));
            $("#textBanner-container").css("margin-left", (currMarginLeft));
            clicksLeft += 1;
            clicksRight -= 1;
            if(nextFaded) {
                $(".slider-next").fadeIn(600);
                nextFaded = false;
            }
            if(clicksLeft >= 3) {
                $(".slider-back").fadeOut(600);
                backFaded = true;
            }
        }
  })

    $("#fall-season").click(function() {
    	if (activeDecorator != "#fall-decorator") {
    		$("#light-notch-container").css("left", 228);
	    	$(activeDecorator).fadeOut(300);
	    	$(activeSection).fadeOut(300);
	    	activeDecorator = "#fall-decorator";
	    	activeSection = "#fall-section";
	    	$(activeDecorator).fadeIn(600);
	    	$(activeSection).fadeIn(600);
    	}

    })

    $("#main-season").click(function() {
    	if (activeDecorator != "#main-decorator") {
    		$("#light-notch-container").css("left", 80);
	    	$(activeDecorator).fadeOut(300);
	    	$(activeSection).fadeOut(300);
	    	activeSection = "#main-section";
	    	activeDecorator = "#main-decorator";
	    	$(activeDecorator).fadeIn(600);
	    	$(activeSection).fadeIn(600);
    	}

    })

    $("#winter-season").click(function() {
    	if (activeDecorator != "#winter-decorator") {
    		$("#light-notch-container").css("left", 415);
	    	$(activeDecorator).fadeOut(300);
	    	$(activeSection).fadeOut(300);
	    	activeSection = "#winter-section";
	    	activeDecorator = "#winter-decorator";
	    	$(activeDecorator).fadeIn(600);
	    	$(activeSection).fadeIn(600);
    	}

    })

    $("#spring-season").click(function() {
    	if (activeDecorator != "#spring-decorator") {
    		$("#light-notch-container").css("left", 615);
	    	$(activeDecorator).fadeOut(300);
	    	$(activeSection).fadeOut(300);
	    	activeSection = "#spring-section";
	    	activeDecorator = "#spring-decorator";
	    	$(activeDecorator).fadeIn(600);
	    	$(activeSection).fadeIn(600);

    	}

    })

    $(".sport-title").hover(function() {
    	$(this).parent().css("-webkit-filter", "brightness(100%)");
    })


});