function test() {
  console.log(a); //Aquí el valor es undefine, porque se hace un console.log de a antes de que esta sea declarada como variable, por lo que está fuera de su scope(alcance)
  console.log(foo()); //Aquí el resultado es 2, esto se debe a que esta es una función libre de variables, es una closure creada dentro de la función padre test(), a diferencia del otro console.log este si arroja el resulta, que es el que retorna foo(), cuando console log se ejecuta llama a la función closure que le retorna su valor
  var a = 1;
  function foo() {
    return 2;
  }
}
test();
