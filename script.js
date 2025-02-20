const menu = document.getElementById("menu");
const cartBtn = document.getElementById("cart-btn");
const cartModal = document.getElementById("cart-modal");
const cartItemsContainer = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");
const chekoutBtn = document.getElementById("chekout-btn");
const closeModalBtn = document.getElementById("close-modal-btn");
const cartCounter = document.getElementById("cart-count");
const addressInput = document.getElementById("address");
const addressWarn = document.getElementById("address-warn");

let cart = [];

//Abrir modal carrinho
cartBtn.addEventListener("click", function () {
    cartModal.style.display = "flex";
    updateCartModal();
});

//Fechar modal carrinho
cartModal.addEventListener("click", function (event) {
  if (event.target === cartModal) {
    cartModal.style.display = "none";
  }
});
//Botão Fechar modal carrinho
closeModalBtn.addEventListener("click", function () {
  cartModal.style.display = "none";
});

menu.addEventListener("click", function (event) {
  // console.log(event.target)
  let parentButton = event.target.closest(".add-to-cart-btn");
  if (parentButton) {
    const name = parentButton.getAttribute("data-name");
    const price = parseFloat(parentButton.getAttribute("data-price"));

    addToCart(name, price);
  }
});

//Função para adicionar no ccarrinho
function addToCart(name, price) {
  const existingItem = cart.find((item) => item.name === name);

  if (existingItem) {
    // Se o item já existe aumenta apenas a quantidade : 1
    existingItem.quantity += 1;
  } else {
    cart.push({
      name,
      price,
      quantity: 1,
    });
  }

  updateCartModal();
}

//Atualiza o carrinho

function updateCartModal() {
  cartItemsContainer.innerHTML = "";
  let total = 0;

  cart.forEach((item) => {
    const cartItemElement = document.createElement("div");

    cartItemElement.innerHTML = `
        <div>
            <div>
                <p>${item.name}</p>
                <p>${item.quantity}</p>
                <p>R$ ${item.price}</p>     
            </div>

            <div>
                <button>
                Remover
                </button>
            </div>
        </div>
        `

        cartItemsContainer.appendChild(cartItemElement)
  });
}
