const numero = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

let somaTotal = 0;

for (let i = 0; i < numero.length; i++) {
   /* if (numero[i] % 2 === 0) {
        console.log("somando os numero pares: " + numero[i]);
        somaTotal += numero[i]
    };*/ if ( numero[i] % 2 !== 0 ) {
        console.log("soamdo os numeros impares:" + numero[i])
        somaTotal += numero[i]
    }
    
}
console.log("soma total é: " + somaTotal);


 