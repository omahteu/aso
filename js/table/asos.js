$(document).ready(function () {

    function carregarprecos() {
        var precos = JSON.parse(localStorage.getItem('asos')) || [];
        var tabela = $('#tabelaAsos');
        tabela.empty();
        precos.forEach(function (empresa, index) {
            var row = '<tr>' +
                '<td>' + empresa.unidade + '</td>' +
                '<td>' + empresa.empresa + '</td>' +
                '<td>' + empresa.credenciada + '</td>' +
                '<td>' + empresa.nome + '</td>' +
                '<td>' + empresa.rg + '</td>' +
                '<td>' + empresa.cpf + '</td>' +
                '<td>' + empresa.nascimento + '</td>' +
                '<td>' + empresa.sexo + '</td>' +
                '<td>' + empresa.funcao + '</td>' +
                '<td>' + empresa.dataExame + '</td>' +
                '<td>' + empresa.tiposExame + '</td>' +
                '<td>' + empresa.nomesExames + '</td>' +
                '<td>' + empresa.situacao + '</td>' +
                '<td>' + empresa.observacao + '</td>' +
                '<td>' + empresa.pagamento + '</td>' +
                '</tr>';
            tabela.append(row);
        });
    }

    carregarprecos();
});
