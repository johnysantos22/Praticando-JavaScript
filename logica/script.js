//. Verifique quantos números em uma lista são divisíveis por 3 e por 2 ao mesmo tempo.

/*const numbers = [1,2,3,4,5,6,7,8,9,10];

for (let i = 0; i < numbers.length; i++ ) {
    if (numbers[i] % 3 === 0 && numbers[i] % 2 == 0 ) {
        console.log(numbers[i] + " é divisível por 3 e 2 ao mesmo tempo.")
    }
}*/

//Dado um array de idades, conte quantas pessoas são maiores de idade (18 anos ou mais).
const idades = [
    { nome: "João", idade: 20 },
    { nome: "Maria", idade: 17 },
    { nome: "José", idade: 25 },
    { nome: "Ana", idade: 15 },
    { nome: "Pedro", idade: 30 }
];

for (let i = 0; i < idades.length; i++) {
    if (idades[i].idade >= 18) {
        console.log(idades[i].nome + " é maior de idade.");
    } else {
        console.log(idades[i].nome + " é menor de idade.");
    }
}

//. Crie um loop que imprima os números de 1 a 10, mas pule o número 5.
