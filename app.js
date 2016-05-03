//setup panel
var data=[0,1,2,3,4,5];

$(data).each(function(i, element){
  $("#next"+i).click(function(){
    $("#collapse"+i).attr("class", "panel-collapse collapse");
    $("#collapse"+(i+1)).attr("class", "panel-collapse collapse in");
  })
});


//default
$("#setup").show();
$("#battle").hide();

//switch page
$("#next5").click(function(){
  $("#setup").hide();
  $("#battle").show();
});

