/*Elabore um programa para uma revenda de veículos. 
O programa deve ler modelo e preço do veículo. 
Apresentar como resposta o valor da entrada (50%)
 e o saldo em 12x.*/


const modelo = prompt("Infome o modelo do veículo:");
const preco = parseFloat(prompt("Informe o preço do veículo:"));
const entrada = preco * 0.5;
const parcelas = (preco - entrada) / 12;

alert(`O modelo do veículo é: ${modelo}`);
alert(`O preço do veículo é: ${preco}`);
alert(`O valor da entrada é: ${entrada}`);
alert(`O saldo em 12x é: R$ ${parcelas.toFixed(2)}`);