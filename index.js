const cartIcon = document.querySelector('.nav-bottom a i.bx-cart');
const closeBtn = document.querySelector('.cartTab .close');
const cart = document.querySelector('.cartTab');
cartIcon.addEventListener('click',()=>{
    cart.classList.toggle('active');
})
closeBtn.addEventListener('click',()=>{
    cart.classList.toggle('active');
})

//showing and hiding search div
const searchIcon = document.querySelector('.search .bx-search');
const searchContainer = document.querySelector('.search');
searchIcon.addEventListener('click', ()=>{
    searchContainer.classList.toggle('active');
});

const wishIcon = document.querySelector('bx-heart');
document.body.addEventListener('click',(event)=>{
    if(event.target.classList.contains('bx-heart')){
        pos = event.target.closest('.product');
        pos.classList.toggle('active')
        wishIcon.classList.toggle('active');
    }
})


//section hotdeals
const hotdeals = [
    {
        id: 1,
        featured: "FEATURED",
        discount: "SALE",
        description: "50l Waterproof...",
        firstprice: 6500.00,
        secondprice: 4000.00,
        image: "images/hot deal1.png",
    },
    {
        id: 2,
        featured: "FEATURED",
        discount: "SALE",
        description: "Siwar Tactica...",
        firstprice: 5500.00,
        secondprice: 3499.00,
        image: "images/hot deal2.jpg",
    },
    {
        id: 3,
        featured: "FEATURED",
        discount: "SALE",
        description: "Summer Outdo...",
        firstprice: 5500.00,
        secondprice: 4500.00,
        image: "images/hot deal3.jpg",
    },
    {
        id: 4,
        featured: "FEATURED",
        discount: "SALE",
        description: "High Quality M...",
        firstprice: 3000.00,
        secondprice: 1800.00,
        image: "images/hot deal4.jpg",
    },
    {
        id: 5,
        featured: "FEATURED",
        discount: "SALE",
        description: "Siwar Tactical",
        firstprice: 5500.00,
        secondprice: 3499.00,
        image: "images/hot deal5.jpg",
    },
    {
        id: 6,
        featured: "FEATURED",
        discount: "SALE",
        description: "Belleville Vibra",
        firstprice: 7500.00,
        secondprice: 5999.00,
        image: "images/hot deal6.jpg",
    }
]

const advertsizeContainer = document.querySelector('.advert-sizeContainer');
advertsizeContainer.innerHTML = "";

hotdeals.forEach((deal, index)=>{
    advertsizePoduct = document.createElement('div');
    advertsizePoduct.className = ".advert-sizeContainer banner";
    advertsizePoduct.innerHTML = `
                <div class="ftre">
                    <p class="featured">${hotdeals[index].featured}</p>
                    <p class="discount">${hotdeals[index].discount}</p>
                </div>
                <div class="l-icons" style="visibility: hidden";>
                    <i class='bx bx-heart' ></i>
                    <i class='bx bx-low-vision'></i>
                    <i class='bx bx-revision' ></i>
                </div>
                <div class="image">
                    <img src="${hotdeals[index].image}" alt="">
                </div>
                <i class='bx bx-cart' style="visibility: hidden";></i>
                <p class="description">${hotdeals[index].description}</p>
                <p class="price"><span class="first-price">Ksh${hotdeals[index].firstprice}</span><span style="visibility: hidden";>0</span>Ksh${hotdeals[index].secondprice}</p>`;
                advertsizeContainer.appendChild(advertsizePoduct);
});



//section new arrivals
const newarrivals = [
    {
        id: 100,
        featured: "FEATURED",
        discount: "SALE",
        description: "1PCs Baofeng U...",
        firstprice: 400.00,
        secondprice: 150.00,
        image: "images/new arrival1.jpg",
    },
    {
        id: 101,
        featured: "FEATURED",
        discount: "SALE",
        description: "Multi-functional Safet...",
        firstprice: 3500.00,
        secondprice: 2500.00,
        image: "images/new arrival2.png",
    },
    {
        id: 102,
        featured: "FEATURED",
        discount: "SALE",
        description: "High Quality Double Dog...",
        firstprice: 2000.00,
        secondprice: 1199.00,
        image: "images/new arrival3.jpg",
    },
    {
        id: 103,
        featured: "FEATURED",
        discount: "SALE",
        description: "Tactical Soft Shell Waterp...",
        firstprice: 6000.00,
        secondprice: 4500.00,
        image: "images/new arrival5.jpg",
    },
    {
        id: 104,
        featured: "FEATURED",
        discount: "SALE",
        description: "High Quality Spandex...",
        firstprice: 4500.00,
        secondprice: 4000.00,
        image: "images/new arrival4.jpg",
    },
    {
        id: 105,
        featured: "FEATURED",
        discount: "SALE",
        description: "REMAX-RPP 550",
        firstprice: 4200.00,
        secondprice: 3500.00,
        image: "images/new arrival6.jpg",
    },
    {
        id: 106,
        featured: "FEATURED",
        discount: "SALE",
        description: "Lightweight Multi Pocket",
        firstprice: 3500.00,
        secondprice: 2800.00,
        image: "images/new arrival7.png",
    },
    {
        id: 107,
        featured: "FEATURED",
        discount: "SALE",
        description: "3 Len Tactical Goggle..",
        firstprice: 5000.00,
        secondprice: 3499.00,
        image: "images/new arrival8.png",
    },
    {
        id: 108,
        featured: "FEATURED",
        discount: "SALE",
        description: "Baofeng UV82 3800MaH",
        firstprice: 10500.00,
        secondprice: 7000.00,
        image: "images/new arrival9.png",
    }
]

const newarrivalsContainer = document.querySelector('.newarrivalsContainer');
newarrivalsContainer.innerHTML = "";

newarrivals.forEach((arrival, index)=>{
    newarrivalProduct = document.createElement('div');
    newarrivalProduct.className = ".newarrivalsContainer banner";
    newarrivalProduct.innerHTML = `
                <div class="ftre">
                    <p class="featured" style="visibility: hidden";>${newarrivals[index].featured}</p>
                    <p class="discount">${-(((newarrivals[index].firstprice - newarrivals[index].secondprice) / newarrivals[index].firstprice) * 100).toFixed(0)}%</p>
                </div>
                <div class="l-icons" style="visibility: hidden";>
                    <i class='bx bx-heart' ></i>
                    <i class='bx bx-low-vision'></i>
                    <i class='bx bx-revision' ></i>
                </div>
                <div class="image">
                    <img src="${newarrivals[index].image}" alt="">
                </div>
                <i class='bx bx-cart' style="visibility: hidden";></i>
                <p class="description">${newarrivals[index].description}</p>
                <p class="price"><span class="first-price">Ksh${newarrivals[index].firstprice}</span><span style="visibility: hidden";>0</span>Ksh${newarrivals[index].secondprice}</p>`;
                newarrivalsContainer.appendChild(newarrivalProduct);
})



let carts = [];
const listCart = document.querySelector('.listCart');





//section  clothing
const clothingItems = [
    {
        id: 200,
        featured: "FEATURED",
        discount: "SALE",
        description: "Light Weight Multipocket",
        firstprice: 3500.00,
        secondprice: 2800.00,
        image: "images/clothing1.png",
    },
    {
        id: 201,
        featured: "FEATURED",
        discount: "SALE",
        description: "IX7 Tactical Cargo Pants CP",
        firstprice: 4500.00,
        secondprice: 3500.00,
        image: "images/clothing3.jpg",
    },
    {
        id: 202,
        featured: "FEATURED",
        discount: "SALE",
        description: "High Quality Spandex Tactical",
        firstprice: 4500.00,
        secondprice: 4000.00,
        image: "images/clothing2.jpg",
    },
    {
        id: 203,
        featured: "FEATURED",
        discount: "SALE",
        description: "High Quality Spandex Tactical",
        firstprice: 4500.00,
        secondprice: 4000.00,
        image: "images/clothing4.jpg",
    },
    {
        id: 204,
        featured: "FEATURED",
        discount: "SALE",
        description: "High Quality Spandex Tactical",
        firstprice: 4500.00,
        secondprice: 4000.00,
        image: "images/clothing5.jpg",
    },
    {
        id: 205,
        featured: "FEATURED",
        discount: "SALE",
        description: "High Quality Spandex Tactical",
        firstprice: 4500.00,
        secondprice: 4000.00,
        image: "images/clothing6.jpg",
    },
    {
        id: 206,
        featured: "FEATURED",
        discount: "SALE",
        description: "Tactical Waterproof Jacket",
        firstprice: 6000.00,
        secondprice: 4500.00,
        image: "images/clothing7.jpg",
    },
    {
        id: 207,
        featured: "FEATURED",
        discount: "SALE",
        description: "Pave Round Hawk Tactical Jacket",
        firstprice: 3500.00,
        secondprice: 2500.00,
        image: "images/clothing8.jpg",
    }
]


const clothingItemsContainer = document.querySelector('.clothingsectionContainer');
const cartContainer = document.querySelector('.listCart'); // Replace with your cart container class or ID
let cartItems = []; // To track items added to the cart

clothingItemsContainer.innerHTML = "";

clothingItems.forEach((clothingItem) => {
    const clothProduct = document.createElement('div');
    clothProduct.className = "product";
    clothProduct.dataset.id = clothingItem.id;
    clothProduct.innerHTML = `
        <div class="ftre">
            <p class="discount">-${(((clothingItem.firstprice - clothingItem.secondprice) / clothingItem.firstprice) * 100).toFixed(0)}%</p>
        </div>
        <div class="l-icons">
            <i class='bx bx-heart'></i>
        </div>
        <div class="image">
            <img src="${clothingItem.image}" alt="${clothingItem.description}">
        </div>
        <i class='bx bx-cart'></i>
        <p class="description">${clothingItem.description}</p>
        <p class="price">
            <span class="first-price">Ksh${clothingItem.firstprice}</span><span style="visibility: hidden;">0</span> Ksh${clothingItem.secondprice}
        </p>
    `;

    const wishIcon = clothProduct.querySelector('.bx-heart');
    wishIcon.addEventListener('click',()=>{
        clothProduct.classList.toggle('active');
        wishIcon.classList.toggle('active');
    })

    // Add event listener to the cart icon
    const cartIcon = clothProduct.querySelector('.bx-cart');
    cartIcon.addEventListener('click', () => {
        addToCart(clothingItem);
    });

    clothingItemsContainer.appendChild(clothProduct);
});

// Function to add item to the cart
function addToCart(item) {
    
    // Check if item is already in the cart
    const existingItem = cartItems.find(cartItem => cartItem.id === item.id);

    if (existingItem) {
        // Increment quantity if the item is already in the cart
        existingItem.quantity += 1;
        alert(`${item.description} already in cart`)
    } else {
        // Add new item to the cart
        cartItems.push({ ...item, quantity: 1 });
        alert(`${item.description} added to cart`)
    }

    renderCart();
    addCarttoMemory();
}

if(localStorage.getItem('cart')){
    cartItems = JSON.parse(localStorage.getItem('cart'));
    renderCart();
}

//memory
function addCarttoMemory(){
    localStorage.setItem('cart', JSON.stringify(cartItems))
}


// Function to render cart items
function renderCart() {

    cartContainer.innerHTML = ""; // Clear the cart before re-rendering
    let totals = 0;

    cartItems.forEach((cartItem) => {
        const cartElement = document.createElement('div');
        cartElement.className = "item";
        cartElement.innerHTML = `
            <div class="image">
                <img src="${cartItem.image}" alt="${cartItem.description}">
            </div>
            <div class="name">
                <p>${cartItem.description}</p>
            </div>
            <div class="totalPrice">
                <p>${(cartItem.secondprice * cartItem.quantity).toFixed(0)}</p>
            </div>
            <div class="quantity">
                <span class="minus">-</span>
                <span>${cartItem.quantity}</span>
                <span class="plus">+</span>
            </div>
        `;
        
        const cartHead  = document.getElementById('cartHead');
        // Calculate the total price for each item and add to the total
        totals += cartItem.secondprice * cartItem.quantity;
        
        cartHead.innerHTML = totals;

        // Add event listeners for quantity adjustment
        const minusButton = cartElement.querySelector('.minus');
        const plusButton = cartElement.querySelector('.plus');

        minusButton.addEventListener('click', () => {
            updateQuantity(cartItem.id, -1);
            addCarttoMemory();
        });

        plusButton.addEventListener('click', () => {
            updateQuantity(cartItem.id, 1);
            addCarttoMemory();
        });
        

        cartContainer.appendChild(cartElement);

    });
    
}

// Function to update quantity
function updateQuantity(itemId, change) {
    const cartItem = cartItems.find(item => item.id === itemId);

    if (cartItem) {
        cartItem.quantity += change;

        if (cartItem.quantity <= 0) {
            // Remove item if quantity is 0 or less
            cartItems = cartItems.filter(item => item.id !== itemId);
            addCarttoMemory();
        }

        renderCart();
    }
}



//clothing accessories
const clothingAccessories = [
    {
        id: 300,
        featured: "FEATURED",
        discount: "SALE",
        description: "3 Lens Tactical Goggles",
        firstprice: 5000.00,
        secondprice: 3499.00,
        image: "images/clothingaccessory1.png",
    },
    {
        id: 301,
        featured: "FEATURED",
        discount: "SALE",
        description: "Oudoor Tactical Adjustable",
        firstprice: 2500.00,
        secondprice: 1500.00,
        image: "images/clothingaccessory2.png",
    },
    {
        id: 302,
        featured: "FEATURED",
        discount: "SALE",
        description: "High Quality Double Chain",
        firstprice: 2000.00,
        secondprice: 1199.00,
        image: "images/clothingaccessory3.jpg",
    },
    {
        id: 303,
        featured: "FEATURED",
        discount: "SALE",
        description: "Breathable Handgloves",
        firstprice: 3500.00,
        secondprice: 1800.00,
        image: "images/clothingaccessory4.jpg",
    },
    {
        id: 304,
        featured: "FEATURED",
        discount: "SALE",
        description: "Fashionable Heavy Duty Belt",
        firstprice: 3500.00,
        secondprice: 2000.00,
        image: "images/clothingaccessory5.jpg",
    },
    {
        id: 305,
        featured: "FEATURED",
        discount: "SALE",
        description: "Leather Half Finger",
        firstprice: 3500.00,
        secondprice: 1800.00,
        image: "images/clothingaccessory6.jpg",
    },
    {
        id: 306,
        featured: "FEATURED",
        discount: "SALE",
        description: "Tactical One Point Adjust",
        firstprice: 3500.00,
        secondprice: 2500.00,
        image: "images/clothingaccessory7.png",
    },
    {
        id: 307,
        featured: "FEATURED",
        discount: "SALE",
        description: "New Mesh Punisher",
        firstprice: 3000.00,
        secondprice: 1500.00,
        image: "images/clothingaccessory8.png",
    },
    {
        id: 308,
        featured: "FEATURED",
        discount: "SALE",
        description: "New Mesh Punisher Brown",
        firstprice: 3500.00,
        secondprice: 2500.00,
        image: "images/clothingaccessory9.png",
    },
    {
        id: 309,
        featured: "FEATURED",
        discount: "SALE",
        description: "High Quality Fullfinger",
        firstprice: 3800.00,
        secondprice: 2000.00,
        image: "images/clothingaccessory10.png",
    }

]

const clothingaccessoriesContainer = document.querySelector('.clothingaccessoriesContainer');
clothingaccessoriesContainer.innerHTML = "";

clothingAccessories.forEach((clothingAccessory)=>{
    const clothingaccessoryProduct = document.createElement('div');
    clothingaccessoryProduct.className = "product";
    clothingaccessoryProduct.dataset.id = clothingAccessory.id;
    clothingaccessoryProduct.innerHTML = `
        <div class="ftre">
            <p class="discount">-${(((clothingAccessory.firstprice - clothingAccessory.secondprice) / clothingAccessory.firstprice) * 100).toFixed(0)}%</p>
        </div>
        <div class="l-icons">
            <i class='bx bx-heart'></i>
        </div>
        <div class="image">
            <img src="${clothingAccessory.image}" alt="${clothingAccessory.description}">
        </div>
        <i class='bx bx-cart'></i>
        <p class="description">${clothingAccessory.description}</p>
        <p class="price">
            <span class="first-price">Ksh${clothingAccessory.firstprice}</span> <span style="visibility: hidden;">0</span> Ksh${clothingAccessory.secondprice}
        </p>
    `;
    const cartIcon = clothingaccessoryProduct.querySelector('.bx-cart');
    cartIcon.addEventListener('click', () => {
        addToCart(clothingAccessory);
    });

    clothingaccessoriesContainer.appendChild(clothingaccessoryProduct);
})




//section wrist watch products
const wristWatches = [
    {
        id: 400,
        featured: "FEATURED",
        discount: "SALE",
        description: "Spovan Bravo 2S",
        firstprice: 6800.00,
        secondprice: 5500.00,
        image: "images/watch3.jpg",
    },
    {
        id: 401,
        featured: "FEATURED",
        discount: "SALE",
        description: "SKMEI Fashion Sport",
        firstprice: 6800.00,
        secondprice: 5500.00,
        image: "images/watch11.jpg",
    },
    {
        id:402,
        featured: "FEATURED",
        discount: "SALE",
        description: "SKMEI Fashion Sport",
        firstprice: 3500.00,
        secondprice: 2399.00,
        image: "images/watch3.jpg",
    },
    {
        id: 403,
        featured: "FEATURED",
        discount: "SALE",
        description: "Fashion Sport White",
        firstprice: 3500.00,
        secondprice: 2399.00,
        image: "images/watch4.jpg",
    },
    {
        id: 404,
        featured: "FEATURED",
        discount: "SALE",
        description: "SKMEI Fashion Sport",
        firstprice: 3500.00,
        secondprice: 2399.00,
        image: "images/watch6.jpg",
    },
    {
        id: 405,
        featured: "FEATURED",
        discount: "SALE",
        description: "Fossil Men Townsman",
        firstprice: 24500.00,
        secondprice: 19999.00,
        image: "images/watch5.jpg",
    },
    {
        id: 406,
        featured: "FEATURED",
        discount: "SALE",
        description: "Spovan PR1",
        firstprice: 3500.00,
        secondprice: 2800.00,
        image: "images/watch7.jpg",
    },
    {
        id: 407,
        featured: "FEATURED",
        discount: "SALE",
        description: "Spovan SP710",
        firstprice: 5500.00,
        secondprice: 4500.00,
        image: "images/watch8.png",
    },
    {
        id: 408,
        featured: "FEATURED",
        discount: "SALE",
        description: "Casio Vintage A168",
        firstprice: 13500.00,
        secondprice: 9999.00,
        image: "images/watch10.jpg",
    },
    {
        id: 409,
        featured: "FEATURED",
        discount: "SALE",
        description: "Fossil Women's",
        firstprice: 27000.00,
        secondprice: 22000.00,
        image: "images/watch12.jpg",
    },
    {
        id: 410,
        featured: "FEATURED",
        discount: "SALE",
        description: "Spovan SPV 710",
        firstprice: 5500.00,
        secondprice: 4500.00,
        image: "images/watch1.jpg",
    },
    {
        id: 411,
        featured: "FEATURED",
        discount: "SALE",
        description: "Fossil Townsman",
        firstprice: 24500.00,
        secondprice: 19999.00,
        image: "images/watch2.jpg",
    }

]

const wristwatchesContainer = document.querySelector('.watchesContainer');

wristwatchesContainer.innerHTML = "";
wristWatches.forEach((watch)=>{
    const watchProduct = document.createElement('div');
    watchProduct.className = "product";
    watchProduct.dataset.id = watch.id;
    watchProduct.innerHTML = `
        <div class="ftre">
            <p class="discount">-${(((watch.firstprice - watch.secondprice) / watch.firstprice) * 100).toFixed(0)}%</p>
        </div>
        <div class="l-icons">
            <i class='bx bx-heart'></i>
        </div>
        <div class="image">
            <img src="${watch.image}" alt="${watch.description}">
        </div>
        <i class='bx bx-cart'></i>
        <p class="description">${watch.description}</p>
        <p class="price">
            <span class="first-price">Ksh${watch.firstprice}</span> <span style="visibility: hidden;">0</span> Ksh${watch.secondprice}
        </p>
    `;
    const cartIcon = watchProduct.querySelector('.bx-cart');
    cartIcon.addEventListener('click', () => {
        addToCart(watch);
    });

    wristwatchesContainer.appendChild(watchProduct);
})




//section bags
const bags = [
    {
        id: 500,
        featured: "FEATURED",
        discount: "SALE",
        description: "Chest Sling Bag",
        firstprice: 3500.00,
        secondprice: 2400.00,
        image: "images/bag1.jpg",
    },
    {
        id: 501,
        featured: "FEATURED",
        discount: "SALE",
        description: "Light Weight Hydration",
        firstprice: 5000.00,
        secondprice: 2800.00,
        image: "images/bag2.png",
    },
    {
        id: 502,
        featured: "FEATURED",
        discount: "SALE",
        description: "50l Waterproof",
        firstprice: 6500.00,
        secondprice: 4000.00,
        image: "images/bag3.png",
    },
    {
        id: 503,
        featured: "FEATURED",
        discount: "SALE",
        description: "35l Multipurpose Durf",
        firstprice: 5000.00,
        secondprice: 3800.00,
        image: "images/bag4.jpg",
    },
    {
        id: 504,
        featured: "FEATURED",
        discount: "SALE",
        description: "Tactical Chestsling",
        firstprice: 3500.00,
        secondprice: 2400.00,
        image: "images/bag5.jpg",
    },
    {
        id: 505,
        featured: "FEATURED",
        discount: "SALE",
        description: "Chestsling Bag",
        firstprice: 3500.00,
        secondprice: 2400.00,
        image: "images/bag6.jpg",
    },
    {
        id: 506,
        featured: "FEATURED",
        discount: "SALE",
        description: "Chestsling Bag",
        firstprice: 3500.00,
        secondprice: 2400.00,
        image: "images/bag7.jpg",
    },
    {
        id: 507,
        featured: "FEATURED",
        discount: "SALE",
        description: "Outdoor Waterproof",
        firstprice: 4500.00,
        secondprice: 3500.00,
        image: "images/bag8.jpg",
    },
    {
        id: 508,
        featured: "FEATURED",
        discount: "SALE",
        description: "Waterproof Pouch",
        firstprice: 2500.00,
        secondprice: 1700.00,
        image: "images/bag10.jpg",
    },
    {
        id: 509,
        featured: "FEATURED",
        discount: "SALE",
        description: "Outdoor Bag",
        firstprice: 4500.00,
        secondprice: 3500.00,
        image: "images/bag9.jpg",
    },
    {
        id: 510,
        featured: "FEATURED",
        discount: "SALE",
        description: "3L Water Bladder",
        firstprice: 3500.00,
        secondprice: 2500.00,
        image: "images/bag11.jpg",
    },
    {
        id: 511,
        featured: "FEATURED",
        discount: "SALE",
        description: "Chest Rig Bag",
        firstprice: 3300.00,
        secondprice: 2300.00,
        image: "images/bag12.jpg",
    }

]

const bagsContainer = document.querySelector('.bagsContainer');
bagsContainer.innerHTML = "";

bags.forEach((bag)=>{
    const bagProduct = document.createElement('div');
    bagProduct.className = "product";
    bagProduct.dataset.id = bag.id;
    bagProduct.innerHTML = `
        <div class="ftre">
            <p class="discount">-${(((bag.firstprice - bag.secondprice) / bag.firstprice) * 100).toFixed(0)}%</p>
        </div>
        <div class="l-icons">
            <i class='bx bx-heart'></i>
        </div>
        <div class="image">
            <img src="${bag.image}" alt="${bag.description}">
        </div>
        <i class='bx bx-cart'></i>
        <p class="description">${bag.description}</p>
        <p class="price">
            <span class="first-price">Ksh${bag.firstprice}</span><span style="visibility: hidden;">0</span> Ksh${bag.secondprice}
        </p>
    `;
    const cartIcon = bagProduct.querySelector('.bx-cart');
    cartIcon.addEventListener('click', () => {
        addToCart(bag);
    });

    bagsContainer.appendChild(bagProduct);
})





//section accessories
accessories = [
    {
        id: 600,
        featured: "FEATURED",
        discount: "SALE",
        description: "Remax RPP-550",
        firstprice: 4200.00,
        secondprice: 3500.00,
        image: "images/accessory1.jpg",
    },
    {
        id: 601,
        featured: "FEATURED",
        discount: "SALE",
        description: "Remax RPP-550",
        firstprice: 4200.00,
        secondprice: 3500.00,
        image: "images/accessory2.jpg",
    },
    {
        id: 602,
        featured: "FEATURED",
        discount: "SALE",
        description: "Onoedio Pro-M Wireless",
        firstprice: 7500.00,
        secondprice: 6500.00,
        image: "images/accessory3.jpg",
    },
    {
        id: 603,
        featured: "FEATURED",
        discount: "SALE",
        description: "X-55 Wireless Earphones",
        firstprice: 2999.00,
        secondprice: 1999.00,
        image: "images/accessory4.jpg",
    },
    {
        id: 604,
        featured: "FEATURED",
        discount: "SALE",
        description: "Baofeng UV82",
        firstprice: 10500.00,
        secondprice: 7000.00,
        image: "images/accessory5.png",
    },
    {
        id: 605,
        featured: "FEATURED",
        discount: "SALE",
        description: "Baofeng UV5R",
        firstprice: 6000.00,
        secondprice: 4500.00,
        image: "images/accessory6.png",
    },
    {
        id: 606,
        featured: "FEATURED",
        discount: "SALE",
        description: "Baofeng UV5R",
        firstprice: 10500.00,
        secondprice: 7000.00,
        image: "images/accessory7.jpg",
    },
    {
        id: 607,
        featured: "FEATURED",
        discount: "SALE",
        description: "Baofeng Dual Band",
        firstprice: 6000.00,
        secondprice: 4500.00,
        image: "images/accessory8.jpg",
    },
    {
        id: 608,
        featured: "FEATURED",
        discount: "SALE",
        description: "Baofeng UV5R",
        firstprice: 6000.00,
        secondprice: 4500.00,
        image: "images/accessory9.jpg",
    }
]

const accessoriesContainer = document.querySelector('.accessoriesContainer');
accessoriesContainer.innerHTML = "";

accessories.forEach((accessory)=>{
    const accessoryProduct = document.createElement('div');
    accessoryProduct.className = "product";
    accessoryProduct.dataset.id = accessory.id;
    accessoryProduct.innerHTML = `
        <div class="ftre">
            <p class="discount">-${(((accessory.firstprice - accessory.secondprice) / accessory.firstprice) * 100).toFixed(0)}%</p>
        </div>
        <div class="l-icons">
            <i class='bx bx-heart'></i>
        </div>
        <div class="image">
            <img src="${accessory.image}" alt="${accessory.description}">
        </div>
        <i class='bx bx-cart'></i>
        <p class="description">${accessory.description}</p>
        <p class="price">
            <span class="first-price">Ksh${accessory.firstprice}</span><span style="visibility: hidden;">0</span> Ksh${accessory.secondprice}
        </p>
    `;
    const cartIcon = accessoryProduct.querySelector('.bx-cart');
    cartIcon.addEventListener('click', () => {
        addToCart(accessory);
    });

    accessoriesContainer.appendChild(accessoryProduct);
})



//section camping gear
const camping = [
    {
        id: 700,
        featured: "FEATURED",
        discount: "SALE",
        description: "Outdoor Foldable Bed",
        firstprice: 10000.00,
        secondprice: 8500.00,
        image: "images/camping1.jpg",
    },
    {
        id: 701,
        featured: "FEATURED",
        discount: "SALE",
        description: "Outdoor Foldable Chair",
        firstprice: 3500.00,
        secondprice: 2700.00,
        image: "images/camping2.jpg",
    },
    {
        id: 702,
        featured: "FEATURED",
        discount: "SALE",
        description: "Survival Kit",
        firstprice: 7000.00,
        secondprice: 5500.00,
        image: "images/camping3.png",
    },
    {
        id: 703,
        featured: "FEATURED",
        discount: "SALE",
        description: "Double ARC Lighter",
        firstprice: 2800.00,
        secondprice: 2200.00,
        image: "images/camping4.png",
    },
    {
        id: 704,
        featured: "FEATURED",
        discount: "SALE",
        description: "Sleeping Bag",
        firstprice: 6200.00,
        secondprice: 5000.00,
        image: "images/camping5.jpg",
    },
    {
        id: 705,
        featured: "FEATURED",
        discount: "SALE",
        description: "Inflateble Sleeping Mat",
        firstprice: 10000.00,
        secondprice: 8500.00,
        image: "images/camping6.jpg",
    },
    {
        id: 706,
        featured: "FEATURED",
        discount: "SALE",
        description: "Waterproof Tent",
        firstprice: 7000.00,
        secondprice: 6000.00,
        image: "images/camping7.jpg",
    }
]

const campingContainer = document.querySelector('.campinggearContainer');
campingContainer.innerHTML = "";

camping.forEach((camp)=>{
    const campingProduct = document.createElement('div');
    campingProduct.className = "product";
    campingProduct.dataset.id = camp.id;
    campingProduct.innerHTML = `
        <div class="ftre">
            <p class="discount">-${(((camp.firstprice - camp.secondprice) / camp.firstprice) * 100).toFixed(0)}%</p>
        </div>
        <div class="l-icons">
            <i class='bx bx-heart'></i>
        </div>
        <div class="image">
            <img src="${camp.image}" alt="${camp.description}">
        </div>
        <i class='bx bx-cart'></i>
        <p class="description">${camp.description}</p>
        <p class="price">
            <span class="first-price">Ksh${camp.firstprice}</span><span style="visibility: hidden;">0</span> Ksh${camp.secondprice}
        </p>
    `;
    const cartIcon = campingProduct.querySelector('.bx-cart');
    cartIcon.addEventListener('click', () => {
        addToCart(camp);
    });

    campingContainer.appendChild(campingProduct);
})





//section boots
const boots = [
    {
        id: 800,
        featured: "FEATURED",
        discount: "SALE",
        description: "Hiking boots",
        firstprice: 5500.00,
        secondprice: 3499.00,
        image: "images/boot1.jpg",
    },
    {
        id: 801,
        featured: "FEATURED",
        discount: "SALE",
        description: "Desert Waterproof",
        firstprice: 7500.00,
        secondprice: 6000.00,
        image: "images/boot2.jpg",
    },
    {
        id: 802,
        featured: "FEATURED",
        discount: "SALE",
        description: "Lowa Desert Waterproof",
        firstprice: 7500.00,
        secondprice: 6000.00,
        image: "images/boot3.jpg",
    },
    {
        id: 803,
        featured: "FEATURED",
        discount: "SALE",
        description: "Lowa Desert Waterproof",
        firstprice: 7500.00,
        secondprice: 6000.00,
        image: "images/boot4.jpg",
    },
    {
        id: 804,
        featured: "FEATURED",
        discount: "SALE",
        description: "Siwar Desert Waterproof",
        firstprice: 5500.00,
        secondprice: 3499.00,
        image: "images/boot5.png",
    },
    {
        id: 805,
        featured: "FEATURED",
        discount: "SALE",
        description: "Lowa Desert Waterproof",
        firstprice: 7500.00,
        secondprice: 6000.00,
        image: "images/boot6.jpg",
    },
    {
        id: 806,
        featured: "FEATURED",
        discount: "SALE",
        description: "Low Cut Desert Boot",
        firstprice: 6500.00,
        secondprice: 5500.00,
        image: "images/boot7.jpg",
    },
    {
        id: 807,
        featured: "FEATURED",
        discount: "SALE",
        description: "5.11 Tactical Series",
        firstprice: 6500.00,
        secondprice: 5500.00,
        image: "images/boot8.jpg",
    },
    {
        id: 808,
        featured: "FEATURED",
        discount: "SALE",
        description: "Low Cut Tactical Series",
        firstprice: 6500.00,
        secondprice: 5500.00,
        image: "images/boot9.jpg",
    },
    {
        id: 809,
        featured: "FEATURED",
        discount: "SALE",
        description: "5.11 Tactical Series",
        firstprice: 6500.00,
        secondprice: 5500.00,
        image: "images/boot10.jpg",
    },
    {
        id: 810,
        featured: "FEATURED",
        discount: "SALE",
        description: "Low Cut Tactical Series",
        firstprice: 6500.00,
        secondprice: 5500.00,
        image: "images/boot11.jpg",
    },
    {
        id: 811,
        featured: "FEATURED",
        discount: "SALE",
        description: "Lowa Desert Waterproof",
        firstprice: 6500.00,
        secondprice: 5500.00,
        image: "images/boot12.jpg",
    },
    {
        id: 812,
        featured: "FEATURED",
        discount: "SALE",
        description: "Lowa Desert Waterproof",
        firstprice: 6500.00,
        secondprice: 5500.00,
        image: "images/boot13.jpg",
    }
]

const bootsContainer = document.querySelector('.bootsContainer');
bootsContainer.innerHTML = "";

boots.forEach((boot)=>{
    const bootProduct = document.createElement('div');
    bootProduct.className = "product";
    bootProduct.innerHTML = `
        <div class="ftre">
            <p class="discount">-${(((boot.firstprice - boot.secondprice) / boot.firstprice) * 100).toFixed(0)}%</p>
        </div>
        <div class="l-icons">
            <i class='bx bx-heart'></i>
        </div>
        <div class="image">
            <img src="${boot.image}" alt="${boot.description}">
        </div>
        <i class='bx bx-cart'></i>
        <p class="description">${boot.description}</p>
        <p class="price">
            <span class="first-price">Ksh${boot.firstprice}</span><span style="visibility: hidden;">0</span> Ksh${boot.secondprice}
        </p>
    `;
    const cartIcon = bootProduct.querySelector('.bx-cart');
    cartIcon.addEventListener('click', () => {
        addToCart(boot);
    });

    bootsContainer.appendChild(bootProduct);
})






//delivery details form
const toCheckout = document.querySelector('.checkOut');
const form = document.querySelector('.delivery-form');
toCheckout.addEventListener('click', ()=>{
    form.classList.add('active');
})

const checkoutBtn = document.querySelector('.check-out');
checkoutBtn.addEventListener('click', ()=>{
    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const address = document.getElementById('address').value.trim();

    if (!name || !phone || !address) {
        alert('Please fill out all delivery details.');
        return;
    }

    if (cartItems.length === 0) {
        alert('Your cart is empty! Please add items to your cart.');
        return;
    }

    //cart details
    const cartDetails = cartItems.map(item => ({
        description: item.description,
        quantity: item.quantity,
        price: item.secondprice,
        total: item.quantity * item.secondprice
    }));
    
    //time stamp
    const now = new Date();
    const timestamp = now.toLocaleString('en-KE', { timeZone: 'Africa/Nairobi' });
    
    //order data
    const grandTotal = cartDetails.reduce((sum, item) => sum + item.total, 0);
    const orderData = {
        customer: { name, phone, address },
        cart: cartDetails,
        grandTotal,
        timestamp
    };

    // Format message for email
    let message = `Customer Order Details:\n\n`;
    message += `Timestamp: ${timestamp}\n`;
    message += `Name: ${name}\nPhone: ${phone}\nAddress: ${address}\n\n`;
    cartDetails.forEach((item, index) => {
        message += `${index + 1}. ${item.description}\n   Quantity: ${item.quantity}\n   Price: Ksh${item.price}\n   Total: Ksh${item.total}\n\n`;
    });
    message += `Grand Total: Ksh${grandTotal}`;

    // Send the order
    emailjs.send("service_u8xo7wm","template_bovgtmh",{
        name: name,
        message: message,
        })
        .then(response => {
            alert('Your order has been sent');
            localStorage.setItem('cart', JSON.stringify([]));
            document.querySelector('.delivery-form').reset();
        }).catch(error => {
            alert('Failed to send order. Please try again.');
            console.error('Email send error', error);
        });
})









