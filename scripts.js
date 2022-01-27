function calcShow(form) {
  var number1 = document.getElementById("first-num").value;
  var number2 = document.getElementById("second-num").value;
  var answer = "0";

  answer = number1 * number2;

  document.getElementById("answer").innerHTML = answer;
}
