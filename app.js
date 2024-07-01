alert('Bienvenido al juego del número secreto');
let ingreseNumDeUsuario=0;
let numeroSecreto = 4;
let cont=0;
    while( ingreseNumDeUsuario != numeroSecreto){
        ingreseNumDeUsuario = prompt('Elige un número entre 1 y 10');
        console.log(intento  == numeroSecreto);

        if (ingreseNumDeUsuario  == numeroSecreto) {
            alert(`Acertaste, el numero es: ${ingreseNumDeUsuario}`);
          
            
                if(ingreseNumDeUsuario > numeroSecreto)
                    {
                    alert ("El numero ingresado es mayor")
                    }
                else
                    {
                    alert("El numero ingresado es menor");
                    }
               
                //cont=cont +1; 
          }    
    }

/*
let qtdNumeros = prompt('Digite la cantidad de números para el cálculo del promedio:');
let soma = 0;
let contador = qtdNumeros;

while(contador > 0){
    let numero = parseInt(prompt('Digite el numero:'));
    soma += numero;
}

let promedio = soma / qtdNumeros;

console.log(promedio);

*/