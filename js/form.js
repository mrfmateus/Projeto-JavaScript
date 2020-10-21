var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function (event) {
  event.preventDefault();

  // pega dados do paciente
  var formNovoPaciente = document.querySelector("#form-novo-paciente");
  var pacienteNome = formNovoPaciente.nome.value;
  var pacientePeso = formNovoPaciente.peso.value;
  var pacienteAltura = formNovoPaciente.altura.value;
  var pacienteGordura = formNovoPaciente.gordura.value;
  // fim - pega dados do paciente

  // cria elementos html
  var linhaPaciente = document.createElement("tr");
  var colunaPacienteNome = document.createElement("td");
  var colunaPacientePeso = document.createElement("td");
  var colunaPacienteAltura = document.createElement("td");
  var colunaPacienteGordura = document.createElement("td");
  var colunaPacienteImc = document.createElement("td");

  colunaPacienteNome.textContent = pacienteNome;
  colunaPacientePeso.textContent = pacientePeso;
  colunaPacienteAltura.textContent = pacienteAltura;
  colunaPacienteGordura.textContent = pacienteGordura;
  colunaPacienteImc.textContent = calculaImc(pacientePeso, pacienteAltura);
  // fim - cria elementos html

  // adiciona paciente na tabela			
  var tabelaPacientes = document.querySelector("#tabela-pacientes");
  tabelaPacientes.appendChild(linhaPaciente);
  linhaPaciente.appendChild(colunaPacienteNome);
  linhaPaciente.appendChild(colunaPacientePeso);
  linhaPaciente.appendChild(colunaPacienteAltura);
  linhaPaciente.appendChild(colunaPacienteGordura);
  linhaPaciente.appendChild(colunaPacienteImc);
  // fim - adiciona paciente na tabela
});