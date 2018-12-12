
/*
$(".xs").mousemove(function(evt){
    var delta = 30;
    var cY = evt.clientY;
    var iY = $(this).find(".phone").height()/2;
    var mY = (iY - cY)/delta;
    $(this).find(".phone").css("transform","translate("+mY+"px)")
});
*/

var meChk = false;

$("#me").click(function(){
    if(!meChk) {
        $(".xs").stop().animate({"left":"20%"},500, "linear", function(){
            $(this).stop().animate({"top":"-5%"}, 1500, "swing");
            $("#cont_about").stop().animate({"top":"9%"}, 1500, "linear");
            meChk = true;
        });
    }
    else {
        $("#cont_skill").stop().css({"top":"110%"});
        $("#cont_about").stop().animate({"top":"9%"}, 1500, "linear");
    }
});

$("#skill").click(function(){
    if(!meChk) {
        $(".xs").stop().animate({"left":"20%"},500, "linear", function(){
            $(this).stop().animate({"top":"-5%"}, 1500, "swing");
            $("#cont_skill").stop().animate({"top":"9%"}, 1500, "linear");
            meChk = true;
        });
    }
    else {
        $("#cont_about").stop().css({"top":"110%"});
        $("#cont_skill").stop().animate({"top":"9%"}, 1500, "linear");
    }
});
/****사이트 호버 */
$(".site>a").hover(function(){
   $(".xs").hide()
}, function(){
    $(".content").hide()
});

$(".port").hover(function(){
    $("#bgs").show()
}, function(){
    $("#bgs").hide()
});


$(".site>a:first-child").hover(function(){
   $("#novo").show()
}, function(){
    $("#novo").hide()
});


$(".site>a:nth-child(2)").hover(function(){
    $("#kim").show()
 }, function(){
     $("#kim").hide()
 });

 
$(".site>a:nth-child(3)").hover(function(){
    $("#toms").show()
 }, function(){
     $("#toms").hide()
 });

 
$(".site>a:nth-child(4)").hover(function(){
    $("#ns").show()
 }, function(){
     $("#ns").hide()
 });

 
$(".site>a:nth-child(5)").hover(function(){
    $("#guri").show()
 }, function(){
     $("#guri").hide()
 });
