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
                if (intento > 3){
                    alert("Llegaste al numero maximo de intentos");
                break;
                }
            }
    }*/

    //**************************************************************************************
   /* 
    let numeroDeUsuario=0;
   let numeroSecreto = 4;
   let intento=1;
   //let palabra='vez';
   let maxIntento =3;

    while( numeroDeUsuario  != numeroSecreto)
    {
        numeroDeUsuario = prompt('Elige un número entre 1 y 10');
        console.log(numeroDeUsuario);
    
       if (numeroDeUsuario == numeroSecreto) {
            //alert (`Acertaste, el numero es: ${numeroDeUsuario }. Lo hiciste en ${intento} veces`);
            //alert (`Acertaste, el numero es: ${numeroDeUsuario }. Lo hiciste en ${intento} ${palabra}`);
            alert (`Acertaste, el numero es: ${numeroDeUsuario }. Lo hiciste en ${intento} ${intento == 1 ? 'vez':'veces'}`);
        }  else{
            if(numeroDeUsuario > numeroSecreto)
                {
                alert ("El numero ingresado es mayor")
                }
            else
                {alert("El numero ingresado es menor");
                }
              //intento=intento+1;
              //intento += 1;// a lo que tengo le sumo 1
                intento++;
            palabra='veces';
                if (intento > maxIntento){
                    alert(`Llegaste al numero maximo de ${maxIntento} intentos `);
                break;
                }
            }
    }*/
    //*********************************************************************** */

    let numeroDeUsuario=0;
    let numeroSecreto = Math.floor(Math.random()*10)+1;
    let intento=1;
    let maxIntento =3;
   // console.log(numeroSecreto);
    //alert(numeroSecreto);
 
     while( numeroDeUsuario  != numeroSecreto)
     {
       // numeroDeUsuario = prompt('Elige un número entre 1 y 10');
       // El promptquerecibo lo combierto a un entero
         numeroDeUsuario = parseInt (prompt('Elige un número entre 1 y 10'));
      // meentrega un string
         console.log(typeof(numeroDeUsuario));
     
        if (numeroDeUsuario == numeroSecreto) {
             alert (`Acertaste, el numero es: ${numeroDeUsuario }. Lo hiciste en ${intento} ${intento == 1 ? 'vez':'veces'}`);
         }  else{
             if(numeroDeUsuario > numeroSecreto)
                 {
                 alert ("El numero ingresado es mayor")
                 }
             else
                 {alert("El numero ingresado es menor");
                 }

                 intento++;
             palabra='veces';
                 if (intento > maxIntento){
                     alert(`Llegaste al numero maximo de ${maxIntento} intentos `);
                 break;
                 }
             }
     }
/*Crea un programa que utilice console.log para mostrar un mensaje de bienvenida.*/

/*Crea una variable llamada "nombre" y asígnale tu nombre. Luego, utiliza console.log para mostrar
 el mensaje "¡Hola, [tu nombre]!" en la consola del navegador.*/

/*Crea una variable llamada "nombre" y asígnale tu nombre. Luego, utiliza alert para mostrar el
 mensaje "¡Hola, [tu nombre]!".*/

/*Utiliza prompt y haz la siguiente pregunta: ¿Cuál es el lenguaje de programación que más te gusta?. 
Luego, almacena la respuesta en una variable y muestra la respuesta en la consola del navegador.*/

/*Crea una variable llamada "valor1" y otra llamada "valor2", asignándoles valores numéricos de tu 
elección. Luego, realiza la suma de estos dos valores y almacena el resultado en una tercera variable 
llamada "resultado". Utiliza console.log para mostrar el mensaje "La suma de [valor1] y [valor2] es 
igual a [resultado]." en la consola.*/

/*Crea una variable llamada "valor1" y otra llamada "valor2", asignándoles valores numéricos de tu 
elección. Luego, realiza la resta de estos dos valores y almacena el resultado en una tercera variable
 llamada "resultado". Utiliza console.log para mostrar el mensaje "La diferencia entre [valor1] y
  [valor2] es igual a [resultado]." en la consola.*/

/*Pide al usuario que ingrese su edad con prompt. Con base en la edad ingresada, utiliza un if para 
verificar si la persona es mayor o menor de edad y muestra un mensaje apropiado en la consola.*/

/*Crea una variable "numero" y solicita un valor con prompt. Luego, verifica si es positivo, 
negativo o cero utilizando un if-else y muestra el mensaje correspondiente.*/

//Utiliza un bucle while para mostrar los números del 1 al 10 en la consola.

/*Crea una variable "nota" y asígnale un valor numérico. Utiliza un if-else para determinar si la nota 
es mayor o igual a 7 y muestra "Aprobado" o "Reprobado" en la consola.*/

//Utiliza Math.random para generar cualquier número aleatorio y muestra ese número en la consola.

//Utiliza Math.random para generar un número entero entre 1 y 10 y muestra ese número en la consola.

//Utiliza Math.random para generar un número entero entre 1 y 1000 y muestra ese número en la consola. 