$(document).ready(function() {
    $('form').submit(function(event) {
      event.preventDefault();
  
      // Define um array para armazenar os nomes dos campos que queremos capturar
      var campos = [
        'nomeFantasia', // Nome Fantasia
        'ie', // Inscrição Estadual
        'cnpj', // CNPJ
        'telefone', // Telefone
        'cep', // CEP
        'rua', // Rua
        'numero', // Número
        'complemento', // Complemento
        'bairro', // Bairro
        'cidade', // Cidade
        'estado' // Estado
      ];
  
      var empresa = {};
  
      // Itera sobre os campos definidos e captura os valores
      campos.forEach(function(campoId) {
        empresa[campoId] = $('#' + campoId).val();
      });
  
      var empresas = JSON.parse(localStorage.getItem('empresas')) || [];
      empresas.push(empresa);
      localStorage.setItem('empresas', JSON.stringify(empresas));
  
      
  
      alert('Empresa salva com sucesso!');

      $('form')[0].reset();
      location.reload();
    });
  });
  