//Ejercicio 1
function Alimentos (lista, id) {
    this.id = id;
    this.lista = lista;
    for (let index = 0; index < id-1; index++) {
        lista.pop();
    }
    console.log(lista);
}

const mifuncion = new Alimentos(['Manzana','Cebolla','Apio','Naranja','Papaya','Sandía','Melón'], 4);


//Ejercicio2
function Numeros (listNum){
    this.listNum = listNum;
    this. reemplazar = function (listNum, nuevo, viejo){
        this.nuevo=nuevo;
        this.viejo=viejo;
        for (let index = listNum.length-1; index >= 0; index--) {
            if ((listNum[index] == viejo)) {
                listNum.pop();
                listNum.push(nuevo);
                break;
            } else{
                listNum.pop();
            }
        }
        console.log(listNum);
    }
}

const prueba = new Numeros([3,2,3,4,6,8,1,2,5,5]);
prueba.reemplazar([3,2,3,4,6,8,1,2,5,5], 7, 2);

//Ejercicio3
class Stack {
    constructor(){
        this.stack=[];
    }
    push(item){
        this.stack.push(item)
    }
    pop(){
        let eliminar = null;
        if(this.stack.length){
            eliminar=this.stack[this.stack.length-1];
            this.stack.pop();
        }
    }
    print(){
        if(this.stack.length){
            for (let index = 0; index < this.stack.length-1 ; index++) {
                console.log(this.stack[index]);
            }
            
        }
    }
    printAlreves(){
        if(this.stack.length){
            for (let index = this.stack.length-1; index >= 0; index--) {
                console.log(this.stack[index]);
            }
        }
    }
}

const recorrido = new Stack();
recorrido.push("Pueblo Origen");
recorrido.push("Pueblo1");
recorrido.push("Pueblo2");
recorrido.push("Destino");
console.log("Recorrido");
console.log("-");
recorrido.print();
console.log("-");
console.log("Regreso");
console.log("-");
recorrido.printAlreves();

//Ejercicio4
class Contenedor {
    constructor(){
        this.stack=[];
        /* this.stack2=[]; */
    }
    push(item, id){
        this.stack.push(item);
        this.id = id;
    }
    pop(id){
        this.id = id;
        if(this.stack.length){
            for (let index = this.stack.length-1; index >= 0; index--) {
                if ((this.stack.length-1 == id)) {
                    this.stack.pop();
                    break;
                } else{
                    /* this.stack2.push(this.stack[index]); */
                    this.stack.pop();
                }
            }
            /* this.stack.push(this.stack2); */
            // No puede pasarlo a otra pila :(
        }
    }
    print(){
        if(this.stack.length){
            for (let index = 0; index < this.stack.length-1 ; index++) {
                console.log(this.stack[index]);
            }
        }
    }
}

const contenedor = new Contenedor();
contenedor.push("contenedor1", 1);
contenedor.push("contenedor2", 2);
contenedor.push("contenedor3", 3);
contenedor.push("contenedor4", 4);
contenedor.pop(2);
contenedor.print();
