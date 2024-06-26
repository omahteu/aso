$(document).ready(function () {
    // Função para carregar e exibir os dados da localStorage na tabela
    function carregarEmpresas() {
        // Obtém os dados da localStorage
        var empresas = JSON.parse(localStorage.getItem('empresas')) || [];
        
        // Seleciona a tabela onde os dados serão exibidos
        var tabela = $('#tabelaEmpresas');
        console.log(tabela)
        // Limpa o conteúdo atual da tabela
        tabela.empty();

        // Itera sobre os dados das empresas e cria as linhas da tabela
        empresas.forEach(function (empresa, index) {
            var row = '<tr>' +
                //'<td>' + (index + 1) + '</td>' +
                '<td>' + empresa.nomeFantasia + '</td>' +
                '<td>' + empresa.ie + '</td>' +
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
});
