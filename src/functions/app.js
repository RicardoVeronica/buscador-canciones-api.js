import validarFormulario from "./validarFormulario";

function app() {
  // Inicia applicacion
  const formularioBuscar = document.getElementById("formulario-buscar");

  formularioBuscar.addEventListener("click", (e) => {
    // Dispara validarFormulario con el boton buscar
    if (e.target.matches("input[type='submit']")) {
      e.preventDefault();

      validarFormulario();
    }
  });
}

export default app;
