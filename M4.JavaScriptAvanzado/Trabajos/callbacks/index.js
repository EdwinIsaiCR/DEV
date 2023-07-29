
/*Ejercicio 1*/
function saludar(nombre, callback){
    setTimeout(()=> {
        callback(nombre);
    }, 2000);
}

/** Funcion para que funcione el boton */
function ejercicio1(){
    saludar("Edwin", (nombre) => {
        console.log(`Hola ${nombre}!`);
    })
}

/*Ejercicio 2 */
function queTipoEs(variable, callback){
    setTimeout(()=> {
        callback(variable);
    }, 2000);
}

/** Funcion para que funcione el boton */
function ejercicio2(){
    let incognita = 10;
    queTipoEs(incognita, (variable) => {
        console.log(`La variable es: ${variable}`);
        console.log("El tipo de variable es: " + typeof(variable));
    })
}

/*Ejercicio 3 */
function calculadora(num1, num2, callback){
    setTimeout(()=> {
        callback(num1, num2);
    }, 2000);
}

/** Funcion para que funcione el boton */
function ejercicio3(){
    let num1 = parseInt(prompt("Ingrese un numero: "));
    let num2 = parseInt(prompt("Ingrese otro numero: "));
    let operacion = parseInt(prompt("Elija una opcion: 1.Suma, 2.Resta, 3.Multiplicacion, 4.Division"));
    switch (operacion) {
        case 1:
            calculadora(num1, num2, (num1, num2) => {
                console.log("La Suma es: " + (num1 + num2));
            })
            break;
        case 2:
            calculadora(num1, num2, (num1, num2) => {
                console.log("La Resta es: " + (num1 - num2));
            })
            break;
        case 3:
            calculadora(num1, num2, (num1, num2) => {
                console.log("La Multiplicacion es: " + (num1 * num2));
            })
            break;
        case 4:
            calculadora(num1, num2, (num1, num2) => {
                console.log("La Division es: " + (num1 / num2));
            })
            break;
        default:
            break;
    }
}

/*Ejercicio 4 */
function Cadena(cadena, callback){
    setTimeout(()=> {
        callback(cadena);
    }, 2000);
}

/** Funcion para que funcione el boton */
function ejercicio4(){
    let op= parseInt(prompt("Elija una opcion: 1.Cadena en Minusculas, 2.Cadena en Mayusculas."));
    switch (op) {
        case 1:
            Cadena("HolaMundo", (cadena) => {
                console.log("La cadena en Minusculas es: " + cadena.toLowerCase());
            });
            break;
        case 2:
            Cadena("HolaMundo", (cadena) =>{
                console.log("La cadena en Mayusculas es: " + cadena.toUpperCase());
            });
            break;
        default:
            break;
    }
}

/*Ejercicio 5 */
function Arreglo(arreglo, callback){
    setTimeout(()=> {
        callback(arreglo);
    }, 2000);
}

/** Funcion para que funcione el boton */
function ejercicio5(){
    let array=[120,80,200,100];
    Arreglo(array, (arreglo) => {
        let arreglo2= [];
        let enHoras = 0;
        for (let i = 0; i < arreglo.length; i++) {
            enHoras = (arreglo[i]/60);
            if(enHoras >= 2){
                arreglo2.push(arreglo[i]);
            } else{
                console.log(arreglo[i] + "min no es mayor que 2 horas");
            }
        }
        console.log("Los tiempos mayores a 2 horas son: "+ arreglo2);
    })
}