var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function (event) {
  event.preventDefault();

  // pega dados do paciente
  var formNovoPaciente = document.querySelector("#form-novo-paciente");
  var paciente = obtemDadosPaciente(formNovoPaciente);

  // cria linha html do paciente
  var linhaPaciente = criaLinhaPaciente();

  // adiciona paciente na tabela			
  var tabelaPacientes = document.querySelector("#tabela-pacientes");
  tabelaPacientes.appendChild(linhaPaciente);
  linhaPaciente.appendChild(criaColunaPaciente(paciente.nome, "info-nome"));
  linhaPaciente.appendChild(criaColunaPaciente(paciente.peso, "info-peso"));
  linhaPaciente.appendChild(criaColunaPaciente(paciente.altura, "info-altura"));
  linhaPaciente.appendChild(criaColunaPaciente(paciente.gordura, "info-gordura"));
  linhaPaciente.appendChild(criaColunaPaciente(paciente.imc, "info-imc"));
  // fim - adiciona paciente na tabela

  formNovoPaciente.reset();
});

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

function criaLinhaPaciente() {
  var linhaPaciente = document.createElement("tr");
  linhaPaciente.classList.add("paciente");

  return linhaPaciente;
}

function criaColunaPaciente(valor, classe) {
  var colunaPaciente = document.createElement("td");
  colunaPaciente.classList.add(classe);
  colunaPaciente.textContent = valor;

  return colunaPaciente;
}