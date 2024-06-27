$(document).ready(function () {
    // Função para carregar e exibir os dados da localStorage na tabela
    function carregarunidades() {
        // Obtém os dados da localStorage
        var unidades = JSON.parse(localStorage.getItem('unidades')) || [];
        
        // Seleciona a tabela onde os dados serão exibidos
        var tabela = $('#tabelaUnidades');

        // Limpa o conteúdo atual da tabela
        tabela.empty();

        // Itera sobre os dados das unidades e cria as linhas da tabela
        unidades.forEach(function (empresa, index) {
            var row = '<tr>' +
                //'<td>' + (index + 1) + '</td>' +
                '<td>' + empresa.nome + '</td>' +
                '<td>' + empresa.cidade + '</td>' +
                '<td>' + empresa.estado + '</td>' +
                '<td>' + empresa.email + '</td>' +
                '</tr>';
            tabela.append(row);
        });
    }

    // Chama a função para carregar e exibir os dados ao carregar a página
    carregarunidades();
});
