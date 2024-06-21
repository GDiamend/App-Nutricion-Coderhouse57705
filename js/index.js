const indexBody = document.body;

//Creo "headerIndex"
const headerIndex = document.createElement('header');
indexBody.appendChild(headerIndex);

//Creo un hr para dar espacio
const hr = document.createElement('hr');
headerIndex.appendChild(hr)

//Creo "mainIndex"
const mainIndex = document.createElement('mainIndex');
indexBody.appendChild(mainIndex);

//Creo un div y un h1
const divH1Index = document.createElement('div');
const h1Index = document.createElement('h1');
h1Index.classList.add('text-center', 'display-4', 'm-4');

//Le agrego contenido al h1
h1Index.innerText = "Planifica tu Dieta con Nuestras Guías de Nutrición";

//Anido
mainIndex.appendChild(divH1Index);
divH1Index.appendChild(h1Index);

//Creo un p para agregar contenido
const divIndexP = document.createElement('div');
const pIndex = document.createElement('p');
pIndex.innerText = 'Una alimentación balanceada es fundamental para mantener una vida saludable y activa. Consumir una variedad de alimentos ricos en nutrientes, vitaminas y minerales no solo fortalece el sistema inmunológico, sino que también mejora la energía diaria y ayuda a prevenir enfermedades crónicas como la diabetes, enfermedades cardíacas y obesidad. Una dieta equilibrada incluye una adecuada combinación de frutas, verduras, proteínas, granos enteros y grasas saludables, asegurando que tu cuerpo reciba todo lo que necesita para funcionar correctamente. En nuestra página, encontrarás guías y libros especialmente diseñados para ayudarte a comprender y adoptar hábitos alimenticios saludables que te permitan vivir una vida más plena y vigorosa.';
pIndex.classList.add('fs-5', 'm-4');

mainIndex.appendChild(divIndexP);
divIndexP.appendChild(pIndex);

//Agrego un video de youtube para dar mas contenido al index
const divVideo = document.createElement('div');
divVideo.classList.add('text-center', 'm-5');
const h2Video = document.createElement('h2');
h2Video.classList.add('fs-1', 'pb-4', 'fw-bold');
const iframe = document.createElement('iframe');
iframe.classList.add('videoQuery');
iframe.src = 'https://www.youtube.com/embed/_WZonq5gCrw?si=x0CIrz4gB8jDmSBa';
iframe.title = 'YouTube video player'
iframe.innerHTML = `frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen loading="lazy"`;

mainIndex.appendChild(divVideo);
divVideo.appendChild(h2Video);
divVideo.appendChild(iframe);


//Agrego footer
const indexFooter = document.createElement('footer');
indexFooter.id = 'footer';
indexBody.appendChild(indexFooter);