window.onload = function() {

  var buttonG = document.getElementById("G");



  buttonG.addEventListener("click", function() {
 for (var i = -6; i <= 6; i = i + 2) {
  var x = i;
  
  if (x < 2) {
    x = Math.sin(x) + Math.log(x);
  }
  
  if (x === 2) {
    x = Math.pow(x, 4.1);
  }
  
  if (x > 2) {
    x = Math.log(x) + Math.sqrt(x);
  }
  
 
   alert("Результати розрахунків при аргументі " + i + " = " + x);
}

  });

};
