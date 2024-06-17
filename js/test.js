//Capturo el body
const body = document.body;

//Creo el header y lo agrego al body
const testHeader = document.createElement('header');
body.appendChild(testHeader);

//Creo el main y lo agrego al body
const testMain = document.createElement('main');
body.appendChild(testMain);

//Creo un div, un h1; le agrego contenido y los anido al main
const divTestH1 = document.createElement('div');
const testH1 = document.createElement('h1');
testH1.innerText = "Calcula tu IMC Gratis: Averigua tu Índice de Masa Corporal Ahora";
testMain.appendChild(divTestH1);
divTestH1.appendChild(testH1);

//Creo el div del formulario para el cálculo del IMC y lo anido al main
const divTestForm = document.createElement('div');
testMain.appendChild(divTestForm);

//Creo un div, un h2; le agrego contenido y los anido al div del form
const divTestH2 = document.createElement('div');
const h2TestForm = document.createElement('h2');
h2TestForm.innerText = "Introduce tus datos al formulario de cálculo de IMC";
divTestForm.appendChild(divTestH2);
divTestH2.appendChild(h2TestForm);

//Creo un div con un form y le agrego los input necesarios con sus correspondientes label
//cada uno dentro de un div
const divTestInput = document.createElement('div');
const testForm = document.createElement('form');

const divTestName = document.createElement('div');
const labelTestName = document.createElement('label');
const inputTestName = document.createElement('input');

const divTestWeight = document.createElement('div');
const labelTestWeight = document.createElement('label');
const inputTestWeight = document.createElement('input');

const divTestHeight = document.createElement('div');
const labelTestHeight = document.createElement('label');
const inputTestHeight = document.createElement('input');

//Anido
divTestForm.appendChild(divTestInput);
divTestInput.appendChild(testForm);

testForm.appendChild(divTestName);
divTestName.appendChild(labelTestName);
divTestName.appendChild(inputTestName);

testForm.appendChild(divTestWeight);
divTestWeight.appendChild(labelTestWeight);
divTestWeight.appendChild(inputTestWeight);

testForm.appendChild(divTestHeight);
divTestHeight.appendChild(labelTestHeight);
divTestHeight.appendChild(inputTestHeight);

//Le asigno un type y un id a los input
inputTestName.type = 'text';
inputTestName.id = 'inputTestName';
inputTestWeight.type = 'number';
inputTestWeight.id = 'inputTestWeight';
inputTestHeight.type = 'number';
inputTestHeight.id = 'inputTestHeight';

//Le asigno contenido a los label y los asocio a los input
labelTestName.htmlFor = 'inputTestName';
labelTestName.innerText = 'Ingrese su nombre: ';
labelTestWeight.htmlFor = 'inputTestWeight';
labelTestWeight.innerText = 'Ingrese su peso en kilos: ';
labelTestHeight.htmlFor = 'inputTestHeight';
labelTestHeight.innerText = 'Ingrese su altura en centimetros: ';

//Creo el botón submit con su div correspondiente y lo anido
const divTestButton = document.createElement('div');
const buttonTestForm = document.createElement('input');
buttonTestForm.type = 'submit';
buttonTestForm.value = 'Calcular';
testForm.appendChild(divTestButton);
divTestButton.appendChild(buttonTestForm);

//Creo la clase Persona
class Person {
    constructor(name, weight, height, imc) {
        this.name = name;
        this.weight = weight;
        this.height = height;
        this.imc = imc;
    };

    showResult() {
        if (this.imc < 18.5) {
            console.log(this.name + ", usted está por debajo de su peso normal");
        } else if (this.imc >= 18.5 && this.imc < 24.9) {
            console.log(this.name + ", usted está en su peso normal");
        } else if (this.imc >= 25 && this.imc < 29.9) {
            console.log(this.name + ", usted está en sobrepeso");
        } else {
            console.log(this.name + ", usted padece obesidad");
        }
    };
};

//Función de orden superior
const calculateImc = (weight, height) => {
    height /= 100;
    return (weight / (height * height));
};

//Agrego el evento al submit
testForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Creo una Persona tomando los datos ingresados en los input
    const user = new Person(
        inputTestName.value,
        parseFloat(inputTestWeight.value),
        parseFloat(inputTestHeight.value),
        calculateImc(parseFloat(inputTestWeight.value), parseFloat(inputTestHeight.value))
    );

    user.showResult();
});