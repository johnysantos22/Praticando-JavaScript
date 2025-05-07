//Elaborar um programa que leia o valor de um jantar. Calcule e informe
 //o valor da taxa do garçom (10%) e o valor total a ser pago.
 //Valor do Jantar R$: 80.00
 //Taxa do Garçom R$: 8.00
 //Total a Pagar R$: 88.00

 

 const valorJantar = window.prompt("Digite o valor aqui");
 alert(`O valor do jantar é: ${valorJantar}`);

 const taxaGarcom = valorJantar * 0.1;
 alert(`O valor do garçom é: ${taxaGarcom}`) 

 const totalAPagar = Number(taxaGarcom) + Number(valorJantar);
 alert(`O total a pagar é: ${totalAPagar}`);

   
