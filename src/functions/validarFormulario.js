import Api from "../classes/Api";

function validarFormulario() {
  // Valida formulario con los datos del usuario
  const artista = document.getElementById("artista").value;
  const cancion = document.getElementById("cancion").value;

  if (artista === "" || cancion === "") {
    const divMensajes = document.getElementById("mensajes");
    divMensajes.textContent = "Error, todos los campos son obligatorios";
    divMensajes.classList.add("error");

    setTimeout(() => {
      divMensajes.remove();
    }, 2500);
  }

  const busqueda = new Api(artista, cancion);
  busqueda.consultarAPI();
}

export default validarFormulario;
