//Capturo el body
const bookBody = document.body;

//Creo el header y lo agrego al body
const bookHeader = document.createElement('header');
bookBody.appendChild(bookHeader);

//Creo el main y lo agrego al body
const bookMain = document.createElement('main');
bookBody.appendChild(bookMain);

//Creo un div, un h1; le agrego contenido y los anido al main
const divBookH1 = document.createElement('div');
const bookH1 = document.createElement('h1');
bookH1.innerText = "Encuentra las Mejores Guías y Libros de Alimentación: Mejora tu Dieta Ahora";
bookMain.appendChild(divBookH1);
divBookH1.appendChild(bookH1);

//Creo un div y un h2 donde iran los libros/guías para que el usuario agregue al carrito
const divBookList = document.createElement('div');
const divBookH2 = document.createElement('div');;
const bookH2List = document.createElement('h2');
bookH2List.innerText = "Añade a tu Carrito: Guías y Libros para una Mejor Nutrición";
bookMain.appendChild(divBookList);
divBookList.appendChild(divBookH2);
divBookH2.appendChild(bookH2List);

//Creo los productos
const products = [
    {
        id: 1,
        name: "Un nuevo mundo de comida sin sal",
        price: 16999
    },
    {
        id: 2,
        name: "Comida baja en calorías",
        price: 12500
    },
    {
        id: 3,
        name: "Comida saludable para la tercer edad",
        price: 14000
    },
    {
        id: 4,
        name: "Guia de ejercicios cardio",
        price: 22699
    },
    {
        id: 5,
        name: "Plan de alimentación de 30 días",
        price: 19999
    },
    {
        id: 6,
        name: "Como influye la comida en nuestro estado anímico",
        price: 25000
    }
]

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
divBookList.appendChild(divBookProducts);

//Muestra los productos en la página
function renderProducts() {
    divBookProducts.innerHTML = '';
    products.forEach(product => {
        const productDiv = document.createElement('div');
        const pBookCart = document.createElement('p');
        pBookCart.innerText = `${product.name} - $${product.price}`;
        const buttonBookCart = document.createElement('button');
        buttonBookCart.onclick = () => { addToCart(product.id, 1); };
        buttonBookCart.innerText = 'Agregar al carrito';

        divBookProducts.appendChild(productDiv);
        productDiv.appendChild(pBookCart);
        productDiv.appendChild(buttonBookCart);
    })
}

//Creo un div donde aparecera el carrito
const divBookCart = document.createElement('div');
divBookList.appendChild(divBookCart);

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

//Creo un botón para limpiar el carrito
function cleanCart() {
    const cleanCartDiv = document.createElement('div');
    const buttonCleanCart = document.createElement('button');
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

    divBookProducts.appendChild(cleanCartDiv);
    cleanCartDiv.appendChild(buttonCleanCart);
}

//Función para confirmar la compra, en este caso llevará a la página 404
function buyCart() {
    const buyCartDiv = document.createElement('div');
    const buttonCartBuy = document.createElement('button');
    buttonCartBuy.innerText = 'Comprar';
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

    divBookProducts.appendChild(buyCartDiv);
    buyCartDiv.appendChild(buttonCartBuy);
}

//Asegura que se carguen las cuatro funciones sin esperar a que se cargue el css
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    renderCart();
    cleanCart();
    buyCart();
});



//Agrego footer
const bookFooter = document.createElement('footer');
bookFooter.id = 'footer';
bookBody.appendChild(bookFooter);