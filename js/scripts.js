
function removePunc(input){
  var crypto = input.replace(/\W/g,"");
  return crypto;
}

function length(input){
  var stringLength = input.replace(/\W/g,"").length;
  return stringLength;
}

var isPerfect = function(input) {
  if(Number.isInteger(Math.sqrt(input.replace(/\W/g,"").length))) {
    return true;
  }else{
    return false;
  }
}

function makeArray(input) {
  var stringArray = input.replace(/\W/g,"").split("");
  return stringArray;
}


$(document).ready(function() {
  $("form#cryptosquare").submit(function() {
    event.preventDefault();
    var input = $("#inputString").val();
    console.log(length(input));
    $("#result").text(makeArray(input));
    console.log(isPerfect(input));
  });
});
