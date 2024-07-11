$(document).ready(function() {
    let asos = JSON.parse(sessionStorage.getItem("asos"))
    $("#asos-mes").text(asos.length)
})
