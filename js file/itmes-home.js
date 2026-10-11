fetch("products.json")
.then(response => response.json())
.then(data => {
    const cart = JSON.parse(localStorage.getItem("cart")) || []
    const swiper_items_sale = document.getElementById("swiper_items_sale")
    const swiper_electronics = document.getElementById("swiper_electronics")
    const swiper_appliances = document.getElementById("swiper_appliances")
    const swiper_mobiles = document.getElementById("swiper_mobiles")
    
    // Hot Deals
    data.forEach(product => {
        if(product.old_price) {
            const isInCart =cart.some(cartItem => cartItem.id === product.id)

            const present_disc = Math.floor((product.old_price - product.price) / product.old_price * 100);
            swiper_items_sale.innerHTML += `
            <div class="swiper-slide product">
                            <span class="sale-present">%${present_disc}</span>
                            <div class="img-product">
                                <a href="#"><img src="${product.img}" alt=""></a>
                            </div>
                            <div class="stars">
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                            </div>
                            <p class="name-product">
                                <a href="#">${product.name}</a>
                            </p>
                            <div class="price">
                                <p><span>$${product.price}</span></p>
                                <p class="old-price">$${product.old_price}</p>
                            </div>
                            <div class="icons">
                                <span class="btn-add-cart ${isInCart ? "active" : ""}" data-id="${product.id}">
                                    <i class="fa-solid fa-cart-shopping"></i> ${isInCart ? "Item in cart" : "Add to cart"}
                                </span>
                                <span class="icon-product">
                                    <i class="fa-regular fa-heart"></i>
                                </span>
                            </div>
                        </div>
            `
        }
    })
    
    // Electronics
    data.forEach(product => {
        if (product.catetory == "electronics") {
            const isInCart = cart.some(cartItem => cartItem.id === product.id)
            const old_price_exiting = product.old_price ? `<p  class="old-price">$${product.old_price}</p>` : "";
            const present_disc = Math.floor((product.old_price - product.price) / product.old_price * 100)
            const present_discounted = product.old_price ? `<span class="sale-present">%${present_disc}</span>` : ""
            swiper_electronics.innerHTML += `
            <div class="swiper-slide product">
                            ${present_discounted}
                            <div class="img-product">
                                <a href="#"><img src="${product.img}" alt=""></a>
                            </div>
                            <div class="stars">
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                            </div>
                            <p class="name-product">
                                <a href="#">${product.name}</a>
                            </p>
                            <div class="price">
                                <p><span>$${product.price}</span></p>
                                ${old_price_exiting}
                            </div>
                            <div class="icons">
                            <span class="btn-add-cart ${isInCart ? "active" : ""}" data-id="${product.id}">
                                    <i class="fa-solid fa-cart-shopping"></i> ${isInCart ? "Item in cart" : "Add to cart"}
                                </span>
                                <span class="icon-product">
                                    <i class="fa-regular fa-heart"></i>
                                </span>
                            </div>
                        </div>
            `
        }
    })

    // Appliances
    data.forEach(product => {
        if (product.catetory == 'appliances') {
            const isInCart = cart.some(cartItem => cartItem.id === product.id)
            const old_price_exiting = product.old_price ? `<p  class="old-price">$${product.old_price}</p>` : "";
            const present_disc = Math.floor((product.old_price - product.price) / product.old_price * 100);
            const present_discounted = product.old_price ? `<span class="sale-present">%${present_disc}</span>` : "";
            swiper_appliances.innerHTML += `
            <div class="swiper-slide product">
                            ${present_discounted}
                            <div class="img-product">
                                <a href="#"><img src="${product.img}" alt=""></a>
                            </div>
                            <div class="stars">
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                            </div>
                            <p class="name-product">
                                <a href="#">${product.name}</a>
                            </p>
                            <div class="price">
                                <p><span>$${product.price}</span></p>
                                ${old_price_exiting}
                            </div>
                            <div class="icons">
                            <span class="btn-add-cart ${isInCart ? "active" : ""}" data-id="${product.id}">
                                    <i class="fa-solid fa-cart-shopping"></i> ${isInCart ? "Item in cart" : "Add to cart"}
                                </span>
                                <span class="icon-product">
                                    <i class="fa-regular fa-heart"></i>
                                </span>
                            </div>
                        </div>
            `
        }
    })

    // Mobiles
    data.forEach(product => {
        if (product.catetory == 'mobiles') {
            const isInCart = cart.some(cartItem => cartItem.id === product.id)
            const old_price_exiting = product.old_price ? `<p  class="old-price">$${product.old_price}</p>` : "";
            const present_disc = Math.floor((product.old_price - product.price) / product.old_price * 100);
            const present_discounted = product.old_price ? `<span class="sale-present">%${present_disc}</span>` : "";
            swiper_mobiles.innerHTML += `
            <div class="swiper-slide product">
                            ${present_discounted}
                            <div class="img-product">
                                <a href="#"><img src="${product.img}" alt=""></a>
                            </div>
                            <div class="stars">
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                            </div>
                            <p class="name-product">
                                <a href="#">${product.name}</a>
                            </p>
                            <div class="price">
                                <p><span>$${product.price}</span></p>
                                ${old_price_exiting}
                            </div>
                            <div class="icons">
                            <span class="btn-add-cart ${isInCart ? "active" : ""}" data-id="${product.id}">
                                    <i class="fa-solid fa-cart-shopping"></i> ${isInCart ? "Item in cart" : "Add to cart"}
                                </span>
                                <span class="icon-product">
                                    <i class="fa-regular fa-heart"></i>
                                </span>
                            </div>
                        </div>
            `
        }
    })
})