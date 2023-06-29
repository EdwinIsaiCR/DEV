
class Alumno{
    constructor(nombre, apellidos, edad, materiasInscritas, calificaciones){
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.edad = edad;
        this.materiasInscritas = materiasInscritas;
        this.calificaciones = calificaciones;
    }

    InscribirAClase(materia){
        switch (materia) {
            case 1:
                let materias = "Matematicas";
                console.log("Te has inscrito a la materia de matematicas");
                return materias;
                break;
        case 2:
                let materias2 = "Español";
                console.log("Te has inscrito a la materia de español");
                return materias2;
                break;
        case 3:
                let materias3 = "Historia";
                console.log("Te has inscrito a la materia de historia");
                return materias3;
                break;
            default:
                break;
        }
    }
    /* AsignarGrades(materia, calificacion){
        /* for (let index = 0; index < this.materiasInscritas.length; index++) {
            if (this.materiasInscritas[index] == materia) {
                this.calificaciones=calificacion;
            }
        } 
        if (this.materiasInscritas == materia) {
            this.calificaciones=calificacion;
        }
    } */
}

class Grupos{
    constructor (grupo, alumnos){
        this.grupo = grupo;
        this.alumnos = alumnos;
    }
    AsignarAlumnos(alumno){
        this.alumnos = alumno;
    }
    /* findNombre(alumno){
        for (let index = 0; index < alumnos.length; index++) {
            if (this.alumnos.nombre == alumno.nombre) {
                return this.alumnos.nombre;
            }
            
        }
    }
    findApellido(){
        for (let index = 0; index < alumnos.length; index++) {
            if (this.alumnos.apellidos == alumno.apellidos) {
                return this.alumnos.apellidos;
            }
            
        }
    }
    getPromedio(){

    }

    getPromedioAll(){

    }
    getAlumnos(){

    }
    getAlumnos2(){
        
    } */

}

const form = document.getElementById("form");
let alumnos = {};
let contador = 1;
let contador2 = 0;
let contador3=0;
form.addEventListener("submit", e=> {
    e.preventDefault();
    /*Obteniedno y creando Alumno */
    let nombre = document.getElementById("nombre").value;
    let apellidos = document.getElementById("apellidos").value;
    let edad = document.getElementById("edad").value;
    let materias = document.getElementById("materias").value;
    let calificaciones = document.getElementById("calificaciones").value;
    
    for (var i = contador; i <= contador; i++) {
        let estudiante = new Alumno(nombre, apellidos, edad, materias, calificaciones);
        alumnos["alumno"+(i)] = estudiante;
        let registro = document.getElementById("registro").innerText = "Felicidades te registraste correctamente, ahora inicia sesion";
    }
    form.reset();
    
    /* bienvenida*/
    /* let bienvenida = document.getElementById("name").innerText = nombre; */
    /* let nombre2 = "Edwin";
    let apellidos2 = "Cruz";
    let edad2 = "17"; */
    /* for (var i = 0; i <= contador+1; i++) {
        if(alumnos['alumno'+(i+1)].nombre== nombre2 && alumnos['alumno'+(i+1)].apellidos == apellidos2 && alumnos['alumno'+(i+1)].edad== edad2){
            console.log("gooD");
        }
    } */
    console.log(contador);
    contador2 = contador;
    contador++;
    
})

const form2 = document.getElementById("form2");
let boton1 = document.getElementById("boton1");
let boton2 = document.getElementById("boton2");
let boton3 = document.getElementById("boton3");
let boton4 = document.getElementById("boton4");
let boton5 = document.getElementById("boton5");
let boton6 = document.getElementById("boton6");
let boton7 = document.getElementById("boton7");
let boton8 = document.getElementById("boton8");
let boton9 = document.getElementById("boton9");

form2.addEventListener("submit", e=> {
    e.preventDefault();
    /*iniciar sesion */
    let nombre2 = document.getElementById("nombre2").value;
    let apellidos2 = document.getElementById("apellidos2").value;
    let edad2 = document.getElementById("edad2").value;
    
    console.log(nombre2);
    /* form2.reset(); */
    for (var i = 1; i <= contador2; i++) {
        if(alumnos['alumno'+(i)].nombre== nombre2 && alumnos['alumno'+(i)].apellidos == apellidos2 && alumnos['alumno'+(i)].edad== edad2){
            window.location.href = "#boton10";
            let inicio = document.getElementById("inicie").innerText = "Felicidades ya iniciaste sesion, Abajo se encontraran acciones.";
            let bienvenida = document.getElementById("name").innerText = alumnos['alumno'+(i)].nombre;
            let antes = document.getElementById("texto1").innerText = "";
            let registro = document.getElementById("registro").innerText = "";
            boton1.disabled = false;
            boton3.disabled = false;
            break;
        } else{
            inicio = document.getElementById("inicie").innerText = "Error, al menos una opcion no coincide.";
        }
    } 
    
    contador3=contador2;
})

function inscribirClase(){
    let op= parseInt(prompt('Eliga una opcion de clase: 1.Matematicas  2.Español  3.Historia'));
    let nombre2 = document.getElementById("nombre2").value;
    let apellidos2 = document.getElementById("apellidos2").value;
    /* form2.reset(); */
    for (var i = 0; i <= contador2+1; i++) {
        if(alumnos['alumno'+(i+1)].nombre== nombre2 && alumnos['alumno'+(i+1)].apellidos == apellidos2){
            alumnos['alumno'+(i+1)].materiasInscritas = alumnos['alumno'+(i+1)].InscribirAClase(op);
            console.log(alumnos['alumno'+(i+1)].materiasInscritas);
            alert("Se agrego la materia correctamente");
            boton2.disabled = false;
            boton9.disabled = false;
            boton10.disabled = false;
            valido=true;
            break;
        } else{
            valido=false;
            
        }
    } 
    validar(valido);
}

let valido=false;
function asignarCalif(){
    let calificacionpro = parseInt(prompt('Ingresa tu Calificación: '));
    let nombre2 = document.getElementById("nombre2").value;
    let apellidos2 = document.getElementById("apellidos2").value;
    for (var i = 1; i <= contador2; i++) {
        if(alumnos['alumno'+(i)].nombre== nombre2 && alumnos['alumno'+(i)].apellidos == apellidos2){
            let materiapro= prompt("Eliga una materia inscrita " + JSON.stringify(alumnos['alumno'+(i)].materiasInscritas));
            console.log(materiapro);
            if (alumnos['alumno'+(i)].materiasInscritas == materiapro) {
                alumnos['alumno'+(i)].calificaciones = parseInt(alumnos['alumno'+(i)].calificaciones) + calificacionpro;
                alert("Se agrego la calificacion correctamente");
                boton7.disabled = false;
            }
            console.log(alumnos['alumno'+(i)].calificaciones);
            valido=true;
            break;
        } else{
            valido=false;
            
        }
    } 
    validar(valido);
}

let grupos= {};
let contadorgrupos=1;
function crearGrupo(){
    let grupo = prompt('Ingrese el nombre del Grupo');
    for (var i = contadorgrupos; i <= contadorgrupos; i++) {
        let grupo1 = new Grupos(grupo, 0);
        grupos["grupo"+(i+1)] = grupo1;
        alert("Se a creado el grupo "+ JSON.stringify(grupos["grupo"+(i+1)].grupo));
        boton4.disabled = false;
        boton5.disabled = false;
        boton6.disabled = false;
        boton8.disabled = false;
        break;
    }
    contadorgrupos++;
}

let conatadorgrupo2;
function asignarAlumnos(){
    let contadorgrupos=1;
    let nombrepro = prompt('Ingrese el nombre del alumno');
    let apellidospro = prompt('Ingrese los apellidos del alumno');
    let grupopro = prompt('Ingrese el nombre del Grupo');
    for (var i = contadorgrupos; i <= contadorgrupos; i++) {
        if (grupos["grupo"+(i+1)].grupo == grupopro) {
            for (var j = 0; j <= contador2+1; j++) {
                if(alumnos['alumno'+(j+1)].nombre== nombrepro && alumnos['alumno'+(j+1)].apellidos == apellidospro){
                    grupos["grupo"+(i+1)].alumnos = alumnos['alumno'+(j+1)];
                    console.log(grupos["grupo"+(i+1)].alumnos);
                    alert("Se agrego correctamente el alumno");
                    valido=true;
                    break;
                }
            }
        } else{
            valido=false;
        }
    }
    conatadorgrupo2=contadorgrupos;
    contadorgrupos++;
    
    validar(valido);
}

function buscarAlumnoN(){
    let contadorgrupos=1;
    let nombrepro = prompt('Ingrese el nombre del alumno');
    let grupopro = prompt('Ingrese el nombre del Grupo');
    for (var i = contadorgrupos; i <= contadorgrupos; i++) {
        if (grupos["grupo"+(i+1)].grupo == grupopro) {
            for (var j = 0; j <= contador2+1; j++) {
                if(alumnos['alumno'+(j+1)].nombre== nombrepro){
                    if(grupos["grupo"+(i+1)].alumnos == alumnos['alumno'+(j+1)]){
                        alert("Si se encontro el alumno");
                        valido=true;
                        break;
                    }
                }
            }
        } else{
            valido=false;
        }
    }
    validar(valido);
}

function buscarAlumnoA(){
    let contadorgrupos=1;
    let apellidospro = prompt('Ingrese los apellidos del alumno');
    let grupopro = prompt('Ingrese el nombre del Grupo');
    for (var i = contadorgrupos; i <= contadorgrupos; i++) {
        if (grupos["grupo"+(i+1)].grupo == grupopro) {
            for (var j = 0; j <= contador2+1; j++) {
                if(alumnos['alumno'+(i+1)].apellidos == apellidospro){
                    if(grupos["grupo"+(i+1)].alumnos == alumnos['alumno'+(j+1)]){
                        alert("Si se encontro el alumno");
                        valido=true;
                        break;
                    }
                }
            }
        } else{
            valido=false;
        }
    }
    validar(valido);
}

function getPromedio(){
    let nombre2 = document.getElementById("nombre2").value;
    let apellidos2 = document.getElementById("apellidos2").value;
    for (var i = 0; i <= contador2+1; i++) {
        if(alumnos['alumno'+(i+1)].nombre== nombre2 && alumnos['alumno'+(i+1)].apellidos == apellidos2){
            console.log(alumnos['alumno'+(i+1)]);
            let profundidad = 1; //alumnos['alumno'+(i+1)].materiasInscritas.lenght
            let promedio = (alumnos['alumno'+(i+1)].calificaciones)/profundidad;
            console.log(promedio);
            alert("Su promedio es: "+ promedio);
            console.log(alumnos['alumno'+(i+1)].calificaciones);
            valido=true;
            break;
        } else{
            valido=false;
        }
    } 
    validar(valido);
}

function getPromedioAll(){
    let contadorgrupos=0;
    let grupopro = prompt('Ingrese el nombre del Grupo');
    for (var i = contadorgrupos; i <= contadorgrupos+1; i++) {
        if (grupos["grupo"+(i+1)].grupo == grupopro) {
            for (var j = 0; j <= contador2+1; j++) {
            console.log(alumnos['alumno'+(j+1)]);
            let profundidad = 1; //alumnos['alumno'+(i+1)].materiasInscritas.lenght
            let suma = (grupos["grupo"+(i+1)].alumnos.calificaciones);
            let promedio = suma/profundidad;
            console.log(promedio);
            alert("El promedio del grupo es: "+ promedio);
            console.log(alumnos['alumno'+(j+1)].calificaciones);
            valido=true;
            break;
            } 
        } else{
            valido=false;
        }
    }
    validar(valido);
}

function ordenar() {
    let ordenamiento= [alumnos.length];
    for (var i = 1; i <= contador2; i++) {
        ordenamiento[i] = alumnos['alumno'+(i)].calificaciones;
    } 
    let l = ordenamiento.length;
  for (let i = 0; i < l; i++ ) {
    for (let j = 0; j < l - 1 - i; j++ ) {
      if ( ordenamiento[j] > ordenamiento[j +1] ) {
        [ ordenamiento[j], ordenamiento[j +1] ] = [ ordenamiento[j +1], ordenamiento[j]];
      }
    }
  }
  alert("El orden de menor a mayor calificacion es: ");
  for (var i = 1; i <= contador2; i++) {
    alert(ordenamiento[i]);
    } 
  
}

function ordenar2() {
    let ordenamiento= [alumnos.length];
    for (var i = 1; i <= contador2; i++) {
        ordenamiento[i] = alumnos['alumno'+(i)].calificaciones;
    }
    var len = ordenamiento.length;
    var i = 1;
    while (i < len) {
        var x = ordenamiento[i];
        var j = i - 1;
        while (j >= 0 && ordenamiento[j] > x) {
            ordenamiento[j + 1] = ordenamiento[j];
            j = j - 1;
        }
        ordenamiento[j+1] = x;
        i = i + 1;
    }
    alert("El orden de menor a mayor calificacion es: ");
  for (var i = 1; i <= contador2; i++) {
    alert(ordenamiento[i]);
    } 
}


function validar(valido){
    if (!valido) {
        alert("Error.");
    }
}

function borrar(){
    let inicio = document.getElementById("inicie").innerText = "";
    let bienvenida = document.getElementById("name").innerText = "";
    let antes = document.getElementById("texto1").innerText = "Inicie sesion primero para poder interactuar con el programa.";
}