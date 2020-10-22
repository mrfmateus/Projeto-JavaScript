var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {
	var paciente = pacientes[i];
	var pacientePeso = paciente.querySelector(".info-peso").textContent;
	var pacienteAltura = paciente.querySelector(".info-altura").textContent;
	var pacienteImc = paciente.querySelector(".info-imc");
	var pesoValido = validaPeso(pacientePeso);
	var alturaValida = validaAltura(pacienteAltura);

	if (!pesoValido) {
		pesoValido = false;
		pacienteImc.textContent = "Peso inválido!";
		paciente.classList.add("paciente-invalido");
	}

	if (!alturaValida) {
		alturaValida = false;
		pacienteImc.textContent = "Altura inválida!";
		paciente.classList.add("paciente-invalido");
	}

	if (pesoValido && alturaValida) {
		var imc = calculaImc(pacientePeso, pacienteAltura);
		pacienteImc.textContent = imc;
	}
}

function validaPeso(peso) {
	var retorno = true;

	if (peso <= 0 || peso >= 1000) {
		retorno = false;
	}

	return retorno;
}

function validaAltura(altura) {
	var retorno = true;

	if (altura <= 0 || altura >= 3) {
		retorno = false;
	}

	return retorno;
}

function calculaImc(peso, altura) {
	var imc = 0;
	imc = peso / (altura * altura);

	return imc.toFixed(2);
}