//Capturo el body
const body = document.body;

//Creo el header y lo agrego al body
const headerTest = document.createElement('header');
body.appendChild(headerTest);

//Creo el main y lo agrego al body
const mainTest = document.createElement('main');
body.appendChild(mainTest);

//Creo un div, un h1; le agrego contenido y los anido al main
const divH1Test = document.createElement('div');
const h1Test = document.createElement('h1');
h1Test.innerText = "Calcula tu IMC Gratis: Averigua tu Índice de Masa Corporal Ahora";
mainTest.appendChild(divH1Test);
divH1Test.appendChild(h1Test);

//Creo el div del formulario para el cálculo del IMC y lo anido al main
const divFormTest = document.createElement('div');
mainTest.appendChild(divFormTest);

//Creo un div, un h2; le agrego contenido y los anido al div del form
const divH2Test = document.createElement('div');
const h2FormTest = document.createElement('h2');
h2FormTest.innerText = "Introduce tus datos al formulario de cálculo de IMC";
divFormTest.appendChild(divH2Test);
divH2Test.appendChild(h2FormTest);

//Creo un div con un form y le agrego los input necesarios con sus correspondientes label
//cada uno dentro de un div
const divInputTest = document.createElement('div');
const formTest = document.createElement('form');

const divNombreTest = document.createElement('div');
const labelNombreTest = document.createElement('label');
const inputNombreTest = document.createElement('input');

const divPesoTest = document.createElement('div');
const labelPesoTest = document.createElement('label');
const inputPesoTest = document.createElement('input');

const divAlturaTest = document.createElement('div');
const labelAlturaTest = document.createElement('label');
const inputAlturaTest = document.createElement('input');

//Anido
divFormTest.appendChild(divInputTest);
divInputTest.appendChild(formTest);

formTest.appendChild(divNombreTest);
divNombreTest.appendChild(labelNombreTest);
divNombreTest.appendChild(inputNombreTest);

formTest.appendChild(divPesoTest);
divPesoTest.appendChild(labelPesoTest);
divPesoTest.appendChild(inputPesoTest);

formTest.appendChild(divAlturaTest);
divAlturaTest.appendChild(labelAlturaTest);
divAlturaTest.appendChild(inputAlturaTest); z

//Le asigno un type y un id a los input
inputNombreTest.type = 'text';
inputNombreTest.id = 'inputNombreTest';
inputPesoTest.type = 'number';
inputPesoTest.id = 'inputPesoTest';
inputAlturaTest.type = 'number';
inputAlturaTest.id = 'inputAlturaTest';

//Le asigno contenido a los label y los asocio a los input
labelNombreTest.htmlFor = 'inputNombreTest';
labelNombreTest.innerText = 'Ingrese su nombre: ';
labelPesoTest.htmlFor = 'inputPesoTest';
labelPesoTest.innerText = 'Ingrese su peso en kilos: ';
labelAlturaTest.htmlFor = 'inputAlturaTest';
labelAlturaTest.innerText = 'Ingrese su altura en centimetros: ';

//Creo el botón submit con su div correspondiente y lo anido
const divSubmitTest = document.createElement('div');
const submitFormTest = document.createElement('input');
submitFormTest.type = 'submit';
submitFormTest.value = 'Calcular';
divFormTest.appendChild(divSubmitTest);
divSubmitTest.appendChild(submitFormTest);

//Creo la clase Persona
class Persona {
    constructor(nombre, peso, altura, imc) {
        this.nombre = nombre;
        this.peso = peso;
        this.altura = altura;
        this.imc = imc;
    };

    mostrarResultado() {
        if (this.imc < 18.5) {
            console.log(this.nombre + ", usted está por debajo de su peso normal");
        } else if (this.imc >= 18.5 && this.imc < 24.9) {
            console.log(this.nombre + ", usted está en su peso normal");
        } else if (this.imc >= 25 && this.imc < 29.9) {
            console.log(this.nombre + ", usted está en sobrepeso");
        } else {
            console.log(this.nombre + ", usted padece obesidad");
        }
    };
};

//Funciones de orden superior

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

//Creo una Persona tomando los datos ingresados vía prompt
// const usuario = new Persona(obtenerNombre(), obtenerPeso(), obtenerAltura(), calcularImc(peso, altura));
