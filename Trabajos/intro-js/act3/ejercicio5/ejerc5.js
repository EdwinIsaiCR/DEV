var num1= prompt("Ingresa el primer numero: ");
var num2= prompt("Ingresa el segundo numero: ");
var num3= prompt("Ingresa el tercer numero: ");

if(num1>num2){
    if(num1>num3){
        if(num2==num3){
            console.log("El numero mayor es: "+num1+" y el "+num2+" y "+num3+" son iguales.");
        }else{
            console.log("El numero mayor es: "+num1);
        }
    } else{
        if(num1==num2){
            console.log("El numero mayor es: "+num3+" y el "+num1+" y "+num2+" son iguales.");
        } else{
            console.log("El numero mayor es: "+num3);
        }
    }
} else{
    if(num2>num3){
        if(num1==2){
            console.log("El numero mayor es: "+num2+" y el "+num1+" y "+num3+" son iguales.");
        }else{
            console.log("El numero mayor es: "+num2);
        }   
    } else{
        console.log("El numero mayor es: "+num3+" y el "+num1+" y "+num2+" son iguales.");
    }
}
