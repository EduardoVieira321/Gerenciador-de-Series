import { addFavorito,removerFavorito} from "./favoritos.js";
export function mostrarSeries(series) {
    series.forEach(resultado => {

        const serie = resultado.show;

        const card = document.createElement("div");
        card.classList.add("card-serie");

        const imagem = document.createElement("img");
        imagem.src = serie.image?.medium;

        const titulo = document.createElement("h2");
        titulo.textContent = serie.name;

        const nota = document.createElement("p");
        nota.textContent = `Nota: ${serie.rating.average}`;

        const genero = document.createElement("p")
        genero.innerHTML = `<strong>genero: ${serie.genres}</strong>`

        const btnFavorito = document.createElement("button");
        btnFavorito.classList.add("btn-favorito"); 

        const iconeEstrela = document.createElement("i");
       
        iconeEstrela.classList.add("fa-regular", "fa-star");

        const textoBotao = document.createTextNode(" Favoritar");

        btnFavorito.appendChild(iconeEstrela);
        btnFavorito.appendChild(textoBotao);

       btnFavorito.addEventListener("click", () => {
        console.log("Botão de favorito clicado!");

    const estaFavoritado = iconeEstrela.classList.toggle("fa-solid");
    
    iconeEstrela.classList.toggle("fa-regular", !estaFavoritado);

    if (estaFavoritado) {
        console.log("Série favoritada!");
        addFavorito(serie);
    } else {
        console.log("Série desfavoritada!");
        removerFavorito(serie.id)
    }
});
        card.appendChild(imagem);
        card.appendChild(titulo);
        card.appendChild(nota);
        card.appendChild(genero)
        card.appendChild(btnFavorito)
        document.getElementById("resultado").appendChild(card);
    });
}