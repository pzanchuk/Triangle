$(document).ready(function(){
  $("#main-form").submit(function(event){

    var side1 = parseInt($("input#side1").val());
    var side2 = parseInt($("input#side2").val());
    var side3 = parseInt($("input#side3").val());

    if(side1 && side2 && side3){
      $(".result").show();
      if(((side1 + side2) <= side3) || ((side1 + side3) <= side2) || ((side2 + side3) <= side1)){
        $(".message").text("NOT a triangle.");
      }else if(side1 === side2 && side1 === side3){
        $(".message").text("Equilateral: All sides are equal.");
      }else if(side1 === side2 || side1 === side3 || side2 === side3){
        $(".message").text("Isosceles: Exactly 2 sides are equal.");
      }else if(side1 != side2 && side2 != side3){
        $(".message").text("Scalene: No sides are equal.");
      }
    }else{
      alert("Please fill in the blanks");
    }


    event.preventDefault();
  });
});
