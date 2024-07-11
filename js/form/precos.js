$(document).ready(function () {

    function carregarUnidades() {
        // Obtém os dados da sessionStorage
        var empresas = JSON.parse(sessionStorage.getItem('unidades')) || [];

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

    carregarUnidades()

    function carregarNomesFantasia() {
        // Obtém os dados da sessionStorage
        var empresas = JSON.parse(sessionStorage.getItem('empresas')) || [];

        // Seleciona o select onde os nomes fantasia serão exibidos
        var select = $('#empresa');

        // Limpa as opções atuais do select
        select.empty();

        // Adiciona uma opção padrão
        select.append('<option hidden>Selecione uma empresa...</option>');

        // Itera sobre os dados das empresas e adiciona os nomes fantasia ao select
        empresas.forEach(function (empresa) {
            select.append('<option value="' + empresa.nomeFantasia + '">' + empresa.nomeFantasia + '</option>');
        });
    }

    carregarNomesFantasia();

    function carregarNomesCredenciadas() {
        // Obtém os dados da sessionStorage
        var empresas = JSON.parse(sessionStorage.getItem('credenciadas')) || [];

        // Seleciona o select onde os nomes fantasia serão exibidos
        var select = $('#credenciada');

        // Limpa as opções atuais do select
        select.empty();

        // Adiciona uma opção padrão
        select.append('<option hidden>Selecione uma empresa...</option>');

        // Itera sobre os dados das empresas e adiciona os nomes fantasia ao select
        empresas.forEach(function (empresa) {
            select.append('<option value="' + empresa.nome + '">' + empresa.nome + '</option>');
        });
    }

    carregarNomesCredenciadas();

    function carregarTiposExames() {
        // Obtém os dados da sessionStorage
        var empresas = JSON.parse(sessionStorage.getItem('tipos')) || [];

        // Seleciona o select onde os nomes fantasia serão exibidos
        var select = $('#tiposExame');

        // Limpa as opções atuais do select
        select.empty();

        // Adiciona uma opção padrão
        select.append('<option hidden>Selecione uma empresa...</option>');

        // Itera sobre os dados das empresas e adiciona os nomes fantasia ao select
        empresas.forEach(function (empresa) {
            select.append('<option value="' + empresa.nome + '">' + empresa.nome + '</option>');
        });
    }

    carregarTiposExames()

    function carregarNomesExames() {
        // Obtém os dados da sessionStorage
        var empresas = JSON.parse(sessionStorage.getItem('nomes')) || [];

        // Seleciona o select onde os nomes fantasia serão exibidos
        var select = $('#nomesExames');

        // Limpa as opções atuais do select
        select.empty();

        // Adiciona uma opção padrão
        select.append('<option hidden>Selecione uma empresa...</option>');

        // Itera sobre os dados das empresas e adiciona os nomes fantasia ao select
        empresas.forEach(function (empresa) {
            select.append('<option value="' + empresa.nome + '">' + empresa.nome + '</option>');
        });
    }

    carregarNomesExames()

    $('form').submit(function (event) {
        event.preventDefault();

        // Define um array para armazenar os nomes dos campos que queremos capturar
        var campos = [
            'unidade',
            'empresa',
            'credenciada',
            'tiposExame', // Inscrição Estadual
            'nomesExames', // CNPJ
            'valorExame', // Telefone
            'porcentagem',
        ];

        var empresa = {};

        // Itera sobre os campos definidos e captura os valores
        campos.forEach(function (campoId) {
            empresa[campoId] = $('#' + campoId).val();
        });

        var precos = JSON.parse(sessionStorage.getItem('precos')) || [];
        precos.push(empresa);
        sessionStorage.setItem('precos', JSON.stringify(precos));



        alert('Preços salva com sucesso!');

        $('form')[0].reset();
        location.reload();
    });
});
