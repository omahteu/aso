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

    // $('form').submit(function (event) {
    //     event.preventDefault();

    //     // Define um array para armazenar os nomes dos campos que queremos capturar
    //     var campos = [
    //         'tipoExame',
    //         'nomeExame',
    //         'nome', // Nome Fantasia
    //         'vencimento'
    //     ];

    //     var empresa = {};

    //     // Itera sobre os campos definidos e captura os valores
    //     campos.forEach(function (campoId) {
    //         empresa[campoId] = $('#' + campoId).val();
    //     });

    //     var credenciadas = JSON.parse(localStorage.getItem('credenciadas')) || [];
    //     credenciadas.push(empresa);
    //     localStorage.setItem('credenciadas', JSON.stringify(credenciadas));



    //     alert('Empresa Credenciada salva com sucesso!');

    //     $('form')[0].reset();
    //     l//ocation.reload();
    // });

    //$('form').submit(function (event) {
    $(document).on("submit", "form", function(event) {
        event.preventDefault();
    
        // Define um array para armazenar os nomes dos campos que queremos capturar
        var campos = [
            'tipoExame',
            'nomeExame',
            'nome', // Nome Fantasia
            'vencimento'
        ];
    
        var empresa = {};
        var tabela = '';
    
        // Itera sobre os campos definidos e captura os valores
        campos.forEach(function (campoId) {
            // Verifica se o campo é tipoExame ou nomeExame e se está marcado
            if (campoId === 'tipoExame' && $('#' + campoId).is(':checked')) {
                empresa[campoId] = $('#' + campoId).val();
                tabela = 'tipos';
            } else if (campoId === 'nomeExame' && $('#' + campoId).is(':checked')) {
                empresa[campoId] = $('#' + campoId).val();
                tabela = 'nomes';
            } else if (campoId !== 'tipoExame' && campoId !== 'nomeExame') {
                empresa[campoId] = $('#' + campoId).val();
            }
        });
    
        // Define a tabela correta para salvar
        var credenciadas = JSON.parse(localStorage.getItem(tabela)) || [];
        credenciadas.push(empresa);
        localStorage.setItem(tabela, JSON.stringify(credenciadas));
    
        alert('Informação sobre Exame salvo com sucesso!');
    
        $('form')[0].reset();
        location.reload();
    });
    
    
});
