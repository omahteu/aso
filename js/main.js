$(document).on("click", "#nomeExame", function() {
    $(".vencimento").removeAttr('hidden');
})

$(document).on("click", "#tipoExame", function() {
    $(".vencimento").prop('hidden', true);
})