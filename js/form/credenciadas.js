$(document).ready(function () {
    // Função para carregar e exibir os nomes fantasia das empresas em um select
    function carregarNomesFantasia() {
        // Obtém os dados da localStorage
        var empresas = JSON.parse(localStorage.getItem('empresas')) || [];

        // Seleciona o select onde os nomes fantasia serão exibidos
        var select = $('#empresa');

        // Limpa as opções atuais do select
        select.empty();

        // Adiciona uma opção padrão
        select.append('<option value="">Selecione uma empresa...</option>');

        // Itera sobre os dados das empresas e adiciona os nomes fantasia ao select
        empresas.forEach(function (empresa) {
            select.append('<option value="' + empresa.nomeFantasia + '">' + empresa.nomeFantasia + '</option>');
        });
    }

    // Chama a função para carregar e exibir os nomes fantasia ao carregar a página
    carregarNomesFantasia();

    function carregarNomesUnidades() {
        // Obtém os dados da localStorage
        var empresas = JSON.parse(localStorage.getItem('unidades')) || [];

        // Seleciona o select onde os nomes fantasia serão exibidos
        var select = $('#unidade');

        // Limpa as opções atuais do select
        select.empty();

        // Adiciona uma opção padrão
        select.append('<option hidden>Selecione uma empresa...</option>');

        // Itera sobre os dados das empresas e adiciona os nomes fantasia ao select
        empresas.forEach(function (empresa) {
            select.append('<option value="' + empresa.nome + '">' + empresa.nome + '</option>');
        });
    }

    // Chama a função para carregar e exibir os nomes fantasia ao carregar a página
    carregarNomesUnidades();

    $('form').submit(function (event) {
        event.preventDefault();

        // Define um array para armazenar os nomes dos campos que queremos capturar
        var campos = [
            'unidade',
            'empresa',
            'eCredenciadas', // Nome Fantasia
            'nome',
            'ie', // Inscrição Estadual
            'matricula',
            'cnpj', // CNPJ
            'telefone', // Telefone
            'email',
            'cep', // CEP
            'rua', // Rua
            'numero', // Número
            'complemento', // Complemento
            'bairro', // Bairro
            'cidade', // Cidade
            'estado', // Estado
            'observacoes'
        ];

        var empresa = {};

        // Itera sobre os campos definidos e captura os valores
        campos.forEach(function (campoId) {
            empresa[campoId] = $('#' + campoId).val();
        });

        var credenciadas = JSON.parse(localStorage.getItem('credenciadas')) || [];
        credenciadas.push(empresa);
        localStorage.setItem('credenciadas', JSON.stringify(credenciadas));



        alert('Empresa Credenciada salva com sucesso!');

        $('form')[0].reset();
        location.reload();
    });
});
