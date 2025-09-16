/*8- Crea script para generar pirámide siguiente con los números
 del 1 al número que indique el usuario (no mayor de 50) 

1
12
123
1234
12345
123456
……
 */

let numero = parseInt(prompt("Ingrese un numero no mayor a 50:"))
if (numero > 50) {
  document.writeln("El numero es mayor a 50. Intente nuevamente.") 
} else {
  document.writeln("Piramide del 1 al " + numero + ":<br>")
    for (let i = 1; i <= numero; i++) {
        let linea = ""
        for (let j = 1; j <= i; j++) {
            linea += j
        }
        document.writeln(linea + "<br>")
    }
}