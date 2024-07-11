
function atualizarTabela() {
    const valores = {
        empresa: '',
        credenciada: '',
        inicio: '',
        final: ''
    }

    var empresa = $('#filtroEmpresa').val();
    var credenciada = $('#filtroCredenciada').val();
    var inicio = $('#dataInicio').val();
    var final = $('#dataFinal').val();
    
    var asos = JSON.parse(sessionStorage.getItem('asos')) || [];

    if (empresa) {
        valores.empresa = empresa;
    }
    
    if (credenciada) {
        valores.credenciada = credenciada;
    }
    
    if (inicio) {
        valores.inicio = inicio;
    }
    
    if (final) {
        valores.final = final;
    }


    var filtrados = asos.filter(function(item) {

        var corresponde = true;
        if (valores.empresa && item.empresa !== valores.empresa) {
            corresponde = false;
        }
        if (valores.credenciada && item.credenciada !== valores.credenciada) {
            corresponde = false;
        }
        if (valores.inicio && item.inicio !== valores.inicio) {
            corresponde = false;
        }
        if (valores.final && item.final !== valores.final) {
            corresponde = false;
        }
        return corresponde;
    });
    
    
    
    // Limpando a tabela
    $('#tabelaAsos').empty();

    function formatarCPF(cpf) {
        return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    }
    
    // Iterando sobre os dados filtrados e exibindo na tabela
    filtrados.forEach(function(item) {
        var cpf = formatarCPF(item.cpf);
        var row = '<tr>' +
                    '<td> <input type="checkbox" name="" id=""> </td>' +
                    '<td> <input type="checkbox" name="" id=""> </td>' +
                    '<td>' + item.unidade + '</td>' +
                    '<td>' + item.empresa + '</td>' +
                    '<td>' + item.credenciada + '</td>' +
                    '<td>' + item.nome + '</td>' +
                    '<td>' + item.rg + '</td>' +
                    '<td>' + cpf + '</td>' +
                    '<td>' + item.nascimento + '</td>' +
                    '<td>' + item.sexo + '</td>' +
                    '<td>' + item.funcao + '</td>' +
                    '<td>' + item.dataExame + '</td>' +
                    '<td>' + item.tiposExame + '</td>' +
                    '<td>' + item.nomesExames + '</td>' +
                    '<td>' + item.situacao + '</td>' +
                    '<td>' + item.observacao + '</td>' +
                    '<td>' + item.pagamento + '</td>' +
            '</tr>';
        $('#tabelaAsos').append(row);
    });
}



$(document).on("change", "#filtroEmpresa, #filtroCredenciada, #dataInicio, #dataFinal", function() {
    
    atualizarTabela()
})
