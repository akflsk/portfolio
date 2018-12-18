
/*
$(".xs").mousemove(function(evt){
    var delta = 30;
    var cY = evt.clientY;
    var iY = $(this).find(".phone").height()/2;
    var mY = (iY - cY)/delta;
    $(this).find(".phone").css("transform","translate("+mY+"px)")
});
*/

/*****나무 효과 *****/
$(".main").mousemove(function(evt){
    var delta = 30;
    var cX = evt.clientX;
    var iX = $(this).find(".main_tree2").width()/2;
    var cY = evt.clientY;
    var iY = $(this).find(".main_tree2").height()/2;
    //중심iX보다 적을때는 +쪽으로 밀어내고 iX보다 클때는 -쪽으로 밀어냄
    var mX = (iX - cX)/delta * 0.15;
    var mY = (iY - cY)/delta * 0.15;
    $(this).find(".main_tree2").css("transform","translate("+mX+"px, "+mY+"px)")
});


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


var n = 0;
var clickChk = true;

// $(".site>a").click(function(){
//     n = $(this).index();
//     $("#close").trigger("click");
//     $(".site_img>li>img").eq(n).show();
//     $(".xs").stop().animate({"top":"5%"}, 1000, "linear");
//     $("#bar").show();
//     $("#close").hide();
// });



$(".site>a").click(function(){
    n = $(this).index();
    $("#close").trigger("click");
    $(".site_img>li>img").eq(n).show();
    $(".site_img>li>a").eq(n).show();
    $(".xs").stop().animate({"top":"5%"}, 1000, "linear");
    $("#bar").show();
    $("#close").hide();
});











$(".site>a").hover(function(){
    if(clickChk) {
        $(".site_img>li>img").eq($(this).index()).show();
        $(".xs").stop().animate({"top":"5%"}, 1000, "linear");
    }
}, function(){
    console.log("hoverOut");
    if(clickChk) {
        $(".site_img>li>img").hide();
        // $(".xs").stop().animate({"top":"-5%"}, 1000, "linear");
    }
});


















$(".port").click(function(){
    $(".site").stop().slideToggle(300);
 });


 $("#bar").click(function(){
    clickChk = true;
    $("#back").stop().slideDown(300);
    $("#bar").hide();
    $("#close").show();
 });

 $("#close").click(function(){
    clickChk = false;
    $("#back").stop().slideUp(300);
    $("#bar").show();
    $("#close").hide();
  });
