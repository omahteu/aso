$(document).ready(function() {
    let asos = JSON.parse(localStorage.getItem("asos"))
    $("#asos-mes").text(asos.length)

    carregarprecos()
})

function carregarprecos() {
    var precos = JSON.parse(localStorage.getItem('asos')) || [];
    var tabprecos = JSON.parse(localStorage.getItem('precos')) || [];

    let todosExamesFiltrados = [];
 

    precos.forEach(function (empresa, index) {

        let nomesExames = empresa.nomesExames;

        

        
        nomesExames.forEach(nomeExame => {
            let examesFiltrados = tabprecos.filter(preco => preco.nomesExames === nomeExame);
            todosExamesFiltrados.push(examesFiltrados[0].valorExame);
        });

       

        
    });

    var somaTotal = 0;

    $.each(todosExamesFiltrados, function(index, value) {
        // Certifique-se de que o valor é um número antes de adicionar
        if (!isNaN(value)) {
            somaTotal += parseFloat(value);
        }
    });

    $("#total_asos_mes").text(somaTotal)

}