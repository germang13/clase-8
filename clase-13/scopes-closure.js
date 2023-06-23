function outerFunction() {
  var outerVariable = "estoy defininda dentro de la funcion externa";

  function innerFunction() {
    var innerVariable = "estoy defininda dentro de la funcion interna";
    console.log(innerVariable);
    console.log(outerVariable);
  }

  innerFunction();
  console.log(innerVariable);
}

outerFunction();
console.log(outerVariable);
