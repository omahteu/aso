$(document).ready(function () {
    

    function carregarprecos() {
        var precos = JSON.parse(localStorage.getItem('asos')) || [];
        var tabprecos = JSON.parse(localStorage.getItem('precos')) || [];
        var tabela = $('#tabelaAsos');
        tabela.empty();

        function formatarCPF(cpf) {
            return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
        }

        precos.forEach(function (empresa, index) {

            let nomesExames = empresa.nomesExames;

            let todosExamesFiltrados = [];

           
            nomesExames.forEach(nomeExame => {
                let examesFiltrados = tabprecos.filter(preco => preco.nomesExames === nomeExame);
                // Adicionar os exames filtrados ao array principal
                todosExamesFiltrados.push(...examesFiltrados);
            });

            console.log(todosExamesFiltrados);
            var cpf = formatarCPF(empresa.cpf);

            var row = '<tr>' +
                '<td> <input type="checkbox" name="" id=""> </td>' +
                '<td>' + empresa.unidade + '</td>' +
                '<td>' + empresa.empresa + '</td>' +
                '<td>' + empresa.credenciada + '</td>' +
                '<td>' + empresa.nome + '</td>' +
                '<td>' + empresa.rg + '</td>' +
                '<td>' + cpf + '</td>' +
                '<td>' + empresa.nascimento + '</td>' +
                '<td>' + empresa.sexo + '</td>' +
                '<td>' + empresa.funcao + '</td>' +
                '<td>' + empresa.dataExame + '</td>' +
                '<td>' + empresa.tiposExame + '</td>' +
                '<td>' + empresa.nomesExames + '</td>' +
                '<td>' + todosExamesFiltrados[0].valorExame + '</td>' +
                '<td>' + empresa.observacao + '</td>' +
                '</tr>';
            tabela.append(row);
        });
    }

    carregarprecos();

    function carregarNomesFantasia() {
        var empresas = JSON.parse(localStorage.getItem('empresas')) || [];
        var select = $('#filtroEmpresa');
        select.empty();
        select.append('<option hidden>Selecione uma empresa...</option>');
        empresas.forEach(function (empresa) {
            select.append('<option value="' + empresa.nomeFantasia + '">' + empresa.nomeFantasia + '</option>');
        });
    }

    carregarNomesFantasia();

    function carregarCredenciadas() {
        var empresas = JSON.parse(localStorage.getItem('credenciadas')) || [];
        var select = $('#filtroCredenciada');
        select.empty();
        select.append('<option value="" hidden>Selecione uma empresa credenciada...</option>');
        empresas.forEach(function (empresa) {
            select.append('<option value="' + empresa.nome + '">' + empresa.nome + '</option>');
        });
    }

    carregarCredenciadas();

});
