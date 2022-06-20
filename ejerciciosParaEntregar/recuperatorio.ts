let cantidad: number = Number(prompt("ingrese cantidad"));
let producto: any;
let precio: number;
let unidades: number;
let total: number = 0;

for (let i = 0; i < cantidad; i++) {
  producto = prompt("ingrese nombre del producto: ");
  precio = Number(prompt("ingrese precio: "));
  unidades = Number(prompt("ingrese unidades: "));
  total = total + precio * unidades;
  console.log("Producto: ", producto);
  console.log("Precio: ", "$", precio);
  console.log("Unidades", unidades);
}
console.log("Total de la compra: $", total);

if (total < 1000) {
  console.log(
    "RECUERDA QUE SI TU COMPRA SUPERA LOS $1000 PODES PARTICIPAR EN UN SORTEO"
  );
} else {
  if (total >= 1000 && total <= 2000) {
    console.log("¡FELICIDADES! YA ESTAS PARTICIPANDO DEL SORTEO DE UN TV LED");
  } else {
    if (total > 2000 && total < 3000) {
      console.log(
        "¡FELICIDADES! YA ESTAS PARTICIPANDO DEL SORTEO DE UNA MOTO 0k"
      );
    } else {
      console.log("¡FELICIDADES! YA ESTAS PARTICIPANDO DEL SORTEO DE UN 0K");
    }
  }
}
