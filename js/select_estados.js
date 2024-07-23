async function carregarEstados() {
    try {
        const response = await fetch('../../json/cidades.json');
        const data = await response.json();
        return data.estados;
    } catch (error) {
        console.error('Erro ao carregar o JSON:', error);
    }
}

async function populaSelectEstados(selectElement) {
    const estados = await carregarEstados();
    estados.forEach(estado => {
        const option = document.createElement("option");
        option.value = estado.sigla;
        option.text = estado.nome;
        selectElement.appendChild(option);
    });
}

async function populaSelectCidades(selectElement, siglaEstado) {
    const estados = await carregarEstados();
    const estado = estados.find(estado => estado.sigla === siglaEstado);

    selectElement.innerHTML = '';

    if (estado && estado.cidades) {
        estado.cidades.forEach(cidade => {
            const option = document.createElement("option");
            option.value = cidade;
            option.text = cidade;
            selectElement.appendChild(option);
        });
    }
}

// Inicializa a página carregando os estados
document.addEventListener('DOMContentLoaded', async () => {
    const estado_credenciada = document.getElementById("estado");
    const cidade_credenciada = document.getElementById("cidade");

    await populaSelectEstados(estado_credenciada);

    estado_credenciada.addEventListener('change', () => {
        const estadoSelecionado = estado_credenciada.value;
        populaSelectCidades(cidade_credenciada, estadoSelecionado);
    });
});
