const CHAVE_FAVORITOS = "favoritos";

// 1. Recuperar as séries salvas
export function listarFavoritos() {
    const dados = localStorage.getItem(CHAVE_FAVORITOS);

    if (dados === null) {
        return [];
    }

    return JSON.parse(dados);
}

export function addFavorito(serie) {
    const favoritos = listarFavoritos();

    // Evitar adicionar a mesma série duas vezes
    const jaExiste = favoritos.some(favorito => favorito.id === serie.id);

    if (jaExiste) {
        return;
    }

    favoritos.push(serie);

    localStorage.setItem(
        CHAVE_FAVORITOS,
        JSON.stringify(favoritos)
    );
}

// 3. Remover uma série dos favoritos
export function removerFavorito(id) {
    const favoritos = listarFavoritos();

    const atualizados = favoritos.filter(
        favorito => favorito.id !== id
    );

    localStorage.setItem(
        CHAVE_FAVORITOS,
        JSON.stringify(atualizados)
    );
}
