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
        const { lyrics } = respuesta;

        const divResultado = document.getElementById("resultado");
        divResultado.textContent = lyrics;
      });
  }
}

export default Api;
