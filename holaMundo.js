//console.log('hola desde Node');

/*let readlineSync = require('readline-sync');
let alturaPrenosa = readlineSync.question("Indique la altura de la persona: ");
console.log("su altura es:");
console.log(alturaPrenosa);*/

/*Ejercicios 1: modifica el primer script "hola mundo para que:El mensaje que se muestra al usuario se almacene en
una variable llamada mensaje y el funcionamiento del
script sea el mismo. "*/

//let readlineSync = require('readline-sync');
//let mensaje = ("Hola Mundo!");
//console.log(mensaje); 

/*Ejercicio numero 2: Modificar el ejemplo de secuencia: Qué cada mensaje se almacene en una variable a
mostrar por consola y que el funcionamiento del script sea
el mismo*/


// Ejercicio auto de carrera: 
let readlineSync = require('readline-sync');
let primeraVuelta = readlineSync.questionInt("La primera vuelta es: ");
let segundaVuelta = readlineSync.questionInt("La segunda vuelta es: ");
let terceraVuelta = readlineSync.questionInt("La tercera vuelta es: ");
let cuartaVuelta = readlineSync.questionInt("La cuarta vuelta es: ");

let tiempoTotal = primeraVuelta + segundaVuelta + terceraVuelta + cuartaVuelta;

console.log("El tiempo Total es: ",tiempoTotal);
console.log("El promedio de las vueltas es: ", tiempoTotal /4);