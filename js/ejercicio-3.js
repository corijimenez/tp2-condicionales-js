/*3- Realiza un script que pida cadenas de texto  hasta que se
 pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas
  las cadenas concatenadas con un guión -.

Nota: usar confirm() https://www.w3schools.com/jsref/met_win_confirm.asp */

let resultado = ""
let continuar = true

while (continuar) {
  let texto = prompt("Introduce una cadena de texto:")
  if (texto !== null) {
    if (resultado !== "") {
      resultado += " - "
    }
    resultado += texto
    continuar = confirm("¿Deseas ingresar otra cadena?")
  } else {
    continuar = false
  }
}

document.writeln("Cadenas concatenadas:\n" + resultado)
