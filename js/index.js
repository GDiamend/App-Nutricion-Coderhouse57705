const indexBody = document.body;

//Creo "headerIndex"
const headerIndex = document.createElement('header');
indexBody.appendChild(headerIndex);

//Creo "mainIndex"
const mainIndex = document.getElementById('mainIndex');
indexBody.appendChild(mainIndex);

//Creo un div y un h1
const divH1Index = document.createElement('div');
const h1Index = document.createElement('h1');

//Le agrego contenido al h1
h1Index.innerText = "Planifica tu Dieta con Nuestras Guías de Nutrición";

//Anido
mainIndex.appendChild(divH1Index);
divH1Index.appendChild(h1Index);

//Agrego footer
const indexFooter = document.createElement('footer');
indexFooter.id = 'footer';
indexBody.appendChild(indexFooter);