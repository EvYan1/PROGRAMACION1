// Desarrollar un algoritmo que dado un número,
//ingresado por el usuario determine
//si el número es par o impar y le informe al usuario
//En el caso de ser 0 (cero) el algoritmo deberá  informarlo
//con switch

let numero1: number = Number(prompt("Ingrese un número"));
if (numero1 % 2 === 0) {
  console.log("es par");
} else {
  console.log("es impar");
}
if (numero1 === 0) {
  console.log("el numero es 0");
}
