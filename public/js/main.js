
$(".main>.fa").click(function () {
   $("#back").stop().slideToggle(300);
 });


$(".port").click(function(){
    $(".site").stop().slideToggle(300);
 });


 $("#bar").click(function(){
    $("#bar").hide();
    $("#close").show().click(function(){
      $("#bar").show();
      $("#close").hide();
    });
 });


 
/****사이트 호버 */


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
