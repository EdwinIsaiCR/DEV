let pantalla= document.getElementById("pantalla");
let monto=0;
let dinero=10;
let montoTotal=0;
let who;


function saludar(){
    if(clave == clave1){
        if(email==email1){
            document.getElementById("pantalla").innerHTML = "Hola Edwin";
        }
    }

    if(clave == clave2){
        if(email==email2){
            document.getElementById("pantalla").innerHTML = "Hola Isai";
        }
    }

    if(clave == clave3){
        if(email==email3){
            document.getElementById("pantalla").innerHTML = "Hola Nelson";
        }
    } 
} 


function obtenerDatos(){
    let email= document.getElementById("correo").value;
    let clave= document.getElementById("clave").value;

    let email1="bomboncinedwin@gmail.com";
    let clave1="Edwin";

    let email2="edwin@gmail.com";
    let clave2="edwinisai";

    let email3="imac_internet2@gmail.com";
    let clave3="imac";
 
    if(clave == clave1){
        if(email==email1){
            who=1;
            location.href ="cajero.html";
            
        }
    } else{
        if(clave == clave2){
            if(email==email2){
                who=2;
                location.href ="cajero.html";
                
            } 
        }else{
            if(clave == clave3){
                if(email==email3){
                    who=3;
                    location.href ="cajero.html";
                }
            } else{
                    location.href ="error.html";
                }
            }
    }
}   


function enter(){
    
    let uno= document.getElementById("uno");
    let dos= document.getElementById("dos");
    let tres= document.getElementById("tres");
    let cuatro= document.getElementById("cuatro");
    let cinco= document.getElementById("cinco");
    let seis= document.getElementById("seis");
    let siete= document.getElementById("siete");
    let ocho= document.getElementById("ocho");
    let nueve= document.getElementById("nueve");
    let cero= document.getElementById("cero");
    
    document.getElementById('pantalla').innerText = "";
    uno.onclick = function(e){
        monto=String(monto+1);
        document.getElementById("pantalla").innerHTML= monto;
        montoTotal=monto;
    }
    dos.onclick = function(e){
        monto=String(monto+2);
        document.getElementById("pantalla").innerHTML = monto;
        montoTotal=monto;
    }
    tres.onclick = function(e){
        monto=String(monto+3);
        document.getElementById("pantalla").innerHTML = monto;
        montoTotal=monto;
    }
    cuatro.onclick = function(e){
        monto=String(monto+4);
        document.getElementById("pantalla").innerHTML = monto;
        montoTotal=monto;
    }
    cinco.onclick = function(e){
        monto=String(monto+5);
        document.getElementById("pantalla").innerHTML = monto;
        montoTotal=monto;
    }
    seis.onclick = function(e){
        monto=String(monto+6);
        document.getElementById("pantalla").innerHTML = monto;
        montoTotal=monto;
    }
    siete.onclick = function(e){
        monto=String(monto+7);
        document.getElementById("pantalla").innerHTML = monto;
        montoTotal=monto;
    }
    ocho.onclick = function(e){
        monto=String(monto+8);
        document.getElementById("pantalla").innerHTML = monto;
        montoTotal=monto;
    }
    nueve.onclick = function(e){
        monto=String(monto+9);
        document.getElementById("pantalla").innerHTML = monto;
        montoTotal=monto;
    }
    cero.onclick = function(e){
        monto=String(monto+0);
        document.getElementById("pantalla").innerHTML = monto;
        montoTotal=monto;
    }
    
}

function ingresarDa(){
    monto=0;
    document.getElementById('pantalla').innerText = "Pulse algun boton para interactuar";
    document.getElementById('pantalla').innerText = "Ingrese el monto a depositar:";
    document.getElementById("depositar").disabled = false;
    document.getElementById("retirar").disabled = true;

    document.getElementById("uno").disabled = false;
    document.getElementById("dos").disabled = false;
    document.getElementById("tres").disabled = false;
    document.getElementById("cuatro").disabled = false;
    document.getElementById("cinco").disabled = false;
    document.getElementById("seis").disabled = false;
    document.getElementById("siete").disabled = false;
    document.getElementById("ocho").disabled = false;
    document.getElementById("nueve").disabled = false;
    document.getElementById("cero").disabled = false;
}

function consultarDa(){
    monto=0;
    document.getElementById('pantalla').innerText = "Pulse algun boton para interactuar";
    document.getElementById('pantalla').innerText = "Su saldo es de "+dinero+" pesos.";
    document.getElementById("depositar").disabled = true;
    document.getElementById("retirar").disabled = true;

    document.getElementById("uno").disabled = true;
    document.getElementById("dos").disabled = true;
    document.getElementById("tres").disabled = true;
    document.getElementById("cuatro").disabled = true;
    document.getElementById("cinco").disabled = true;
    document.getElementById("seis").disabled = true;
    document.getElementById("siete").disabled = true;
    document.getElementById("ocho").disabled = true;
    document.getElementById("nueve").disabled = true;
    document.getElementById("cero").disabled = true;
}

function retirarDa(){
    monto=0;
    document.getElementById('pantalla').innerText = "Pulse algun boton para interactuar";
    document.getElementById('pantalla').innerText = "Ingrese el monto a retirar:";
    document.getElementById("depositar").disabled = true;
    document.getElementById("retirar").disabled = false;

    document.getElementById("uno").disabled = false;
    document.getElementById("dos").disabled = false;
    document.getElementById("tres").disabled = false;
    document.getElementById("cuatro").disabled = false;
    document.getElementById("cinco").disabled = false;
    document.getElementById("seis").disabled = false;
    document.getElementById("siete").disabled = false;
    document.getElementById("ocho").disabled = false;
    document.getElementById("nueve").disabled = false;
    document.getElementById("cero").disabled = false;
    
}

function depo(){
    let validar=Number(dinero+Number(montoTotal));
    console.log(validar);
    if(validar>990){
        document.getElementById('pantalla').innerText = "Error, No puede depositar mas de 990 pesos.";
    } else{
        dinero+= Number(montoTotal);
        document.getElementById('pantalla').innerText = "Pulse algun boton para interactuar";
    }
    document.getElementById("depositar").disabled = true;
    document.getElementById("uno").disabled = true;
    document.getElementById("dos").disabled = true;
    document.getElementById("tres").disabled = true;
    document.getElementById("cuatro").disabled = true;
    document.getElementById("cinco").disabled = true;
    document.getElementById("seis").disabled = true;
    document.getElementById("siete").disabled = true;
    document.getElementById("ocho").disabled = true;
    document.getElementById("nueve").disabled = true;
    document.getElementById("cero").disabled = true;
    
}

function retirar(){
    let validar=Number(dinero-Number(montoTotal));
    console.log(validar);
    if(validar<10){
        document.getElementById('pantalla').innerText = "Error, saldo insuficiente";
    } else{
        dinero-= Number(montoTotal);
        document.getElementById('pantalla').innerText = "Pulse algun boton para interactuar";
    }
    document.getElementById("retirar").disabled = true;
    document.getElementById("uno").disabled = true;
    document.getElementById("dos").disabled = true;
    document.getElementById("tres").disabled = true;
    document.getElementById("cuatro").disabled = true;
    document.getElementById("cinco").disabled = true;
    document.getElementById("seis").disabled = true;
    document.getElementById("siete").disabled = true;
    document.getElementById("ocho").disabled = true;
    document.getElementById("nueve").disabled = true;
    document.getElementById("cero").disabled = true;
}

function cancelar(){
    document.getElementById('pantalla').innerText = "Pulse algun boton para interactuar";
    document.getElementById("depositar").disabled = true;
    document.getElementById("retirar").disabled = true;
    montoTotal=0;
}
