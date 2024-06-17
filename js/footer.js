//Capturo el id "footer" y le agrego la clase "footer"
const footer = document.getElementById('footer');
// footer.classList.add('footer');

//Creo un div y le agrego una clase de bootstrap
const divFooter = document.createElement('div');
divFooter.classList.add('text-end');

//Creo una section y le agrego un p
const sectionFooter = document.createElement('section');
const pFooter = document.createElement('p');

//Le agrego contenido al p y logo de copyright
pFooter.innerHTML = "Todos los derechos reservados <i class='fa-regular fa-copyright'></i>";

//Anido
// footer.appendChild(divFooter);
divFooter.appendChild(sectionFooter);
sectionFooter.appendChild(pFooter);