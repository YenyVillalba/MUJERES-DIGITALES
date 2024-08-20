//EJERCICIO DE RESPASO JS PARA ENTREGAR

// Contador de numeros mayores que 5
    //si el numero es mayor que 5 incrementar
//ciclo imprimir numero de 1 a 10 y contar los mayores de 5
let contadorMayorQueCinco = 0;

console.log("Números del 1 al 10:");
for (let i = 1; i <= 10; i++) {
    console.log(i); // Imprime numero de
    

    if (i > 5) {
        contadorMayorQueCinco++;
    }
}

// Imprimir numeros mayores que 5
console.log("Números mayores que cinco:");
for (let i = 1; i <= 10; i++) {
    if (i > 5) {
        console.log(i); // Imprimir el número actual mayor que 5
    }
}

// Mostrar el conteo de números mayores que 5
console.log("Cantidad de números mayores que cinco: " + contadorMayorQueCinco);

