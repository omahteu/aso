$(document).ready(function () {
    // Função para carregar e exibir os dados da localStorage na tabela
    function carregarEmpresas() {
        // Obtém os dados da localStorage
        var empresas = JSON.parse(localStorage.getItem('usuarios')) || [];
        
        // Seleciona a tabela onde os dados serão exibidos
        var tabela = $('#tabelaUsuarios');
        console.log(tabela)
        // Limpa o conteúdo atual da tabela
        tabela.empty();

        // Itera sobre os dados das empresas e cria as linhas da tabela
        empresas.forEach(function (empresa, index) {
            var row = '<tr>' +
                '<td> <input type="checkbox" name="" id=""> </td>' +
                '<td> <input type="checkbox" name="" id=""> </td>' +
                '<td>' + empresa.nome + '</td>' +
                '<td>' + empresa.email + '</td>' +
                '<td>' + empresa.perfil + '</td>' +
                '</tr>';
            tabela.append(row);
        });
    }

    // Chama a função para carregar e exibir os dados ao carregar a página
    carregarEmpresas();

});
