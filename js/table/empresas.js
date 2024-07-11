$(document).ready(function () {
    // Função para carregar e exibir os dados da sessionStorage na tabela
    function carregarEmpresas() {
        // Obtém os dados da sessionStorage
        var empresas = JSON.parse(sessionStorage.getItem('empresas')) || [];
        
        // Seleciona a tabela onde os dados serão exibidos
        var tabela = $('#tabelaEmpresas');
        console.log(tabela)
        // Limpa o conteúdo atual da tabela
        tabela.empty();

        // Itera sobre os dados das empresas e cria as linhas da tabela
        empresas.forEach(function (empresa, index) {
            var row = '<tr>' +
                '<td> <input type="checkbox" name="" id=""> </td>' +
                '<td> <input type="checkbox" name="" id=""> </td>' +
                '<td>' + empresa.unidades + '</td>' +
                '<td>' + empresa.nomeFantasia + '</td>' +
                '<td>' + empresa.ie + '</td>' +
                '<td>' + empresa.matricula + '</td>' +
                '<td>' + empresa.cnpj + '</td>' +
                '<td>' + empresa.telefone + '</td>' +
                '<td>' + empresa.cep + '</td>' +
                '<td>' + empresa.rua + '</td>' +
                '<td>' + empresa.numero + '</td>' +
                '<td>' + empresa.complemento + '</td>' +
                '<td>' + empresa.bairro + '</td>' +
                '<td>' + empresa.cidade + '</td>' +
                '<td>' + empresa.estado + '</td>' +
                '</tr>';
            tabela.append(row);
        });
    }

    // Chama a função para carregar e exibir os dados ao carregar a página
    carregarEmpresas();

    function carregarNomesFantasia() {
        // Obtém os dados da sessionStorage
        var empresas = JSON.parse(sessionStorage.getItem('empresas')) || [];

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
            // Recupera os dados do sessionStorage (supondo que estejam em formato JSON)
            var empresas = JSON.parse(sessionStorage.getItem('asos'));

            // Filtra os dados com base na empresa selecionada
            var dadosFiltrados = empresas.filter(function(item) {
                return item.empresa === empresaSelecionada;
            });

            // Insere os dados filtrados na tabela
            $.each(dadosFiltrados, function(i, item) {
                var newRow = '<tr>' +
                                '<td> <input type="checkbox" name="" id=""> </td>' +
                                '<td> <input type="checkbox" name="" id=""> </td>' +
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
