$(document).ready(function () {

    function carregarUnidades() {
        // Obtém os dados da sessionStorage
        var empresas = JSON.parse(sessionStorage.getItem('unidades')) || [];

        // Seleciona o select onde os nomes fantasia serão exibidos
        var select = $('#unidade');

        // Limpa as opções atuais do select
        select.empty();

        // Adiciona uma opção padrão
        select.append('<option hidden>Selecione...</option>');

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
        select.append('<option hidden>Selecione...</option>');

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
        select.append('<option hidden>Selecione...</option>');

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
        select.append('<option hidden>Selecione o tipo do exame...</option>');

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
        select.append('<option hidden>Selecione...</option>');

        // Itera sobre os dados das empresas e adiciona os nomes fantasia ao select
        empresas.forEach(function (empresa) {
            select.append('<option value="' + empresa.nome + '">' + empresa.nome + '</option>');
        });
    }

    carregarNomesExames()

    function carregarNomesFuncoes() {

        var empresas = JSON.parse(sessionStorage.getItem('funcoes')) || [];

        var select = $('#funcao');

        select.empty();

        select.append('<option hidden>Selecione...</option>');

        empresas.forEach(function (empresa) {
            select.append('<option value="' + empresa.nome + '">' + empresa.nome + '</option>');
        });
    }

    carregarNomesFuncoes()

    $('form').submit(function (event) {
        event.preventDefault();

        // Define um array para armazenar os nomes dos campos que queremos capturar
        var campos = [
            'unidade',
            'empresa',
            'credenciada',
            'nome',
            'rg',
            'cpf',
            'nascimento',
            'sexo',
            'funcao',
            'dataExame',
            'tiposExame', // Inscrição Estadual
            'nomesExames', // CNPJ
            'situacao',
            'observacao'
        ];

        var empresa = {};

        // Itera sobre os campos definidos e captura os valores
        campos.forEach(function (campoId) {
            empresa[campoId] = $('#' + campoId).val();
        });

        var asos = JSON.parse(sessionStorage.getItem('asos')) || [];
        asos.push(empresa);
        sessionStorage.setItem('asos', JSON.stringify(asos));



        alert('ASO criado com sucesso!');

        this.reset();
        location.reload();
        //window.open("../../pages/forms/opcoes.html", "_blank");
    });
});

$(document).ready(function () {

    var tiposExameOptions = [

    ];

    $('#nomesExames').select2({
        data: tiposExameOptions,
        placeholder: 'Selecione...',
        allowClear: true
    });

    // Capturar os itens selecionados quando o formulário for submetido
    $('#seuFormulario').submit(function (event) {
        event.preventDefault(); // Previne o envio padrão do formulário para exemplo aqui

        var selectedValues = $('#tiposExame').val();
        console.log('Itens selecionados:', selectedValues);

    });
});