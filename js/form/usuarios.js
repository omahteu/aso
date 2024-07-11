$(document).ready(function() {
    $('form').submit(function(event) {
      event.preventDefault();
  
      // Define um array para armazenar os nomes dos campos que queremos capturar
      var campos = [
        'nome', // Nome Fantasia
        'email', // Inscrição Estadual
        'senha', // CNPJ
        'perfil', // CEP
      ];
  
      var empresa = {};
  
      // Itera sobre os campos definidos e captura os valores
      campos.forEach(function(campoId) {
        empresa[campoId] = $('#' + campoId).val();
      });
  
      var usuarios = JSON.parse(sessionStorage.getItem('usuarios')) || [];
      usuarios.push(empresa);
      sessionStorage.setItem('usuarios', JSON.stringify(usuarios));
  
      
  
      alert('Usuário salvo com sucesso!');

      $('form')[0].reset();
      location.reload();
    });
  });
  