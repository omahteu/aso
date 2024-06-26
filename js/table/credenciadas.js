$(document).ready(function () {
    // Função para carregar e exibir os dados da localStorage na tabela
    function carregarcredenciadas() {
        // Obtém os dados da localStorage
        var credenciadas = JSON.parse(localStorage.getItem('credenciadas')) || [];
        
        // Seleciona a tabela onde os dados serão exibidos
        var tabela = $('#tabelacredenciadas');
        console.log(tabela)
        // Limpa o conteúdo atual da tabela
        tabela.empty();

        // Itera sobre os dados das credenciadas e cria as linhas da tabela
        credenciadas.forEach(function (empresa, index) {
            var row = '<tr>' +
                '<td>' + empresa.eCredenciadas + '</td>' +
                '<td>' + empresa.nome + '</td>' +
                '<td>' + empresa.ie + '</td>' +
                '<td>' + empresa.cnpj + '</td>' +
                '<td>' + empresa.telefone + '</td>' +
                '<td>' + empresa.email + '</td>' +
                '<td>' + empresa.cep + '</td>' +
                '<td>' + empresa.rua + '</td>' +
                '<td>' + empresa.numero + '</td>' +
                '<td>' + empresa.complemento + '</td>' +
                '<td>' + empresa.bairro + '</td>' +
                '<td>' + empresa.cidade + '</td>' +
                '<td>' + empresa.estado + '</td>' +
                '<td>' + empresa.observacoes + '</td>' +
                '</tr>';
            tabela.append(row);
        });
    }

    // Chama a função para carregar e exibir os dados ao carregar a página
    carregarcredenciadas();
});
