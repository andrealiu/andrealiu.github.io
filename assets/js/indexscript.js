$(document).ready(function(){

    $(".slider-back").hide();

    var clicksRight = 0;;
    var clicksLeft = 4;
    var currMarginLeft = 0;
    var nextFaded = false;
    var backFaded = true;
    $(".slider-next").click(function() {
        // var currMarginLeft = parseInt($('.slider').css('margin-left').replace("px", ""));
        if (clicksRight >= 4) {
            return false;
        } else {
            currMarginLeft -= 768;
            $(".slider").css("margin-left", (currMarginLeft));
            clicksRight += 1;
            clicksLeft -= 1;
            if(backFaded) {
                $(".slider-back").fadeIn(400);
                backFaded = false;
            }
            if (clicksRight >= 4) {
                $(".slider-next").fadeOut(600);
                nextFaded = true;
            }
        }
  })

    $(".slider-back").click(function() {
        //var currMarginLeft = parseInt($('.slider').css('margin-left').replace("px", ""));
        if (clicksLeft >= 4) {
            return false;
        } else {
          currMarginLeft += 768;
            $(".slider").css("margin-left", (currMarginLeft));
            clicksLeft += 1;
            clicksRight -= 1;
            if(nextFaded) {
                $(".slider-next").fadeIn(600);
                nextFaded = false;
            }
            if(clicksLeft >= 4) {
                $(".slider-back").fadeOut(600);
                backFaded = true;
            }
        }
  })

    var activeMission = "#n-mission";
    var activeMissionExpansion ="#Nmission";
    $(activeMission).addClass("active-mission");

    $("#n-mission").hover(function() {
        $(".right-notch").css("top", 215);
        if (activeMission != "#n-mission") {
            $(activeMission).removeClass("active-mission");
            $(activeMissionExpansion).hide()
            $("#n-mission").addClass("active-mission");
            $("#Nmission").fadeIn(600);
            activeMission = "#n-mission";
            activeMissionExpansion = "#Nmission";
        }


    })

    $("#p-mission").hover(function() {
        $(".right-notch").css("top", 300);
        if (activeMission != "#p-mission") {
            $(activeMission).removeClass("active-mission");
            $(activeMissionExpansion).hide()
            $("#p-mission").addClass("active-mission");
            $("#Pmission").fadeIn(600);
            activeMission = "#p-mission";
            activeMissionExpansion = "#Pmission";
        }

    })

    $("#h-mission").hover(function() {
        $(".right-notch").css("top", 380);
        if (activeMission != "#h-mission") {
            $(activeMission).removeClass("active-mission");
            $(activeMissionExpansion).hide()
            $("#h-mission").addClass("active-mission");
            $("#Hmission").fadeIn(600);
            activeMission = "#h-mission";
            activeMissionExpansion = "#Hmission";
        }

    })

    $("#s-mission").hover(function() {
        $(".right-notch").css("top", 470);
        if (activeMission != "#s-mission") {
            $(activeMission).removeClass("active-mission");
            $(activeMissionExpansion).hide()
            $("#s-mission").addClass("active-mission");
            $("#Smission").fadeIn(600);
            activeMission = "#s-mission";
            activeMissionExpansion = "#Smission";
        }
    })

});