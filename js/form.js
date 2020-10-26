var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function (event) {
  event.preventDefault();

  // pega dados do paciente
  var formNovoPaciente = document.querySelector("#form-novo-paciente");
  var paciente = obtemDadosPaciente(formNovoPaciente);

  var erros = validaPaciente(paciente);

  if (erros.length > 0) {
    exibeMensagensErro(erros);
    return;
  }

  adicionaPacienteNaTabela(paciente);

  formNovoPaciente.reset();
  var listaErros = document.querySelector("#mensagens-erro");
  listaErros.innerHTML = "";
});

function adicionaPacienteNaTabela(paciente) {
  // cria linha html do paciente
  var linhaPaciente = criaLinhaPaciente(paciente);
  var tabelaPacientes = document.querySelector("#tabela-pacientes");
  tabelaPacientes.appendChild(linhaPaciente);
}

function obtemDadosPaciente(form) {
  var paciente = {
    nome: form.nome.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calculaImc(form.peso.value, form.altura.value)
  }

  return paciente;
}

function validaPaciente(paciente) {
  var erros = [];

  if (paciente.nome.length <= 0) {
    erros.push("Nome não pode ser vazio!");
  }

  if (paciente.peso.length <= 0) {
    erros.push("Peso não pode ser vazio!");
  }

  if (paciente.altura.length <= 0) {
    erros.push("Altura não pode ser vazio!");
  }

  if (paciente.gordura.length <= 0) {
    erros.push("Gordura não pode ser vazio!");
  }

  if (!validaPeso(paciente.peso)) {
    erros.push("Peso inválido!");
  }

  if (!validaAltura(paciente.altura)) {
    erros.push("Altura inválida!");
  }

  return erros;
}

function criaLinhaPaciente(paciente) {
  var linhaPaciente = document.createElement("tr");
  linhaPaciente.classList.add("paciente");
  linhaPaciente.appendChild(criaColunaPaciente(paciente.nome, "info-nome"));
  linhaPaciente.appendChild(criaColunaPaciente(paciente.peso, "info-peso"));
  linhaPaciente.appendChild(criaColunaPaciente(paciente.altura, "info-altura"));
  linhaPaciente.appendChild(criaColunaPaciente(paciente.gordura, "info-gordura"));
  linhaPaciente.appendChild(criaColunaPaciente(paciente.imc, "info-imc"));
  return linhaPaciente;
}

function criaColunaPaciente(valor, classe) {
  var colunaPaciente = document.createElement("td");
  colunaPaciente.classList.add(classe);
  colunaPaciente.textContent = valor;

  return colunaPaciente;
}

function exibeMensagensErro(erros) {
  var listaErros = document.querySelector("#mensagens-erro");
  listaErros.innerHTML = "";

  erros.forEach(function (erro) {
    var itemErro = document.createElement("li");
    itemErro.textContent = erro;

    listaErros.appendChild(itemErro);
  });
}