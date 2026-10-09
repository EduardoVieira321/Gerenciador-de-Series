import {
    listarFavoritos,
    removerFavorito
} from "./favoritos.js";

function mostrarFavoritos() {
    const favoritos = listarFavoritos();
    const container = document.getElementById("resultado_favoritos");

    container.innerHTML = "";

    if (favoritos.length === 0) {
        container.textContent = "Você ainda não possui séries favoritas.";
        return;
    }

    favoritos.forEach(favorito => {
        const card = document.createElement("div");
        card.classList.add("card-serie");

        const imagem = document.createElement("img");

        imagem.src = favorito.image?.medium;
        
        const titulo = document.createElement("h2");
        titulo.textContent = favorito.name;

        const nota = document.createElement("p");
        nota.textContent = `Nota: ${favorito.rating?.average ?? "Sem nota"}`;

        const genero = document.createElement("p")
        genero.innerHTML = `<strong>genero: ${favorito.genres}</strong>`

        const btnRemover = document.createElement("button");
        btnRemover.textContent = "Remover dos favoritos";

        btnRemover.addEventListener("click", () => {
            removerFavorito(favorito.id);
            mostrarFavoritos();
        });

        card.appendChild(imagem);
        card.appendChild(titulo);
        card.appendChild(nota);
        card.appendChild(genero);
        card.appendChild(btnRemover);

        container.appendChild(card);
    });
}

mostrarFavoritos();