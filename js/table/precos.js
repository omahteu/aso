$(document).ready(function () {
    // Função para carregar e exibir os dados da localStorage na tabela
    function carregarprecos() {
        // Obtém os dados da localStorage
        var precos = JSON.parse(localStorage.getItem('precos')) || [];
        
        // Seleciona a tabela onde os dados serão exibidos
        var tabela = $('#tabelaPrecos');

        // Limpa o conteúdo atual da tabela
        tabela.empty();

        // Itera sobre os dados das precos e cria as linhas da tabela
        precos.forEach(function (empresa, index) {
            var row = '<tr>' +
                //'<td>' + (index + 1) + '</td>' +
                '<td>' + empresa.unidade + '</td>' +
                '<td>' + empresa.empresa + '</td>' +
                '<td>' + empresa.credenciada + '</td>' +
                '<td>' + empresa.nome + '</td>' +
                '<td>' + empresa.tiposExame + '</td>' +
                '<td>' + empresa.nomesExames + '</td>' +
                '<td>' + empresa.valorExame + '</td>' +
                '<td>' + empresa.porcentagem + '</td>' +
                '</tr>';
            tabela.append(row);
        });
    }

    // Chama a função para carregar e exibir os dados ao carregar a página
    carregarprecos();

    function carregarNomesFantasia() {
        // Obtém os dados da localStorage
        var empresas = JSON.parse(localStorage.getItem('empresas')) || [];

        // Seleciona o select onde os nomes fantasia serão exibidos
        var select = $('#filtroEmpresa');

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

    $('#filtroEmpresa').change(function() {
        var empresaSelecionada = $(this).val(); // Captura o valor selecionado
        console.log(empresaSelecionada)
        // Limpa a tabela antes de inserir novos dados
        $('#tabelaAsos').empty();

        // Verifica se há algum valor selecionado
        if (empresaSelecionada !== '') {
            // Recupera os dados do localStorage (supondo que estejam em formato JSON)
            var empresas = JSON.parse(localStorage.getItem('asos'));

            // Filtra os dados com base na empresa selecionada
            var dadosFiltrados = empresas.filter(function(item) {
                return item.empresa === empresaSelecionada;
            });

            // Insere os dados filtrados na tabela
            $.each(dadosFiltrados, function(i, item) {
                var newRow = '<tr>' +
                                '<td>' + item.unidade + '</td>' +
                                '<td>' + item.empresa + '</td>' +
                                '<td>' + item.credenciada + '</td>' +
                                '<td>' + item.nome + '</td>' +
                                '<td>' + item.rg + '</td>' +
                                '<td>' + item.cpf + '</td>' +
                                '<td>' + item.nascimento + '</td>' +
                                '<td>' + item.sexo + '</td>' +
                                '<td>' + item.funcao + '</td>' +
                                '<td>' + item.dataExame + '</td>' +
                                '<td>' + item.tiposExame + '</td>' +
                                '<td>' + item.nomesExames + '</td>' +
                                '<td>' + item.situacao + '</td>' +
                                '<td>' + item.observacao + '</td>' +
                                '<td>' + item.pagamento + '</td>' +
                             '</tr>';
                $('#tabelaAsos').append(newRow);
            });
        }
    });
});
