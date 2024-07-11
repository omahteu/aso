$(document).ready(function() {
    $('form').submit(function(event) {
      event.preventDefault();
  
      // Define um array para armazenar os nomes dos campos que queremos capturar
      var campos = [
        'email', // Nome Fantasia
      ];
  
      var empresa = {};
  
      // Itera sobre os campos definidos e captura os valores
      campos.forEach(function(campoId) {
        empresa[campoId] = $('#' + campoId).val();
      });
  
      var email = JSON.parse(sessionStorage.getItem('email')) || [];
      email.push(empresa);
      sessionStorage.setItem('email', JSON.stringify(email));
  
      
  
      alert('Email emissor alterado com sucesso!');

      $('form')[0].reset();
      location.reload();
    });
  });
  