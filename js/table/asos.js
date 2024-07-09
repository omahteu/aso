$(document).ready(function () {
    

    function carregarprecos() {
        var precos = JSON.parse(localStorage.getItem('asos')) || [];
        var tabela = $('#tabelaAsos');
        tabela.empty();

        function formatarCPF(cpf) {
            return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
        }

        precos.forEach(function (empresa, index) {

            var cpf = formatarCPF(empresa.cpf);

            var row = '<tr>' +
                '<td> <input type="checkbox" name="" id=""> </td>' +
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
                '<td>' + empresa.situacao + '</td>' +
                '<td>' + empresa.observacao + '</td>' +
                '<td>' + empresa.pagamento + '</td>' +
                '</tr>';
            tabela.append(row);
        });
    }

    //carregarprecos();

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


    // $('#filtroEmpresa').change(function() {
    //     var empresaSelecionada = $(this).val(); // Captura o valor selecionado
        
    //     // Limpa a tabela antes de inserir novos dados
    //     $('#tabelaAsos').empty();

    //     function formatarCPF(cpf) {
    //         return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    //     }

    //     // Verifica se há algum valor selecionado
    //     if (empresaSelecionada !== '') {
    //         // Recupera os dados do localStorage (supondo que estejam em formato JSON)
    //         var empresas = JSON.parse(localStorage.getItem('asos'));

    //         // Filtra os dados com base na empresa selecionada
    //         var dadosFiltrados = empresas.filter(function(item) {
    //             return item.empresa === empresaSelecionada;
    //         });

    //         // Insere os dados filtrados na tabela
    //         $.each(dadosFiltrados, function(i, item) {
    //             var cpf = formatarCPF(item.cpf);
    //             var newRow = '<tr>' +
    //                             '<td> <input type="checkbox" name="" id=""> </td>' +
    //                             '<td> <input type="checkbox" name="" id=""> </td>' +
    //                             '<td>' + item.unidade + '</td>' +
    //                             '<td>' + item.empresa + '</td>' +
    //                             '<td>' + item.credenciada + '</td>' +
    //                             '<td>' + item.nome + '</td>' +
    //                             '<td>' + item.rg + '</td>' +
    //                             '<td>' + cpf + '</td>' +
    //                             '<td>' + item.nascimento + '</td>' +
    //                             '<td>' + item.sexo + '</td>' +
    //                             '<td>' + item.funcao + '</td>' +
    //                             '<td>' + item.dataExame + '</td>' +
    //                             '<td>' + item.tiposExame + '</td>' +
    //                             '<td>' + item.nomesExames + '</td>' +
    //                             '<td>' + item.situacao + '</td>' +
    //                             '<td>' + item.observacao + '</td>' +
    //                             '<td>' + item.pagamento + '</td>' +
    //                          '</tr>';
    //             $('#tabelaAsos').append(newRow);
    //         });
    //     }
    // });

    // $('#filtroCredenciada').change(function() {
    //     var credenciadaSelecionada = $(this).val(); // Captura o valor selecionado
        
    //     // Limpa a tabela antes de inserir novos dados
    //     $('#tabelaAsos').empty();

    //     function formatarCPF(cpf) {
    //         return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    //     }

    //     // Verifica se há algum valor selecionado
    //     if (credenciadaSelecionada !== '') {
    //         // Recupera os dados do localStorage (supondo que estejam em formato JSON)
    //         var empresas = JSON.parse(localStorage.getItem('asos'));

    //         // Filtra os dados com base na empresa selecionada
    //         var dadosFiltrados = empresas.filter(function(item) {
    //             return item.credenciada === credenciadaSelecionada;
    //         });

    //         // Insere os dados filtrados na tabela
    //         $.each(dadosFiltrados, function(i, item) {
    //             var cpf = formatarCPF(item.cpf);
    //             var newRow = '<tr>' +
    //                             '<td> <input type="checkbox" name="" id=""> </td>' +
    //                             '<td> <input type="checkbox" name="" id=""> </td>' +
    //                             '<td>' + item.unidade + '</td>' +
    //                             '<td>' + item.empresa + '</td>' +
    //                             '<td>' + item.credenciada + '</td>' +
    //                             '<td>' + item.nome + '</td>' +
    //                             '<td>' + item.rg + '</td>' +
    //                             '<td>' + cpf + '</td>' +
    //                             '<td>' + item.nascimento + '</td>' +
    //                             '<td>' + item.sexo + '</td>' +
    //                             '<td>' + item.funcao + '</td>' +
    //                             '<td>' + item.dataExame + '</td>' +
    //                             '<td>' + item.tiposExame + '</td>' +
    //                             '<td>' + item.nomesExames + '</td>' +
    //                             '<td>' + item.situacao + '</td>' +
    //                             '<td>' + item.observacao + '</td>' +
    //                             '<td>' + item.pagamento + '</td>' +
    //                          '</tr>';
    //             $('#tabelaAsos').append(newRow);
    //         });
    //     }
    // });
});
