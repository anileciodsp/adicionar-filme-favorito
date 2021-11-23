  function adicionarFilme(){
    let filmeFavorito = document.querySelector('#filme').value;
    listarFilmes(filmeFavorito);
    document.querySelector('#filme').value = '';
  }
  
  function listarFilmes(filme){
    let elementoFilmeFavorito = "<img src=" +filme+ ">";
    let elementoListarFilmes = document.querySelector('#listaFilmes');
    elementoListarFilmes.innerHTML += elementoFilmeFavorito;
  }
  