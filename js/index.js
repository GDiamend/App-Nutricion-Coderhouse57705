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