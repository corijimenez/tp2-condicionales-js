/*6- Realiza un script que escriba una pirámide del 1 al 30 de la
 siguiente forma :

1
22
333
4444
55555
666666
*/
document.writeln("Piramide del 1 al 30:<br>");
for (let i = 1; i <= 30; i++) {
  let linea = ""
    for (let j = 1; j <= i; j++) {
        linea += i
    }
  document.writeln(linea + "<br>");
}
