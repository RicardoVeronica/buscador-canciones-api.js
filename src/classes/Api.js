class Api {
  // Consulta Api
  constructor(artista, cancion) {
    this.artista = artista;
    this.cancion = cancion;
  }

  consultarAPI() {
    const url = `https://api.lyrics.ovh/v1/${this.artista}/${this.cancion}`;

    fetch(url)
      .then((respuesta) => respuesta.json())
      .then((respuesta) => {
        if (respuesta.lyrics) {
          const { lyrics } = respuesta;

          const divResultado = document.getElementById("resultado");
          divResultado.textContent = lyrics;

          const headingResultado = document.querySelector(
            ".letra-resultado h2"
          );
          headingResultado.textContent = `
          Letra de cancion: ${this.cancion} de ${this.artista}
        `;
        } else {
          const divMensajes = document.getElementById("mensajes");
          divMensajes.textContent = "No existe, prueba con otra busqueda";
          divMensajes.classList.add("error");

          setTimeout(() => {
            divMensajes.remove();
          }, 2500);
        }
      });
  }
}

export default Api;
