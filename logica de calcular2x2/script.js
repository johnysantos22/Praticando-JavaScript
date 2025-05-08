function calcular() {
    const modelo = document.getElementById("modelo").value;
    const preco = parseFloat(document.getElementById('preco').value);

    if (!modelo || isNaN(preco)) {
        document.getElementById("resultado").textContent =
         "Por favor, preencha todos os campos corretamente.";
        return;
    }

    const entrada = preco * 0.5;
    const saldo = (preco - entrada) / 12;

    document.getElementById("resultado").innerHTML =
        `
        Modelo: ${modelo}<br>
        Entrada: R$ ${entrada.toFixed(2)}<br>
        12 parcelas de R$ ${saldo.toFixed(2)}<br>
        `;
}