$(document).ready(function(){
   $("#btnhide").click(function(){
      $("#mySidenav").hide()
      $("#main").css('margin-left',0);
   });
   $("#btnshow").click(function(){
    $("#mySidenav").show()
   //  $("#main").css('margin-left',250);
 });
});