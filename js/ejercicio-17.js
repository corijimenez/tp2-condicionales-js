/* 17- Realiza un script que muestre la posición 
de la primera vocal de un texto introducido por teclado.

Ejemplo:
Input: Hola mundo
Output: la vocal ‘o’ está en la posición 1

*/

let texto = prompt("Ingrese un texto: ");
texto = texto.toLowerCase(); 
let vocales = "aeiou";
let posicion = -1;
let vocalEncontrada = "";

for (let i = 0; i < texto.length; i++) {
  let caracter = texto.charAt(i);

  if (
    caracter === "a" ||
    caracter === "e" ||
    caracter === "i" ||
    caracter === "o" ||
    caracter === "u"
  ) {
    posicion = i;           
    vocalEncontrada = caracter; 
    break;                  
  }
}

if (posicion !== -1) {
  document.writeln("La vocal '" + vocalEncontrada + "' está en la posición " + posicion);
} else {
  document.writeln("No se encontraron vocales en el texto.");
}
