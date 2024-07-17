$(document).ready(function () {
    

    function carregarprecos() {
        var precos = JSON.parse(localStorage.getItem('asos')) || [];
        var tabprecos = JSON.parse(localStorage.getItem('precos')) || [];
        var tabela = $('#resumo_asos');
        tabela.empty();

        function formatarCPF(cpf) {
            return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
        }

        precos.forEach(function (empresa, index) {

            let nomesExames = empresa.nomesExames;

            let todosExamesFiltrados = [];

           
            nomesExames.forEach(nomeExame => {
                let examesFiltrados = tabprecos.filter(preco => preco.nomesExames === nomeExame);
                todosExamesFiltrados.push(...examesFiltrados);
            });

            var cpf = formatarCPF(empresa.cpf);

            var row = '<tr>' +
                '<td>' + empresa.nome + '</td>' +
                '<td>' + empresa.nomesExames + '</td>' +
                '<td>' + todosExamesFiltrados[0].valorExame + '</td>' +
                '</tr>';
            tabela.append(row);
        });
    }

    carregarprecos();


});
