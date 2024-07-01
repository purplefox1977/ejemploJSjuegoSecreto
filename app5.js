let numeroMaximo =100;
let numeroSecreto = Math.floor(Math.random()*10)+1;
let numeroDeUsuario=0;
let intento=1;
let maxIntento =3;


 while( numeroDeUsuario  != numeroSecreto)
 {
   // numeroDeUsuario = prompt('Elige un número entre 1 y 10');
   // El promptquerecibo lo combierto a un entero
     numeroDeUsuario = parseInt (prompt(`Elige un número entre 1 y ${numeroMaximo }`));
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