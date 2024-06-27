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
});
