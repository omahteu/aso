$(document).ready(function () {
    // Função para carregar e exibir os dados da localStorage na tabela
    function carregarNomesExames() {
        // Obtém os dados da localStorage
        var empresas = JSON.parse(localStorage.getItem('nomes')) || [];
        
        // Seleciona a tabela onde os dados serão exibidos
        var tabela = $('#tabelaNomesExames');
        console.log(tabela)
        // Limpa o conteúdo atual da tabela
        tabela.empty();

        // Itera sobre os dados das empresas e cria as linhas da tabela
        empresas.forEach(function (empresa, index) {
            var row = '<tr>' +
                '<td>' + empresa.nomeExame + '</td>' +
                '<td>' + empresa.nome + '</td>' +
                '<td>' + empresa.vencimento + '</td>' +
                '</tr>';
            tabela.append(row);
        });
    }

    function carregarTiposExames() {
        // Obtém os dados da localStorage
        var empresas = JSON.parse(localStorage.getItem('tipos')) || [];
        
        // Seleciona a tabela onde os dados serão exibidos
        var tabela = $('#tabelaTiposExames');

        // Limpa o conteúdo atual da tabela
        tabela.empty();

        // Itera sobre os dados das empresas e cria as linhas da tabela
        empresas.forEach(function (empresa, index) {
            var row = '<tr>' +
                '<td> Tipo </td>' +
                '<td>' + empresa.nome + '</td>' +
                '</tr>';
            tabela.append(row);
        });
    }

    carregarNomesExames()

    carregarTiposExames()
});
