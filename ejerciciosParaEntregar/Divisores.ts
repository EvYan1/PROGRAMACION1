function cantidadDeDivisores(numero1: number): number {
  let contando: number = 1;
  for (let indice = 0; indice < numero1; indice++) {
    if (numero1 % indice === 0) {
      contando++;
    }
  }
  return contando;
}
let numero12: number = Number(prompt("ingrese numero"));
console.log(
  "El número " +
    numero12 +
    " tiene " +
    cantidadDeDivisores(numero12) +
    " divisores."
);
