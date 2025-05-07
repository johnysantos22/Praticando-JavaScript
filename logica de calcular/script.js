//Elaborar um programa que leia o valor de um jantar. Calcule e informe
 //o valor da taxa do garçom (10%) e o valor total a ser pago.
 //Valor do Jantar R$: 80.00
 //Taxa do Garçom R$: 8.00
 //Total a Pagar R$: 88.00

 

 const nome = prompt("Digite o valor aqui");
 alert(`O valor do jantar é: ${nome}`);
 const taxaGarcom = 0.10; 
 const totalAPagar = taxaGarcom * nome;
 alert(`O valor da taxa do garçom é: ${taxaGarcom}`);
 alert(`O valor total a ser pago é: ${totalAPagar}`);
   