$(document).ready(function() {
    $('form').submit(function(event) {
      event.preventDefault();
  
      // Define um array para armazenar os nomes dos campos que queremos capturar
      var campos = [
        'nome', // Nome Fantasia
      ];
  
      var empresa = {};
  
      // Itera sobre os campos definidos e captura os valores
      campos.forEach(function(campoId) {
        empresa[campoId] = $('#' + campoId).val();
      });
  
      var funcoes = JSON.parse(sessionStorage.getItem('funcoes')) || [];
      funcoes.push(empresa);
      sessionStorage.setItem('funcoes', JSON.stringify(funcoes));
  
      
  
      alert('Função salva com sucesso!');

      $('form')[0].reset();
      location.reload();
    });
  });
  