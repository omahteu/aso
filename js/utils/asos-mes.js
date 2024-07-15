$(document).ready(function() {
    let asos = JSON.parse(localStorage.getItem("asos"))
    $("#asos-mes").text(asos.length)
})
