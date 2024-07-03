$(document).ready(function () {

    function carregarUnidades() {
        // Obtém os dados da localStorage
        var empresas = JSON.parse(localStorage.getItem('unidades')) || [];

        // Seleciona o select onde os nomes fantasia serão exibidos
        var select = $('#unidade');

        // Limpa as opções atuais do select
        select.empty();

        // Adiciona uma opção padrão
        select.append('<option hidden>Selecione uma empresa...</option>');

        // Itera sobre os dados das empresas e adiciona os nomes fantasia ao select
        empresas.forEach(function (empresa) {
            select.append('<option value="' + empresa.nome + '">' + empresa.nome + '</option>');
        });
    }

    carregarUnidades()

    function carregarNomesFantasia() {
        // Obtém os dados da localStorage
        var empresas = JSON.parse(localStorage.getItem('empresas')) || [];

        // Seleciona o select onde os nomes fantasia serão exibidos
        var select = $('#empresa');

        // Limpa as opções atuais do select
        select.empty();

        // Adiciona uma opção padrão
        select.append('<option hidden>Selecione uma empresa...</option>');

        // Itera sobre os dados das empresas e adiciona os nomes fantasia ao select
        empresas.forEach(function (empresa) {
            select.append('<option value="' + empresa.nomeFantasia + '">' + empresa.nomeFantasia + '</option>');
        });
    }

    carregarNomesFantasia();

    function carregarNomesCredenciadas() {
        // Obtém os dados da localStorage
        var empresas = JSON.parse(localStorage.getItem('credenciadas')) || [];

        // Seleciona o select onde os nomes fantasia serão exibidos
        var select = $('#credenciada');

        // Limpa as opções atuais do select
        select.empty();

        // Adiciona uma opção padrão
        select.append('<option hidden>Selecione uma empresa...</option>');

        // Itera sobre os dados das empresas e adiciona os nomes fantasia ao select
        empresas.forEach(function (empresa) {
            select.append('<option value="' + empresa.nome + '">' + empresa.nome + '</option>');
        });
    }

    carregarNomesCredenciadas();

    function carregarTiposExames() {
        // Obtém os dados da localStorage
        var empresas = JSON.parse(localStorage.getItem('tipos')) || [];

        // Seleciona o select onde os nomes fantasia serão exibidos
        var select = $('#tiposExame');

        // Limpa as opções atuais do select
        select.empty();

        // Adiciona uma opção padrão
        select.append('<option hidden>Selecione uma empresa...</option>');

        // Itera sobre os dados das empresas e adiciona os nomes fantasia ao select
        empresas.forEach(function (empresa) {
            select.append('<option value="' + empresa.nome + '">' + empresa.nome + '</option>');
        });
    }

    carregarTiposExames()

    function carregarNomesExames() {
        // Obtém os dados da localStorage
        var empresas = JSON.parse(localStorage.getItem('nomes')) || [];

        // Seleciona o select onde os nomes fantasia serão exibidos
        var select = $('#nomesExames');

        // Limpa as opções atuais do select
        select.empty();

        // Adiciona uma opção padrão
        select.append('<option hidden>Selecione uma empresa...</option>');

        // Itera sobre os dados das empresas e adiciona os nomes fantasia ao select
        empresas.forEach(function (empresa) {
            select.append('<option value="' + empresa.nome + '">' + empresa.nome + '</option>');
        });
    }

    carregarNomesExames()

    function carregarNomesFuncoes() {
        // Obtém os dados da localStorage
        var empresas = JSON.parse(localStorage.getItem('funcoes')) || [];

        // Seleciona o select onde os nomes fantasia serão exibidos
        var select = $('#funcao');

        // Limpa as opções atuais do select
        select.empty();

        // Adiciona uma opção padrão
        select.append('<option hidden>Selecione...</option>');

        // Itera sobre os dados das empresas e adiciona os nomes fantasia ao select
        empresas.forEach(function (empresa) {
            select.append('<option value="' + empresa.nome + '">' + empresa.nome + '</option>');
        });
    }

    carregarNomesFuncoes()

    $('form').submit(function (event) {
        event.preventDefault();

        // Define um array para armazenar os nomes dos campos que queremos capturar
        var campos = [
            'unidade',
            'empresa',
            'credenciada',
            'nome',
            'rg',
            'cpf',
            'nascimento',
            'sexo',
            'funcao',
            'dataExame',
            'tiposExame', // Inscrição Estadual
            'nomesExames', // CNPJ
            'situacao',
            'observacao'
        ];

        var empresa = {};

        // Itera sobre os campos definidos e captura os valores
        campos.forEach(function (campoId) {
            empresa[campoId] = $('#' + campoId).val();
        });

        var asos = JSON.parse(localStorage.getItem('asos')) || [];
        asos.push(empresa);
        localStorage.setItem('asos', JSON.stringify(asos));



        alert('ASO criado com sucesso!');

        this.reset();
        //location.reload();
        window.open("../../pages/forms/opcoes.html", "_blank");
    });
});

$(document).ready(function() {
    // Exemplo de opções (pode ser populado dinamicamente)
    var tiposExameOptions = [
      { value: 'opcao1', text: 'Opção 1' },
      { value: 'opcao2', text: 'Opção 2' },
      { value: 'opcao3', text: 'Opção 3' },
      { value: 'opcao4', text: 'Opção 4' }
    ];
  
    // Popular as opções no select usando Select2
    $('#tiposExame').select2({
      data: tiposExameOptions,
      placeholder: 'Selecione os tipos de exame',
      allowClear: true // Adiciona a opção de limpar seleção
    });
  
    // Capturar os itens selecionados quando o formulário for submetido
    $('#seuFormulario').submit(function(event) {
      event.preventDefault(); // Previne o envio padrão do formulário para exemplo aqui
  
      var selectedValues = $('#tiposExame').val();
      console.log('Itens selecionados:', selectedValues);
      
      // Aqui você pode fazer o que quiser com os valores selecionados
  
      // Exemplo de envio via AJAX
      /*
      $.ajax({
        url: 'seu_endpoint_de_processamento',
        method: 'POST',
        data: { tiposExame: selectedValues },
        success: function(response) {
          console.log('Resposta do servidor:', response);
        },
        error: function(error) {
          console.error('Erro ao enviar dados:', error);
        }
      });
      */
    });
  });