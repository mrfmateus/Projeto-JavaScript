var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {
	var paciente = pacientes[i];
	var pacientePeso = paciente.querySelector(".info-peso").textContent;
	var pacienteAltura = paciente.querySelector(".info-altura").textContent;
	var pacienteImc = paciente.querySelector(".info-imc");
	var pesoValido = true;
	var alturaValida = true;

	if (pacientePeso <= 0 || pacientePeso >= 1000) {
		pesoValido = false;
		pacienteImc.textContent = "Peso inválido!";
		paciente.classList.add("paciente-invalido");
	}

	if (pacienteAltura <= 0 || pacienteAltura >= 3) {
		alturaValida = false;
		pacienteImc.textContent = "Altura inválida!";
		paciente.classList.add("paciente-invalido");
	}

	if (pesoValido && alturaValida) {
		var imc = pacientePeso / (pacienteAltura * pacienteAltura);
		pacienteImc.textContent = imc.toFixed(2);
	}
}