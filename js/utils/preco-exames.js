$(document).on("change", "#nomesExames", function(e) {
    var selectedValues = $(this).val();
    console.log('Valores selecionados:', selectedValues);

    var precos = JSON.parse(sessionStorage.getItem('precos'));

    if (precos) {

        const valoresExames = []
 
        var filteredData = precos.filter(function(preco) {
            return selectedValues.includes(preco.nomesExames);
        });

        var tab = document.getElementById("tabelaExamesSelecionados")
        tab.innerHTML = ''

        filteredData.forEach(e => {
            valoresExames.push(e.valorExame)
            tab.innerHTML += `
                <tr>
                    <td>${e.nomesExames}</td>
                    <td>${e.valorExame}</td>
                <tr>
            `
        });

        var total = valoresExames.reduce(function(acumulador, valorAtual) {
            return parseFloat(acumulador) + parseFloat(valorAtual);
        }, 0);
    
        $("#subtotal_exames").attr("placeholder", `R$ ${total}`)
    } else {
        console.log('Nenhum dado encontrado na tabela precos.');
    }
});