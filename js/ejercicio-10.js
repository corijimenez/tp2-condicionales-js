/*10- Realiza un script que pida número de filas y columnas y
 escriba una tabla. Dentro de cada una de las celdas deberá 
 escribirse un número consecutivo en orden descendente. 
 Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1.

Ejercicios con Math
*/


let filas = parseInt(prompt("Ingrese el número de filas:"))
let columnas = parseInt(prompt("Ingrese el número de columnas:"))
let totalCeldas = filas * columnas


document.writeln("<table border='1' style='border-collapse: collapse;'>")  
let numero = totalCeldas
for (let i = 0; i < filas; i++) {
    document.writeln("<tr>")
    for (let j = 0; j < columnas; j++) {
        document.writeln("<td style='padding: 8px; text-align: center;'>" + numero + "</td>")
        numero--
    }
    document.writeln("</tr>")
}
document.writeln("</table>")
