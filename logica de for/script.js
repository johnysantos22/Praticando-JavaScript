let formulario = document.getElementById("formulario");
let lista = document.getElementById("lista");

formulario.addEventListener("submit", function (event) {
  event.preventDefault();

  for (let i = 0; i < formulario.elements.length; i++) {
    if (
      formulario.elements[i].type !== "submit" &&
      formulario.elements[i].value.trim() === ""
    ) {
      alert("Preencha todos os campos!");
      return;
    }
  }
 
  let valor = formulario.elements[0].value.trim();

    let li = document.createElement("li");
    li.textContent = valor + " ";

    let botaoExcluir = document.createElement("button");
    botaoExcluir.textContent = "Excluir";

    botaoExcluir.addEventListener("click", function () {
      lista.removeChild(li);
    });

    li.appendChild(botaoExcluir);
    lista.appendChild(li);

    formulario.reset();




});


