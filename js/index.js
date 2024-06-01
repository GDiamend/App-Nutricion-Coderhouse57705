class Persona {
    constructor(nombre, genero, peso, altura, imc) {
        this.nombre = nombre;
        this.genero = genero;
        this.peso = peso;
        this.altura = altura;
        this.imc = imc;
    };
}

//funciones de orden superior

function mayorQue(numero) {
    return (numeroAComparar) => numeroAComparar > numero;
}

let mayorQueCero = mayorQue(0);

function menorQue(numero) {
    return (numeroAComparar) => numeroAComparar < numero;
}

let menorQueCuatrocientos = menorQue(400);

const obtenerNombre = () => {
    return prompt("Por favor ingrese su nombre");
};

const obtenerGenero = () => {
    do {
        genero = prompt("Por favor ingrese su género. F por Femenino, M por Masculino");
    } while (genero.toUpperCase() != "F" && genero.toUpperCase() != "M");
    return genero;
};

const obtenerPeso = () => {
    do {
        peso = prompt("Por favor ingrese su peso. Debe ser mayor a 0 y menor a 400");
    } while (!mayorQueCero(peso) || !menorQueCuatrocientos(peso));
    return peso;
};

const obtenerAltura = () => {
    do {
        altura = prompt("Por favor ingrese su altura en centimetros. Debe ser mayor a 0 y menor a 400");
    } while (!mayorQueCero(altura) || !menorQueCuatrocientos(altura));
    return altura;
};

const calcularImc = (peso, altura) => {
    altura /= 100;
    return (peso / (altura * altura));
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


const usuario = new Persona(obtenerNombre(), obtenerGenero(), obtenerPeso(), obtenerAltura(), calcularImc(peso, altura));
console.log(usuario);
darResultado(usuario.imc);