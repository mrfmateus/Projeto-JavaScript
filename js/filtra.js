var filtroNome = document.querySelector("#filtra");
filtroNome.addEventListener("input", function (event) {
  var pacientes = document.querySelectorAll(".paciente");
  pacientes.forEach(function (paciente) {
    var colPacienteNome = paciente.querySelector(".info-nome");
    var pacienteNome = colPacienteNome.textContent;
    var regexPacienteNome = new RegExp(event.target.value, "i");

    if (regexPacienteNome.test(pacienteNome)) {
      paciente.classList.remove("invisivel");
    } else {
      paciente.classList.add("invisivel");
    }

    // if ((event.target.value == pacienteNome) || (event.target.value.length <= 0)) {
    //   paciente.classList.remove("invisivel");
    // } else {
    //   paciente.classList.add("invisivel");
    // }
  });
});