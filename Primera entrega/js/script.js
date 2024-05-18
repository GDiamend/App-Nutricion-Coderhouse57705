let nombre;
let genero;
let peso;
let altura;
let imc;

const obtenerNombre = () => {
    nombre = prompt("Por favor ingrese su nombre");
};

const obtenerGenero = () => {
    do {
        genero = prompt("Por favor ingrese su género. F por Femenino, M por Masculino");
    } while (genero.toUpperCase() != "F" && genero.toUpperCase() != "M");
};

const obtenerPeso = () => {
    do {
        peso = prompt("Por favor ingrese su peso. Debe ser mayor a 0");
    } while (peso <= 0);
};

const obtenerAltura = () => {
    do {
        altura = prompt("Por favor ingrese su altura. Debe ser mayor a 0");
    } while (altura <= 0);
};

const calcularImc = (peso, altura) => {
    altura /= 100;
    imc = (peso / (altura * altura));
};

const darResultado = (imc) => {
    if (imc < 18.5) {
        alert(nombre + ", usted está por debajo de su peso normal");
    } else if (imc >= 18.5 && imc < 24.9) {
        alert(nombre + ", usted está en su peso normal");
    } else if (imc >= 25 && imc < 29.9) {
        alert(nombre + ", usted está en sobrepeso");
    } else {
        alert(nombre + ", usted padece obesidad");
    }
};

obtenerNombre();
obtenerGenero();
obtenerPeso();
obtenerAltura();
calcularImc(peso, altura);
darResultado(imc);