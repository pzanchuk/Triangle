$(document).ready(function(){
  $("#formOne").submit(function(event){

    var animalpick = $("input:radio[name=animals]:checked").val();

    if(animalpick === "turtles"){
      $("#turtles").show();
      $("#snakes").hide();
      $("#insects").hide();
    }else if(animalpick === "snakes"){
      $("#turtles").hide();
      $("#snakes").show();
      $("#insects").hide();
    }else{
      $("#turtles").hide();
      $("#snakes").hide();
      $("#insects").show();
    }
    event.preventDefault();
  });
});
