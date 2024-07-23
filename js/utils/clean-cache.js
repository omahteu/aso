document.addEventListener("DOMContentLoaded", function() {
    const alreadyClearedKey = "localStorageCleared";

    // Verifica se o localStorage já foi limpo
    if (!localStorage.getItem(alreadyClearedKey)) {
        // Limpa todos os dados do localStorage
        localStorage.clear();

        // Define a chave indicando que o localStorage foi limpo
        localStorage.setItem(alreadyClearedKey, "true");
    }
});
