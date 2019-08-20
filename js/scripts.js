var countTo = 0;
var countBy = 0;

var isNumber = function(num1, num2){
  return (Number.isInteger(num1) && Number.isInteger(num2)
  && num1 > 0 && num2 > 0 && num1 > num2);

}
var countStuff = function(numTo, numBy){
  for(var i = numBy; i <= numTo; i += numBy){
    $(".output").append(i + " ");
  }
}

$(document).ready(function(){
  $(".mainform").submit(function(event){
    countTo = parseInt($("#input1").val());
    countBy = parseInt($("#input2").val());
    if(isNumber(countTo, countBy)){
      $(".output").append("Count to: " + countTo + "<br>");
      $(".output").append("Count by: " + countBy + "<br>");
      $(".output").append("Output: ");
      countStuff(countTo, countBy);

    }else{
      alert("Enter valid numbers");
    }

    event.preventDefault();
  });
});
