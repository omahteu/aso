$(document).ready(function () {
    // Função para carregar e exibir os dados da localStorage na tabela
    function carregarprecos() {
        // Obtém os dados da localStorage
        var precos = JSON.parse(localStorage.getItem('precos')) || [];
        
        // Seleciona a tabela onde os dados serão exibidos
        var tabela = $('#tabelaPrecos');
        console.log(tabela)
        // Limpa o conteúdo atual da tabela
        tabela.empty();

        // Itera sobre os dados das precos e cria as linhas da tabela
        precos.forEach(function (empresa, index) {
            var row = '<tr>' +
                //'<td>' + (index + 1) + '</td>' +
                '<td>' + empresa.nome + '</td>' +
                '<td>' + empresa.tipoExame + '</td>' +
                '<td>' + empresa.nomeExame + '</td>' +
                '<td>' + empresa.valorExame + '</td>' +
                '<td>' + empresa.porcentagem + '</td>' +
                '<td>' + empresa.eEmpresas + '</td>' +
                '<td>' + empresa.eCredenciadas + '</td>' +
                '</tr>';
            tabela.append(row);
        });
    }

    // Chama a função para carregar e exibir os dados ao carregar a página
    carregarprecos();
});
