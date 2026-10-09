import { carregarSeries } from './api.js';
import { mostrarSeries } from './ui.js'

const inputSerie = document.getElementById("serie");
const btnBuscar = document.getElementById('btnBuscar');
const divResultado = document.getElementById('resultado');

async function lidarComBusca() {

    const serie_digitada = inputSerie.value.trim();

    divResultado.innerHTML = "Buscando...";

    if (serie_digitada === '') {

        divResultado.innerHTML =
            "<p style='color: red;'>Digite uma série para começar a busca</p>";

        return;
    }

    try {

        const series = await carregarSeries(serie_digitada);
        if(!series || series.length == 0){
            divResultado.innerHTML = "<p style='color: orange;'>Nenhuma série foi encontrada com esse nome.</p>";
            return
        }
        mostrarSeries(series)

    } catch (erro) {

        divResultado.innerHTML =
            `<p style='color: red;'>${erro.message}</p>`;

    }
}

btnBuscar.addEventListener('click', lidarComBusca);

inputSerie.addEventListener('keypress', (e) => {

    if (e.key === 'Enter') {
        lidarComBusca();
    }

});