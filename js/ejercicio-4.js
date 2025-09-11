/*4- Realiza un script que pida números hasta que se pulse “cancelar”.
 Si no es un número deberá indicarse con un «alert» y seguir pidiendo 
 números. Al salir con “cancelar” deberá indicarse la suma total de los
  números introducidos.
 */

let resultado = 0;
let continuar = true;

while (continuar) {
  let numero = parseInt(prompt("Introduce un numero:"));
  if (isNaN(numero)) {
    alert(
      "El valor ingresado no es un numero, por favor ingrese un numero valido"
    );
    continue;
  } else {
    if (numero !== null) {
      resultado = resultado + numero;
      continuar = confirm("¿Deseas ingresar otro numero?");
    } else {
      continuar = false;
    }
  }
}

document.writeln("La suma de los numero ingresados es:\n" + resultado);
