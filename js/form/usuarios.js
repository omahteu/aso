$(document).ready(function() {
    $('form').submit(function(event) {
      event.preventDefault();
  
      // Define um array para armazenar os nomes dos campos que queremos capturar
      var campos = [
        'nome', // Nome Fantasia
        'email', // Inscrição Estadual
        'senha', // CNPJ
        'funcao', // Telefone
        'perfil', // CEP
      ];
  
      var empresa = {};
  
      // Itera sobre os campos definidos e captura os valores
      campos.forEach(function(campoId) {
        empresa[campoId] = $('#' + campoId).val();
      });
  
      var usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
      usuarios.push(empresa);
      localStorage.setItem('usuarios', JSON.stringify(usuarios));
  
      
  
      alert('Usuário salvo com sucesso!');

      $('form')[0].reset();
      location.reload();
    });
  });
  