//Capturo el id "headerIndex" y le agrego la clase "headerIndex"
const headerIndex = document.getElementById('headerIndex');
headerIndex.classList.add('headerIndex');

//Capturo el id "mainIndex" y le agrego la clase mainIndex
const mainIndex = document.getElementById('mainIndex');
mainIndex.classList.add('mainIndex');

//Creo un div y un h1
const divH1Index = document.createElement('div');
const h1Index = document.createElement('h1');

//Le agrego contenido al h1
h1Index.innerText = "Planifica tu Dieta con Nuestras Guías de Nutrición";

//Anido
mainIndex.appendChild(divH1Index);
divH1Index.appendChild(h1Index);

//Creo un div en el que se veran los datos que va ingresando el usuario vía prompt
const divDatosUsuario = document.createElement('div');

//Creo un h2 a modo de título de la sección
const h2DatosUsuario = document.createElement('h2');
h2DatosUsuario.innerText = "Datos del usuario";

//Creo los campos para mostrar los valores próximos a ingresar
const pNombre = document.createElement('p');
const pGenero = document.createElement('p');
const pPeso = document.createElement('p');
const pAltura = document.createElement('p');
const pImc = document.createElement('p');

pNombre.innerText = "Nombre: ";
pGenero.innerText = "Genero: ";
pPeso.innerText = "Peso: ";
pAltura.innerText = "Altura: ";
pImc.innerText = "IMC: ";

//Anido
mainIndex.appendChild(divDatosUsuario);
divDatosUsuario.appendChild(h2DatosUsuario);
divDatosUsuario.appendChild(pNombre);
divDatosUsuario.appendChild(pGenero);
divDatosUsuario.appendChild(pPeso);
divDatosUsuario.appendChild(pAltura);
divDatosUsuario.appendChild(pImc);

//Creo la clase Persona
class Persona {
    constructor(nombre, genero, peso, altura, imc) {
        this.nombre = nombre;
        this.genero = genero;
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
// const usuario = new Persona(obtenerNombre(), obtenerGenero(), obtenerPeso(), obtenerAltura(), calcularImc(peso, altura));

//Actualizo los datos en el html
pNombre.innerText += usuario.nombre;
pGenero.innerText += usuario.genero;
pPeso.innerText += usuario.peso;
pAltura.innerText += usuario.altura;
pImc.innerText += usuario.imc;

//Creo la clase Libro
class Libro {
    constructor(nombre, texto) {
        this.nombre = nombre;
        this.texto = texto;
    }
}

//Creo un texto y varias instancias de Libro
let texto = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos quibusdam culpa tenetur totam, omnis delectus rem, molestiae, magni dignissimos non impedit! Magni tempora sequi a soluta magnam nemo repellat libero. Reiciendis consequatur ipsum eius rem sed, rerum cupiditate error magni in quaerat soluta, qui cum aut nesciunt eligendi! Eligendi hic inventore debitis quos expedita reiciendis architecto quibusdam sint non aperiam!Excepturi, rem ? Atque quia excepturi et itaque maiores libero illo ullam architecto error sapiente mollitia magnam iure tempora neque fugiat aspernatur, porro recusandae reiciendis nihil assumenda provident delectus autem obcaecati.";

const comidaSinSal = new Libro("Comida sin sal", texto);
const comidaBajaCalorias = new Libro("Comida baja en calorías", texto);
const comidaSaludable = new Libro("Comida saludable", texto);
const ejercicioCardio = new Libro("Guia de ejercicios cardio", texto);
const planDeAlimentacion = new Libro("Plan de alimentación", texto);
const comoInfluyeComidaAnimo = new Libro("Como influye la comida en nuestro ánimo", texto);

//Array de libros
const libros = [comidaSinSal, comidaBajaCalorias, comidaSaludable, ejercicioCardio, planDeAlimentacion, comoInfluyeComidaAnimo];

//Funcion de orden superior
function mostrarTitulos(array, funcion) {
    let i = 1;
    for (const libro of array) {
        funcion(i + " - " + libro.nombre);
        i++;
    }
};

//Toda esta parte la quería hacer en el html pero los prompt bloquean que se cargue el html primero
//por lo que el usuario no podría ver las opciones. En un futuro cuando no se usen mas prompt lo soluciono
function corroborarRta() {
    let rta;
    do {
        rta = prompt("Escriba el número deseado o 'ESC' para salir");
    } while (rta.toUpperCase() != "ESC" && rta < 1 || rta.toUpperCase() != "ESC" && rta > libros.length);

    if (rta.toUpperCase() != "ESC") {
        rta--;
        console.log("Introducción del libro " + libros[rta].nombre + ": " + libros[rta].texto);
        console.log("Actualmente no contamos con stock de este libro");
        console.log("Vuelva a visitarnos pronto para mas información");
    }
    console.log("Muchas gracias por su visita");
}

function mostrarLog() {
    console.log("Tenemos un catalogo de libros a la venta que le pueden ayudar a mejorar su calidad de vida");
    console.log("Si está interesado en leer la introducción de alguno de los siguientes libros escriba el nombre del mismo, de lo contrario escriba ESC para terminar");
}

usuario.mostrarResultado();
mostrarLog();
mostrarTitulos(libros, console.log);
corroborarRta();