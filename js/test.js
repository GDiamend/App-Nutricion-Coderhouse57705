//Capturo el body
const testBody = document.body;

//Creo el header y lo agrego al body
const testHeader = document.createElement('header');
testBody.appendChild(testHeader);

//Creo un hr para dar espacio
const hr = document.createElement('hr');
testBody.appendChild(hr)

//Creo el main y lo agrego al body
const testMain = document.createElement('main');
testBody.appendChild(testMain);

//Creo un div, un h1; le agrego contenido y los anido al main
const divTestH1 = document.createElement('div');
const secH1 = document.createElement('section');
const testH1 = document.createElement('h1');
testH1.classList.add('text-center', 'mt-4', 'mb-4', 'fs-1');
testH1.innerText = "Calcula tu IMC Gratis: Averigua tu Índice de Masa Corporal Ahora";
testMain.appendChild(divTestH1);
divTestH1.appendChild(secH1);
secH1.appendChild(testH1);


//Creo el div del formulario para el cálculo del IMC y lo anido al main
const divTestForm = document.createElement('div');
divTestForm.classList.add('container-fluid');
testMain.appendChild(divTestForm);

// //Creo un div, un h2; le agrego contenido y los anido al div del form
// const divTestH2Form = document.createElement('div');
// const h2TestForm = document.createElement('h2');
// h2TestForm.classList.add('text-center', 'mt-4', 'mb-4');
// h2TestForm.innerText = "Introduce tus datos al formulario de cálculo de IMC";
// divTestForm.appendChild(divTestH2Form);
// divTestH2Form.appendChild(h2TestForm);

//Creo un div para agregar un poco de texto
const divTestP = document.createElement('div');
const pTest = document.createElement('p');
pTest.innerText = 'Calcular tu IMC nunca ha sido tan fácil. Simplemente ingresa tu peso y altura para obtener tu resultado y descubre cómo puedes mejorar tu salud y bienestar.';
pTest.classList.add('fs-3', 'text-center');
divTestForm.appendChild(divTestP);
divTestP.appendChild(pTest);

//Creo un div con un form y le agrego los input necesarios con sus correspondientes label
//cada uno dentro de un div
const divTestInput = document.createElement('div');
divTestInput.classList.add('container-fluid', 'form-thumbnail', 'imgBg', 'widthFormContacto');
const testForm = document.createElement('form');

//Anido
divTestForm.appendChild(divTestInput);
divTestInput.appendChild(testForm);

//Creo div, input y label para el nombre
const divTestName = document.createElement('div');
divTestName.classList.add('row', 'g-3', 'justify-content-center', 'm-2');
const divLabelName = document.createElement('div');
divLabelName.classList.add('col-6', 'widthForm');
const labelTestName = document.createElement('label');
const divInputName = document.createElement('div');
divInputName.classList.add('col-auto');
const inputTestName = document.createElement('input');

testForm.appendChild(divTestName);
divTestName.appendChild(divLabelName);
divLabelName.appendChild(labelTestName);
divTestName.appendChild(divInputName);
divInputName.appendChild(inputTestName);

//Creo div, input y label para el peso
const divTestWeight = document.createElement('div');
divTestWeight.classList.add('row', 'g-3', 'justify-content-center', 'm-2');
const divLabelWeight = document.createElement('div')
divLabelWeight.classList.add('col-6', 'widthForm');
const labelTestWeight = document.createElement('label');
const divInputWeight = document.createElement('div');
divInputWeight.classList.add('col-auto');
const inputTestWeight = document.createElement('input');

testForm.appendChild(divTestWeight);
divTestWeight.appendChild(divLabelWeight);
divLabelWeight.appendChild(labelTestWeight);
divTestWeight.appendChild(divInputWeight);
divInputWeight.appendChild(inputTestWeight);

//Creo div, input y label para la altura
const divTestHeight = document.createElement('div');
divTestHeight.classList.add('row', 'g-3', 'justify-content-center', 'm-2');
const divLabelHeight = document.createElement('div');
divLabelHeight.classList.add('col-6', 'widthForm');
const labelTestHeight = document.createElement('label');
const divInputHeight = document.createElement('div');
divInputHeight.classList.add('col-auto');
const inputTestHeight = document.createElement('input');

testForm.appendChild(divTestHeight);
divTestHeight.appendChild(divLabelHeight);
divLabelHeight.appendChild(labelTestHeight);
divTestHeight.appendChild(divInputHeight);
divInputHeight.appendChild(inputTestHeight);

//Le asigno un type y un id a los input, también les agrego required
inputTestName.type = 'text';
inputTestName.id = 'inputTestName';
inputTestName.required = true;
inputTestWeight.type = 'number';
inputTestWeight.id = 'inputTestWeight';
inputTestWeight.required = true;
inputTestHeight.type = 'number';
inputTestHeight.id = 'inputTestHeight';
inputTestHeight.required = true;

//Le asigno contenido a los label y los asocio a los input
labelTestName.htmlFor = 'inputTestName';
labelTestName.innerText = 'Nombre';
labelTestWeight.htmlFor = 'inputTestWeight';
labelTestWeight.innerText = 'Peso en KG';
labelTestHeight.htmlFor = 'inputTestHeight';
labelTestHeight.innerText = 'Altura en CM';

//Creo el botón submit con su div correspondiente y lo anido
const divTestButton = document.createElement('div');
divTestButton.classList.add('text-center');
const buttonTestForm = document.createElement('input');
buttonTestForm.type = 'submit';
buttonTestForm.value = 'Calcular';
buttonTestForm.classList.add('btn', 'btnColor', 'fs-5', 'animate__animated', 'animate__pulse');
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
            return this.name + ", su imc es " + this.imc + ", usted está por debajo de su peso normal";
        } else if (this.imc >= 18.5 && this.imc < 24.9) {
            return this.name + ", su imc es " + this.imc + ", usted está en su peso normal";
        } else if (this.imc >= 25 && this.imc < 29.9) {
            return this.name + ", su imc es " + this.imc + ", usted está en sobrepeso";
        } else {
            return this.name + ", su imc es " + this.imc + ", usted padece obesidad";
        }
    };
};

//Función de orden superior
const calculateImc = (weight, height) => {
    height /= 100;
    return Math.floor((weight / (height * height)) * 100) / 100;;
};

//Agrego el evento al submit
testForm.addEventListener('submit', (e) => {
    e.preventDefault();

    //Controlo mediante un id si el div tiene contenido, en caso de que sí, lo elimino para que no haya multiples respuestas
    const existingDivTestResult = document.getElementById('divTestResult');
    if (existingDivTestResult) {
        existingDivTestResult.remove();
    }

    // Creo una Persona tomando los datos ingresados en los input
    const user = new Person(
        inputTestName.value,
        parseFloat(inputTestWeight.value),
        parseFloat(inputTestHeight.value),
        calculateImc(parseFloat(inputTestWeight.value), parseFloat(inputTestHeight.value))
    );

    //Uso Swal.fire para llevar al usuario a la sección de compras, uso una promesa para redireccionar
    Swal.fire({
        title: user.showResult(),
        text: "Explore nuestra selección de libros para mejorar su dieta diaria",
        icon: "info",
        showCancelButton: true,
        confirmButtonText: 'Ver Libros',
        cancelButtonText: "Cancelar"
    }).then((result) => {
        if (result.isConfirmed) {
            window.location.href = `./book.html`;
        }
    })
});

//Agrego footer
const testFooter = document.createElement('footer');
testFooter.id = 'footer';
testBody.appendChild(testFooter);