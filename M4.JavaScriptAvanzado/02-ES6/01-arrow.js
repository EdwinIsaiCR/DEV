
/* Tipos de funciones */

// JS Vanilla

function suma(a,b) {
    return a+b;
}

//Funciones anonimas

const sumaDos = function (a,b) {
    return a+b;
}

// Hoisting

function sumaTres(a,b) {
    return a+b;
}

var num1= 5;
var num2= 3;

/* Arrow Functions*/
//Azucar sintactico (Sugar Syntax)
//No se necesita usar la palabra function usamos =>.

const sumaCuatro = (a,b) =>{
    return a + b;
}

//Simplificado
const sumaCinco = (a,b) => a + b;

// Uso de Function Anonima que ademås es Arrow Function

const miArreglo = ["Perros", "Gatos", "Patos", "Ratones"];

miArreglo.forEach((elemento)=> console.log(elemento));