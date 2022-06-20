
let cantidad_de_alumnos: number = Number(
  prompt("ingrese la cantidad de alumnos")
);
let i:number=0;
let alumnos: any[] = new Array(cantidad_de_alumnos);
let notas: number[] = new Array(3 * cantidad_de_alumnos);
for (i = 0; i < cantidad_de_alumnos; i++) {
 let nombre = prompt("Ingrese el nombre del alumno");
  alumnos[indice] = nombre;
  let nota1: number = Number(prompt("ingrese la primer nota"));
  notas[indice] = nota1;
  let nota2: number = Number(prompt("ingrese la segunda nota"));
  notas[indice + 1] = nota2;
  let nota3: number = Number(prompt("ingrese la tercer nota"));
  notas[indice + 2] = nota3;
 console.log(alumnos, notas)
}
