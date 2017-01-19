
function cryptonize(input){
  var crypto = input.replace(/\W/g,"");
  return crypto;
}

function length(input){
  var stringLength = (input.replace(/\W/g,"")).length;
  return stringLength;
}



$(document).ready(function() {
  $("form#cryptosquare").submit(function() {
    event.preventDefault();
    var input = $("#inputString").val();
    console.log(result);
    $("#result").text(cryptonize(input));
    console.log(length(input));
  });
});
