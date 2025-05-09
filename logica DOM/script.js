
function calcularMedia() {
    const nome = document.getElementById("nome").value;
    const nota1 = parseFloat(document.getElementById("nota1").value);
    const nota2 = parseFloat(document.getElementById("nota2").value);
    const nota3 = parseFloat(document.getElementById("nota3").value);
    const nota4 = parseFloat(document.getElementById("nota4").value);

if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(nota4)) {
    document.getElementById("resultado").innerText = 
    "Por favor, preencha todos os campos corretamente.";
    return;
}

const media = (nota1 + nota2 +  nota3 + nota4) / 4;

let resultado = "";

if ( media >= 7) {
    resultado = "Aprovado"; 
} else if ( media < 7) {
    resultado = " Reprovado";
} else if (media >= 5 && media < 7) {
    resultado = "Recuperação";
}

document.getElementById("resultado").innerHTML =
    `Nome: ${nome}<br>
    Nota 1: ${nota1}<br>
    Nota 2: ${nota2}<br>
    Nota 3: ${nota3}<br>
    Nota 4: ${nota4}<br>
    Media: ${media.toFixed(2)}<br>
    Resultado: ${resultado}
    `;

}
