export async function carregarSeries(serieDigitada) {

    try {

        const response = await fetch(
            `https://api.tvmaze.com/search/shows?q=${serieDigitada}`
        );

        if (!response.ok) {
            throw new Error("Erro ao buscar a série");
        }

        const dados = await response.json();
        return dados;

    } catch (erro) {

        console.error(erro);
        throw erro;

    }
}
