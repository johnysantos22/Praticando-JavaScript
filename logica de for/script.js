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

});


