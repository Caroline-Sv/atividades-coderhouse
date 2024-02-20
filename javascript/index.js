let nome = prompt('Insira seu nome aqui:');
let sobrenome = 'Silva';
let anoAtual = 2024;
let idadeFinal = 26;

const nomeCompleto = `${nome} ${sobrenome}`;
const anoNascimento = anoAtual - idadeFinal;

console.log(`Nome completo: ${nomeCompleto}`);
console.log(`Ano de nascimento: ${anoNascimento}`);

let numero1 = prompt('Insira o número 1:');
let numero2 = prompt('Insira o número 2:');

console.log(`A soma dos números é: ${parseInt(numero1) + parseInt(numero2)}`);
alert(`O produto dos números é: ${parseInt(numero1) * parseInt(numero2)}`);