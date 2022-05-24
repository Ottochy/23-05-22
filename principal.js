var paciente = document.querySelector('#primeiro-paciente');

var Valorpeso = paciente.querySelector('.info-peso');
var peso = parseInt(Valorpeso.textContent)
console.log(peso);

var Valoraltura = paciente.querySelector('.info-altura');
var altura = parseInt(Valoraltura.textContent)
console.log(altura);

var Valorgordura = paciente.querySelector('.info-gordura');
var gordura = parseInt(Valorgordura.textContent)
console.log(gordura);

var valorIMC = parseInt(peso+altura+gordura)/3;
console.log(valorIMC);

var substituirIMC = paciente.querySelector('.info-imc');
substituirIMC.textContent = valorIMC.toFixed(2)

//

var paciente2 = document.querySelector('#segundo-paciente');

var Valorpeso = paciente2.querySelector('.info-peso2');
var peso = parseInt(Valorpeso.textContent)
console.log(peso);

var Valoraltura = paciente2.querySelector('.info-altura2');
var altura = parseInt(Valoraltura.textContent)
console.log(altura);

var Valorgordura = paciente2.querySelector('.info-gordura2');
var gordura = parseInt(Valorgordura.textContent)
console.log(gordura);

var valorIMC = parseInt(peso+altura+gordura)/3;
console.log(valorIMC);

var substituirIMC = paciente2.querySelector('.info-imc2');
substituirIMC.textContent = valorIMC.toFixed(2)

//

var paciente3 = document.querySelector('#terceiro-paciente');

var Valorpeso = paciente3.querySelector('.info-peso3');
var peso = parseInt(Valorpeso.textContent)
console.log(peso);

var Valoraltura = paciente3.querySelector('.info-altura3');
var altura = parseInt(Valoraltura.textContent)
console.log(altura);

var Valorgordura = paciente3.querySelector('.info-gordura3');
var gordura = parseInt(Valorgordura.textContent)
console.log(gordura);

var valorIMC = parseInt(peso+altura+gordura)/3;
console.log(valorIMC);

var substituirIMC = paciente3.querySelector('.info-imc3');
substituirIMC.textContent = valorIMC.toFixed(2)

//

var paciente4 = document.querySelector('#quarto-paciente');

var Valorpeso = paciente4.querySelector('.info-peso4');
var peso = parseInt(Valorpeso.textContent)
console.log(peso);

var Valoraltura = paciente4.querySelector('.info-altura4');
var altura = parseInt(Valoraltura.textContent)
console.log(altura);

var Valorgordura = paciente4.querySelector('.info-gordura4');
var gordura = parseInt(Valorgordura.textContent)
console.log(gordura);

var valorIMC = parseInt(peso+altura+gordura)/3;
console.log(valorIMC);

var substituirIMC = paciente4.querySelector('.info-imc4');
substituirIMC.textContent = valorIMC.toFixed(2)

//

var paciente5 = document.querySelector('#quinto-paciente');

var Valorpeso = paciente5.querySelector('.info-peso5');
var peso = parseInt(Valorpeso.textContent)
console.log(peso);

var Valoraltura = paciente5.querySelector('.info-altura5');
var altura = parseInt(Valoraltura.textContent)
console.log(altura);

var Valorgordura = paciente5.querySelector('.info-gordura5');
var gordura = parseInt(Valorgordura.textContent)
console.log(gordura);

var valorIMC = parseInt(peso+altura+gordura)/3;
console.log(valorIMC);

var substituirIMC = paciente5.querySelector('.info-imc5');
substituirIMC.textContent = valorIMC.toFixed(2)
