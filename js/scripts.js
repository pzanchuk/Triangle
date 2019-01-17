$(document).ready(function(){

  $("#main-form").submit(function(event){

    var inputName = $("input#name").val();
    var inputAge = parseInt($("input#age").val());
    var inputGender = $("#gender").val();
    var inputWatch = $("input:radio[name=watch]:checked").val();

    $("#age-control").removeClass("has-error");
    $("#name-control").removeClass("has-error");

    if ((inputName) && (inputAge)){

      $(".your-name").text(inputName);

      $(".result").show();
      $("#1").hide();
      $("#2").hide();
      $("#3").hide();
      $("#4").hide();
      $("#5").hide();
      $("#6").hide();
      $("#7").hide();
      $("#8").hide();
      $("#9").hide();
      $("#10").hide();
      $("#11").hide();

      if(inputAge <= 5){

        $("#1").show();
        $("#2").show();
      }
      else if(inputAge > 5 && inputGender === "1" ){
        $("#4").show();
        $("#10").show();
      }
      else if(inputAge > 5 && inputAge < 18) {
        $("#10").show();
        $("#4").show();
        $("#9").show();
      }else {
        $("#5").show();
        $("#10").show();
        $("#11").show();
      }
    }
    else {
      alert("Please fill in missing information");
      if (!inputAge){
        $("#age-control").addClass("has-error");
      }
      if (!inputName) {
        $("#name-control").addClass("has-error");
      }
    }

    event.preventDefault();
  });
});
