
// /*
// $(".xs").mousemove(function(evt){
//     var delta = 30;
//     var cY = evt.clientY;
//     var iY = $(this).find(".phone").height()/2;
//     var mY = (iY - cY)/delta;
//     $(this).find(".phone").css("transform","translate("+mY+"px)")
// });
// */

// var meChk = false;

// $("#me").click(function(){
//     if(!meChk) {
//         $(".xs").stop().animate({"left":"20%"},500, "linear", function(){
//             $(this).stop().animate({"top":"-5%"}, 1500, "swing");
//             $("#cont_about").stop().animate({"top":"9%"}, 1500, "linear");
//             meChk = true;
//         });
//     }
//     else {
//         $("#cont_skill").stop().css({"top":"110%"});
//         $("#cont_about").stop().animate({"top":"9%"}, 1500, "linear");
//     }
// });

// $("#skill").click(function(){
//     if(!meChk) {
//         $(".xs").stop().animate({"left":"20%"},500, "linear", function(){
//             $(this).stop().animate({"top":"-5%"}, 1500, "swing");
//             $("#cont_skill").stop().animate({"top":"9%"}, 1500, "linear");
//             meChk = true;
//         });
//     }
//     else {
//         $("#cont_about").stop().css({"top":"110%"});
//         $("#cont_skill").stop().animate({"top":"9%"}, 1500, "linear");
//     }
// });
// /****사이트 호버 */
// $(".site>a").hover(function(){
//     $(".xs").stop().animate({"top":"5%"}, 1000, "linear");
// }, function(){
//     $(".xs").stop().animate({"top":"-5%"}, 1000, "linear");
// });



// var n = 0;
// $(".site>a").click(function(){
//     n = $(this).index();
//     $("#back").stop().slideUp(100, function(){
//         $(".site_img > img").hide();
//         $(".site_img > img").eq(n).show();
//     });
// });


// $(".site>a").hover(function(){
//     n = $(this).index();
//    $(".site>a").eq(n).show();
// }, function(){
//     $(".site>a").hide();
// });


// /*****나무 효과 *****/
// $(".main").mousemove(function(evt){
//     var delta = 30;
//     var cX = evt.clientX;
//     var iX = $(this).find(".main_tree2").width()/2;
//     var cY = evt.clientY;
//     var iY = $(this).find(".main_tree2").height()/2;
//     //중심iX보다 적을때는 +쪽으로 밀어내고 iX보다 클때는 -쪽으로 밀어냄
//     var mX = (iX - cX)/delta * 0.15;
//     var mY = (iY - cY)/delta * 0.15;
//     $(this).find(".main_tree2").css("transform","translate("+mX+"px, "+mY+"px)")
// });










// $(".main>.fa").click(function () {
//    $("#back").stop().slideToggle(300);
//  });


// $(".port").click(function(){
//     $(".site").stop().slideToggle(300);
//  });


//  $("#bar").click(function(){
//     $("#bar").hide();
//     $("#close").show().click(function(){
//       $("#bar").show();
//       $("#close").hide();
//     });
//  });
