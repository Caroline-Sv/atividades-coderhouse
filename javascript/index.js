
function obterDadosUsuario() {
    const peso = parseFloat(prompt("Digite seu peso em quilogramas:"));
    let alturaInput = prompt("Digite sua altura em metros (use vírgula para decimais):");
    alturaInput = alturaInput.replace(",", ".");
    const altura = parseFloat(alturaInput);
    return { peso, altura };
}

function calcularIMC(peso, altura) {
    return peso / (altura * altura);
}

function determinarEstadoPeso(imc) {
    if (imc < 18.5) {
        return "Abaixo do peso";
    } else if (imc >= 18.5 && imc <= 24.9) {
        return "Peso normal";
    } else if (imc >= 25 && imc <= 29.9) {
        return "Sobrepeso";
    } else {
        return "Obesidade";
    }
}

function calcularIMCUsuario() {
    const { peso, altura } = obterDadosUsuario();
    const imc = calcularIMC(peso, altura);
    const estadoPeso = determinarEstadoPeso(imc);
    console.log(`Seu IMC é ${imc.toFixed(2)} e você está classificado como: ${estadoPeso}`);
}

calcularIMCUsuario();