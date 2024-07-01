
//****************************CAPITULO 3**************** 

//--------------------LOOPS Y BUCLES-------------------------
/*
alert('Bienvenido al juego del número secreto');

let numeroDeUsuario=0;
let numeroSecreto = 4;

    while( numeroDeUsuario  != numeroSecreto)
    {
        numeroDeUsuario = prompt('Elige un número entre 1 y 10');
        console.log(numeroDeUsuario);
    
       if (numeroDeUsuario == numeroSecreto) {
            alert (`Acertaste, el numero es: ${numeroDeUsuario }`);
        }  else{
            if(numeroDeUsuario > numeroSecreto)
                {
                alert ("El numero ingresado es mayor")
                }
            else
                {alert("El numero ingresado es menor");
                }
            }
    }*/

  //---------------------------- CONTADOR INTEERNO---------------------------
  /*
   let numeroDeUsuario=0;
   let numeroSecreto = 4;
   let intento=1;
   let palabra='vez';

    while( numeroDeUsuario  != numeroSecreto)
    {
        numeroDeUsuario = prompt('Elige un número entre 1 y 10');
        console.log(numeroDeUsuario);
    
       if (numeroDeUsuario == numeroSecreto) {
            //alert (`Acertaste, el numero es: ${numeroDeUsuario }. Lo hiciste en ${intento} veces`);
            alert (`Acertaste, el numero es: ${numeroDeUsuario }. Lo hiciste en ${intento} ${palabra}`);
        }  else{
            if(numeroDeUsuario > numeroSecreto)
                {
                alert ("El numero ingresado es mayor")
                }
            else
                {alert("El numero ingresado es menor");
                }
            intento=intento+1;
            palabra='veces';
            }
    }
  */
 //---------------------------------EJERCICIO-----------------------------


let qtdNumeros = prompt('Digite la cantidad de números para el cálculo del promedio:');
let soma = 0;
let contador = qtdNumeros;
let sum=0;

while(contador > soma){
    let numero = parseInt(prompt('Digite el numero:'));
    soma = soma+ 1;// += numero;
    sum=sum+numero;
}

let promedio = sum / qtdNumeros;

console.log(promedio);

///=============================AND (&&)================================
/*El operador AND, representado por el símbolo "&&", se utiliza para combinar dos condiciones y 
evaluar si ambas son verdaderas. Si ambas condiciones son verdaderas, el resultado
 será... verdadero. De lo contrario, lógicamente será falso. Por ejemplo:*/ 
 
let edad = 25;
let tieneLicencia = true;

// si la edad es mayor de 18 y tiene una licencia...
if (edad > 18 && tieneLicencia) {
  console.log("Puede conducir!");
} else {
  console.log("No puede conducir!");
}

//============================== OR( | | )
/*
El operador OR, representado por los símbolos "||", se utiliza para verificar si al menos una de 
las condiciones es verdadera. Si una de las condiciones es verdadera, el resultado será verdadero. 
Si ambas son falsas, el resultado será falso. Aquí tienes un ejemplo: let tieneManzana = false;
 let tieneBanana = true;*/
 // si tiene manzana o tiene banama…
if (tieneManzana|| tieneBanana) {
    console.log("Tienes frutas!");
  } else {
    console.log("No tienes frutas.");
  }
//Crea un contador que comience en 1 y vaya hasta 10 usando un bucle 'while'. Muestra cada número.

//Crea un contador que comience en 10 y vaya hasta 0 usando un bucle 'while'. Muestra cada número.

/*Crea un programa de cuenta progresiva. Pide un número y cuenta desde 0 hasta ese número utilizando 
un bucle 'while' en la consola del navegador.*/

/*Crea un programa de cuenta progresiva. Pide un número y cuenta desde 0 hasta ese número utilizando 
un bucle 'while' en la consola del navegador.*/ 

