"use strict";

var Game1=(function(originalGame){
  $(document).ready(function(){
    //setup panel
    let data=[0,1,2,3,4];

    $(data).each(i=>
      $("#next"+i).click(function() {
        $("#collapse"+i).attr("class", "panel-collapse collapse");
        $("#collapse"+(i+1)).attr("class", "panel-collapse collapse in");
        $("#collapse"+(i+1)).removeAttr("style");
      }));


    //default
    $("#setup").show();
    $("#battle").hide();
  });

  return originalGame;
})(Game1||{});

