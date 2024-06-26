$(document).ready(function() {
    $('form').submit(function(event) {
      event.preventDefault();
  
      // Define um array para armazenar os nomes dos campos que queremos capturar
      var campos = [
        'nome', // Nome Fantasia
        'cidade', // Inscrição Estadual
        'estado', // CNPJ
        'email', // Telefone
      ];
  
      var empresa = {};
  
      // Itera sobre os campos definidos e captura os valores
      campos.forEach(function(campoId) {
        empresa[campoId] = $('#' + campoId).val();
      });
  
      var unidades = JSON.parse(localStorage.getItem('unidades')) || [];
      unidades.push(empresa);
      localStorage.setItem('unidades', JSON.stringify(unidades));
  
      
  
      alert('Unidade salva com sucesso!');

      $('form')[0].reset();
      location.reload();
    });
  });
  