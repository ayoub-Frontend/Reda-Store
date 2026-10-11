// Open & Close Category Items
let category_nav_list = document.querySelector(".category-nav-list");
function open_categ_list() {
    category_nav_list.classList.toggle("active");
}

// Open & Close Cart Items
var cart = document.querySelector(".cart");
function open_close_cart() {
    cart.classList.toggle("active")
}

// Open & Close Menu
let nav_links = document.querySelector(".nav-links")
function open_menu() {
    nav_links.classList.toggle("active")
}

// Fetching the JSON File
fetch('products.json')
.then(response => response.json())
.then(data => {
    const addToCartButtons = document.querySelectorAll('.btn-add-cart')
    addToCartButtons.forEach(button => {
        button.addEventListener("click", (event) => {
            const productId = event.target.getAttribute("data-id")
            const selectedProduct = data.find(product => product.id == productId)

            addToCart(selectedProduct)

            const allMatchingButtons = document.querySelectorAll(`.btn-add-cart[data-id="${productId}"`)
            allMatchingButtons.forEach(btn => {
                btn.classList.add("active")
                btn.innerHTML = `<i class="fa-solid fa-cart-shopping"></i> Item in cart`
            })
        })
    })
})

function addToCart(product) {
    const cart = JSON.parse(localStorage.getItem("cart")) || []
    cart.push({... product, quantity: 1})
    localStorage.setItem('cart',  JSON.stringify(cart))

    updateCart()
}

function updateCart() {
    const cartItemsContainer = document.getElementById('cart_items')
    const  cart = JSON.parse(localStorage.getItem('cart')) || []
    const checkout_items = document.getElementById("checkout-items")
    if (checkout_items) {
        checkout_items.innerHTML = "";
    }
    
    var total_price = 0
    var total_count = 0
    cartItemsContainer.innerHTML = ""
    cart.forEach((item, index) => {
        let total_price_item = item.price * item.quantity
        total_price += total_price_item
        total_count += item.quantity
        cartItemsContainer.innerHTML += `
        <div class="item-cart">
                    <img src="${item.img}" alt="">
                    <div class="content">
                        <h4>${item.name}</h4>
                        <p class="price-cart">$${total_price_item}</p>
                        <div class="quantity-control">
                            <button class="decrease-quantity" data-index="${index}">-</button>
                            <span class="quantity">${item.quantity}</span>
                            <button class="increase-quantity" data-index="${index}">+</button>
                        </div>
                    </div>
                    <button class="delete-item" data-index="${index}"><i class="fa-solid fa-trash-can"></i></button>
                </div>
        `

        if (checkout_items) {
            checkout_items.innerHTML += `
            <div class="item-cart">
                                <div class="image-name">
                                    <img src="${item.img}" alt="">

                                    <div class="content">
                                        <h4>${item.name}</h4>
                                        <p class="price-cart">$${total_price_item}</p>
                                        <div class="quantity-control">
                                            <button class="decrease-quantity" data-index="${index}">-</button>
                                            <span class="quantity">${item.quantity}</span>
                                            <button class="increase-quantity" data-index="${index}">+</button>
                                        </div>
                                    </div>
                                </div>
                                <button class="delete-item" data-index="${index}"><i class="fa-solid fa-trash-can"></i></button>
                            </div>
            `
        }
    })

    const price_cart_total = document.querySelector(".price-cart-total")
    const count_item_cart = document.querySelector(".count-item-cart")
    const count_item_header = document.querySelector(".count-item-header")

    price_cart_total.innerHTML = `$ ${total_price}`
    count_item_cart.innerHTML = total_count
    count_item_header.innerHTML = total_count

    if (checkout_items) {
        const subtotal_checkout = document.querySelector(".subtotal-checkout")
        const total_checkout = document.querySelector(".total-checkout")
        subtotal_checkout.innerHTML = `$ ${total_price}`
        total_checkout.innerHTML = `$ ${total_price + 20}`
    }

    const increaseButtons = document.querySelectorAll(".increase-quantity")
    const decreaseButtons = document.querySelectorAll(".decrease-quantity")
    increaseButtons.forEach(buttons => {
        buttons.addEventListener("click" , (event) => {
            const itemIndex = event.target.getAttribute("data-index")
            increaseQuatnity(itemIndex)
        })
    })
    decreaseButtons.forEach(buttons => {
        buttons.addEventListener("click" , (event) => {
            const itemIndex = event.target.getAttribute("data-index")
            decreaseQuatnity(itemIndex)
        })
    })

    const deleteButton = document.querySelectorAll(".delete-item")
    deleteButton.forEach(button => {
        button.addEventListener("click" , (event) => {
            const itemIndex = event.target.closest("button").getAttribute("data-index")
            removeFromCart(itemIndex)
        })
    })
}

function increaseQuatnity(index) {
    let cart = JSON.parse(localStorage.getItem("cart")) || []
    cart[index].quantity += 1
    localStorage.setItem("cart", JSON.stringify(cart))
    updateCart()
}

function decreaseQuatnity(index) {
    let cart = JSON.parse(localStorage.getItem("cart")) || []
    if (cart[index].quantity > 1) {
        cart[index].quantity -= 1
    }
    localStorage.setItem("cart", JSON.stringify(cart))
    updateCart()
}

function removeFromCart(index) {
    const cart = JSON.parse(localStorage.getItem('cart')) || []

    const removeProduct = cart.splice(index, 1)[0]
    localStorage.setItem('cart', JSON.stringify(cart))
    updateCart()
    updateButtonsState(removeProduct.id)
}

function updateButtonsState(productId) {
    const allMatchingButtons = document.querySelectorAll(`.btn-add-cart[data-id="${productId}"]`)
    allMatchingButtons.forEach(button => {
        button.classList.remove("active")
        button.innerHTML = `<i class="fa-solid fa-cart-shopping"></i> Add to cart`
    })
}

updateCart()