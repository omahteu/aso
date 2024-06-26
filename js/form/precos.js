$(document).ready(function () {
    // Função para carregar e exibir os nomes fantasia das empresas em um select
    function carregarNomesFantasia() {
        // Obtém os dados da localStorage
        var empresas = JSON.parse(localStorage.getItem('empresas')) || [];

        // Seleciona o select onde os nomes fantasia serão exibidos
        var select = $('#eEmpresas');

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

    function carregarNomesCredenciadas() {
        // Obtém os dados da localStorage
        var empresas = JSON.parse(localStorage.getItem('credenciadas')) || [];

        // Seleciona o select onde os nomes fantasia serão exibidos
        var select = $('#eCredenciadas');

        // Limpa as opções atuais do select
        select.empty();

        // Adiciona uma opção padrão
        select.append('<option value="">Selecione uma empresa...</option>');

        // Itera sobre os dados das empresas e adiciona os nomes fantasia ao select
        empresas.forEach(function (empresa) {
            select.append('<option value="' + empresa.nome + '">' + empresa.nome + '</option>');
        });
    }

    // Chama a função para carregar e exibir os nomes fantasia ao carregar a página
    carregarNomesCredenciadas();

    $('form').submit(function (event) {
        event.preventDefault();

        // Define um array para armazenar os nomes dos campos que queremos capturar
        var campos = [
            'nome',
            'tipoExame', // Inscrição Estadual
            'nomeExame', // CNPJ
            'valorExame', // Telefone
            'porcentagem',
            'eEmpresas', // CEP
            'eCredenciadas'
        ];

        var empresa = {};

        // Itera sobre os campos definidos e captura os valores
        campos.forEach(function (campoId) {
            empresa[campoId] = $('#' + campoId).val();
        });

        var precos = JSON.parse(localStorage.getItem('precos')) || [];
        precos.push(empresa);
        localStorage.setItem('precos', JSON.stringify(precos));



        alert('Preços salva com sucesso!');

        $('form')[0].reset();
        location.reload();
    });
});
