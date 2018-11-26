
$(".xs").mousemove(function(evt){
    var delta = 30;
    var cY = evt.clientY;
    var iY = $(this).find(".phone").height()/2;
    var mY = (iY - cY)/delta;
    $(this).find(".phone").css("transform","translate("+mY+"px)")
});



