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
    var asos = JSON.parse(localStorage.getItem('asos')) || [];
    var tabprecos = JSON.parse(localStorage.getItem('precos')) || [];

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

        console.log(item)
        if (valores.empresa && item.empresa !== valores.empresa) {
            corresponde = false;
        }
        if (valores.credenciada && item.credenciada !== valores.credenciada) {
            corresponde = false;
        }
        
        if (moment(valores.inicio).isBefore(moment(item.dataExame))) {
            corresponde = true;
        }

        if (moment(valores.final).isAfter(moment(item.dataExame))) {
            corresponde = true;
        }
        
        return corresponde;
    });
    
    $('#tabelaAsos').empty();

    function formatarCPF(cpf) {
        return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    }
    
    filtrados.forEach(function(item) {
        let nomesExames = item.nomesExames;
        let todosExamesFiltrados = [];

        nomesExames.forEach(nomeExame => {
            let examesFiltrados = tabprecos.filter(preco => preco.nomesExames === nomeExame);
            todosExamesFiltrados.push(...examesFiltrados);
        });

        var cpf = formatarCPF(item.cpf);
        var row = '<tr>' +
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
                    '<td>' + (todosExamesFiltrados[0] ? todosExamesFiltrados[0].valorExame : '') + '</td>' +
                    '<td>' + item.observacao + '</td>' +
            '</tr>';
        $('#tabelaAsos').append(row);
    });
}

// $(document).on("change", "#filtroEmpresa, #filtroCredenciada", function() {
//     atualizarTabela();
// });

// $(document).on("change", "#dataInicio", function() {
//     atualizarTabela();
// })

// $(document).on("change", "#dataFinal", function() {
//     atualizarTabela();
// })

$(document).on("click", "#search_params", function() {
    atualizarTabela()
})

$(document).on("click", "#repeat", function() {
    location.reload()
})