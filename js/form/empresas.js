$(document).ready(function () {

  function carregarUnidades() {
    // Obtém os dados da localStorage
    var empresas = JSON.parse(localStorage.getItem('unidades')) || [];

    // Seleciona o select onde os nomes fantasia serão exibidos
    var select = $('#unidades');

    // Limpa as opções atuais do select
    select.empty();

    // Adiciona uma opção padrão
    select.append('<option hidden>Selecione uma unidade...</option>');

    // Itera sobre os dados das empresas e adiciona os nomes fantasia ao select
    empresas.forEach(function (empresa) {
      select.append('<option value="' + empresa.nome + '">' + empresa.nome + '</option>');
    });
  }

  // Chama a função para carregar e exibir os nomes fantasia ao carregar a página
  carregarUnidades();


  $('form').submit(function (event) {
    event.preventDefault();

    // Define um array para armazenar os nomes dos campos que queremos capturar
    var campos = [
      'unidades',
      'nomeFantasia', // Nome Fantasia
      'ie', // Inscrição Estadual
      'matricula',
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
    campos.forEach(function (campoId) {
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
