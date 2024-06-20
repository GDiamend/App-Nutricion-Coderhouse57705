const body = document.body;
const header = document.createElement('header');
header.classList.add('header', 'h-100');
const nav = document.createElement('nav');
nav.classList.add('navbar', 'bgImg');
const divNav = document.createElement('nav');
divNav.classList.add('container-fluid');
const divUl = document.createElement('div');
divUl.classList.add('w-100', 'mt-4', 'mb-2');
const ul = document.createElement('ul');
ul.classList.add('navbar-nav', 'justify-content-end', 'flex-row');

const liIndex = document.createElement('li');
liIndex.classList.add('nav-item');
const aIndex = document.createElement('a');
aIndex.classList.add('nav-link', 'navbar-brand', 'fw-bolder', 'textFormat', 'subrayado');
aIndex.innerText = 'Inicio';

const liTest = document.createElement('li');
liTest.classList.add('nav-item');
const aTest = document.createElement('a');
aTest.classList.add('nav-link', 'navbar-brand', 'fw-bolder', 'textFormat', 'subrayado');
aTest.innerText = 'Calcular IMC';

const liBook = document.createElement('li');
liBook.classList.add('nav-item');
const aBook = document.createElement('a');
aBook.classList.add('nav-link', 'navbar-brand', 'fw-bolder', 'textFormat', 'subrayado');
aBook.innerText = 'Libros y Guías'

body.appendChild(header);
header.appendChild(nav);
nav.appendChild(divNav);
divNav.appendChild(divUl);
divUl.appendChild(ul);
ul.appendChild(liIndex);
liIndex.appendChild(aIndex);
ul.appendChild(liTest);
liTest.appendChild(aTest);
ul.appendChild(liBook);
liBook.appendChild(aBook);