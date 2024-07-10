//Capturo el body
const bookBody = document.body;

//Creo el header y lo agrego al body
const bookHeader = document.createElement('header');
bookBody.appendChild(bookHeader);

//Creo un hr para dar espacio
const hr = document.createElement('hr');
bookBody.appendChild(hr)

//Creo el main y lo agrego al body
const bookMain = document.createElement('main');
bookBody.appendChild(bookMain);

//Creo un div, un h1; le agrego contenido y los anido al main
const divBookH1 = document.createElement('div');
const bookH1 = document.createElement('h1');
bookH1.innerText = "Encuentra las Mejores Guías y Libros de Alimentación: Mejora tu Dieta Ahora";
bookH1.classList.add('text-center', 'mt-4');
bookMain.appendChild(divBookH1);
divBookH1.appendChild(bookH1);

//Creo un div y un h2 donde iran los libros/guías para que el usuario agregue al carrito
const divBookList = document.createElement('div');
const divBookH2 = document.createElement('div');;
const bookH2List = document.createElement('h2');
bookH2List.innerText = "Añade a tu Carrito: Guías y Libros para una Mejor Nutrición";
bookH2List.classList.add('text-center', 'm-4');
bookMain.appendChild(divBookList);
divBookList.appendChild(divBookH2);
divBookList.classList.add('container-fluid', 'row');
divBookH2.appendChild(bookH2List);

//Capto el carro desde el local storage
let cart = loadCartFromLocalStorage();

//Función que envía la información al local storage en formato JSON
function saveCartToLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

//Función que recupera la información del carro en formato JSON, si no hay información, crea un array vacío
function loadCartFromLocalStorage() {
    const cartData = localStorage.getItem('cart');
    return cartData ? JSON.parse(cartData) : [];
}

//Creo un div donde estará la lista de productos
const divBookProducts = document.createElement('div');
divBookProducts.classList.add('col-6');
divBookList.appendChild(divBookProducts);

//Creo un array vacío para guardar los productos de la database
let products = [];

//Obtengo la lista de productos mediante método fetch y los guardo en el array
function loadProducts() {
    fetch("../js/database.json")
        .then(response => response.json())
        .then(data => {
            products = data;
            //Llamo acá a la función render para evitar problemas por la asincronía 
            renderProducts();
        })
        .catch(error => {
            console.error('Error al cargar los productos:', error);
        });
}

//Creo la función donde se van a mostrar los productos de la database guardados en el array
function renderProducts() {
    divBookProducts.innerHTML = '';
    products.forEach(product => {
        const divBuy = document.createElement('div');
        divBuy.classList.add('container-fluid', 'form-thumbnail', 'imgBg', 'w-50', 'row');
        const productDiv = document.createElement('div');
        productDiv.classList.add('g-3', 'col-6');
        const pBookCart = document.createElement('p');
        pBookCart.innerText = `${product.name} - $${product.price}`;
        pBookCart.classList.add('text-center');
        const divBookButton = document.createElement('div');
        divBookButton.classList.add('col-6', 'text-center', 'align-items-center', 'justify-content-center');
        const buttonBookCart = document.createElement('button');
        buttonBookCart.classList.add('btn', 'btnColor', 'animate__animated', 'animate__pulse');
        buttonBookCart.onclick = () => { addToCart(product.id, 1); };
        buttonBookCart.innerText = 'Agregar';

        divBookProducts.appendChild(divBuy);
        divBuy.appendChild(productDiv);
        productDiv.appendChild(pBookCart);

        divBuy.appendChild(divBookButton);
        divBookButton.appendChild(buttonBookCart);
    })
}


//Creo un div donde aparecera el carrito
const divBookCart = document.createElement('div');
divBookList.appendChild(divBookCart);
divBookCart.classList.add('col-6');

//Muestra los productos del carro
function renderCart() {
    divBookCart.innerHTML = '';
    cart.forEach(item => {
        const cartItemDiv = document.createElement('div');
        const pCart = document.createElement('p');
        pCart.innerText = `ID: ${item.id}, Nombre: ${item.name}, Cantidad: ${item.quantity}, Precio Total: $${item.totalPrice}`;
        divBookCart.appendChild(cartItemDiv);
        cartItemDiv.appendChild(pCart);
    });
}

//Agrega productos al carrito
function addToCart(productId, quantity) {
    const product = products.find(p => p.id === productId);
    if (!product) {
        console.error("El producto no existe");
        return;
    };

    Swal.fire({
        icon: "success",
        title: "Item agregado",
        showConfirmButton: false,
        timer: 900
    });

    const cartItem = cart.find(item => item.id === productId);

    if (cartItem) {
        cartItem.quantity += quantity;
        cartItem.totalPrice = cartItem.quantity * cartItem.price;
    } else {
        cart.push(
            {
                id: product.id,
                name: product.name,
                price: product.price,
                quantity: quantity,
                totalPrice: quantity * product.price
            }
        )
    }

    saveCartToLocalStorage();
    renderCart();
}

//Creo un div para agregar los botones de compra y vaciar carrito
const divBookBotones = document.createElement('div');
divBookList.appendChild(divBookBotones);
divBookBotones.classList.add('container-fluid', 'row', 'text-center');

//Creo un botón para limpiar el carrito
function cleanCart() {
    const cleanCartDiv = document.createElement('div');
    cleanCartDiv.classList.add('col-6', 'text-end');
    const buttonCleanCart = document.createElement('button');
    buttonCleanCart.classList.add('btn', 'btnColor', 'fs-5', 'animate__animated', 'animate__pulse');
    buttonCleanCart.innerText = 'Vaciar carro';
    buttonCleanCart.onclick = () => {
        Swal.fire({
            title: "Desea eliminar los productos seleccionados?",
            icon: "question",
            showCancelButton: true,
            confirmButtonText: "Borrar",
            cancelButtonText: "Cancelar"
        }).then((result) => {
            if (result.isConfirmed) {
                cart = [];
                saveCartToLocalStorage();
                renderCart();
            }
        });
    }

    divBookBotones.appendChild(cleanCartDiv);
    cleanCartDiv.appendChild(buttonCleanCart);
}

//Función para confirmar la compra
function buyCart() {
    const buyCartDiv = document.createElement('div');
    buyCartDiv.classList.add('col-6', 'text-start')
    const buttonCartBuy = document.createElement('button');
    buttonCartBuy.innerText = 'Comprar';
    buttonCartBuy.classList.add('btn', 'btnColor', 'fs-5', 'animate__animated', 'animate__pulse');
    buttonCartBuy.addEventListener('click', () => {
        Swal.fire({
            title: "Quiere comprar los productos seleccionados?",
            icon: "question",
            showCancelButton: true,
            confirmButtonText: "Comprar",
            cancelButtonText: "Cancelar"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire("Compra realizada!", "", "success");
                cart = [];
                saveCartToLocalStorage();
                renderCart();
            }
        });

    });

    divBookBotones.appendChild(buyCartDiv);
    buyCartDiv.appendChild(buttonCartBuy);
}

//Asegura que se carguen las cuatro funciones sin esperar a que se cargue el css
document.addEventListener('DOMContentLoaded', () => {
    loadProducts();
    renderCart();
    cleanCart();
    buyCart();
});

//Agrego footer
const bookFooter = document.createElement('footer');
bookFooter.id = 'footer';
bookBody.appendChild(bookFooter);