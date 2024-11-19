//showing and disappearing wishlist box
const wishShow = document.querySelector('.wish-show');
const wishBox = document.querySelector('.wishlist');
const wishcloseBtn = document.querySelector('.wishclose');
wishcloseBtn.addEventListener('click', ()=>{
    wishBox.classList.toggle('active');
    wishcloseBtn.classList.toggle('active');
})
wishShow.addEventListener('click', ()=>{
    wishBox.classList.toggle('active');
})
console.log(wishBox)

//section hotdeals
const hotdeals = [
    {
        id: 1,
        featured: "FEATURED",
        discount: "SALE",
        description: "50l Waterproof...",
        firstprice: 6500.00,
        secondprice: 4000.00,
        image: "/images/hot deal1.png",
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
        image: "/images/hot deal3.jpg",
    },
    {
        id: 4,
        featured: "FEATURED",
        discount: "SALE",
        description: "High Quality M...",
        firstprice: 3000.00,
        secondprice: 1800.00,
        image: "/images/hot deal4.jpg",
    },
    {
        id: 5,
        featured: "FEATURED",
        discount: "SALE",
        description: "Siwar Tactical",
        firstprice: 5500.00,
        secondprice: 3499.00,
        image: "/images/hot deal5.jpg",
    },
    {
        id: 6,
        featured: "FEATURED",
        discount: "SALE",
        description: "Belleville Vibra",
        firstprice: 7500.00,
        secondprice: 5999.00,
        image: "/images/hot deal6.jpg",
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


/*
const hotdealsContainer = document.querySelector('.hotdealsContainer');
hotdealsContainer.innerHTML = '';


hotdeals.forEach((hotDeal, index)=>{
    hotdealProduct = document.createElement('div');
    hotdealProduct.className = ".hotdealsContainer product";
    hotdealProduct.innerHTML = `<div class="ftre">
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
                <p class="price"><span class="first-price">Ksh${hotdeals[index].firstprice}</span><span style="visibility: hidden";>0</span>Ksh${hotdeals[index].secondprice}</p>
                `;
                hotdealsContainer.appendChild(hotdealProduct);
});
*/


//section new arrivals
const newarrivals = [
    {
        id: 1,
        featured: "FEATURED",
        discount: "SALE",
        description: "1PCs Baofeng U...",
        firstprice: 400.00,
        secondprice: 150.00,
        image: "images/new arrival1.jpg",
    },
    {
        id: 2,
        featured: "FEATURED",
        discount: "SALE",
        description: "Multi-functional Safet...",
        firstprice: 3500.00,
        secondprice: 2500.00,
        image: "images/new arrival2.png",
    },
    {
        id: 3,
        featured: "FEATURED",
        discount: "SALE",
        description: "High Quality Double Dog...",
        firstprice: 2000.00,
        secondprice: 1199.00,
        image: "images/new arrival3.jpg",
    },
    {
        id: 4,
        featured: "FEATURED",
        discount: "SALE",
        description: "Tactical Soft Shell Waterp...",
        firstprice: 6000.00,
        secondprice: 4500.00,
        image: "images/new arrival5.jpg",
    },
    {
        id: 5,
        featured: "FEATURED",
        discount: "SALE",
        description: "High Quality Spandex...",
        firstprice: 4500.00,
        secondprice: 4000.00,
        image: "images/new arrival4.jpg",
    },
    {
        id: 6,
        featured: "FEATURED",
        discount: "SALE",
        description: "REMAX-RPP 550",
        firstprice: 4200.00,
        secondprice: 3500.00,
        image: "images/new arrival6.jpg",
    },
    {
        id: 7,
        featured: "FEATURED",
        discount: "SALE",
        description: "Lightweight Multi Pocket",
        firstprice: 3500.00,
        secondprice: 2800.00,
        image: "images/new arrival7.png",
    },
    {
        id: 8,
        featured: "FEATURED",
        discount: "SALE",
        description: "3 Len Tactical Goggle..",
        firstprice: 5000.00,
        secondprice: 3499.00,
        image: "images/new arrival8.png",
    },
    {
        id: 8,
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
    newarrivalProduct.className = ".newarrivalsContainer product";
    newarrivalProduct.innerHTML = `
                <div class="ftre">
                    <p class="featured" style="display: none";>FEATURED</p>
                    <p class="discount">${-(((newarrivals[index].firstprice - newarrivals[index].secondprice) / newarrivals[index].firstprice) * 100).toFixed(0)}%</p>
                </div>
                <div class="l-icons" style="visibility: hidden";>
                    <i class='bx bx-heart' style="visibility: visible";></i>
                    <i class='bx bx-low-vision'></i>
                    <i class='bx bx-revision' ></i>
                </div>
                <div class="image">
                    <img src="${newarrivals[index].image}" alt="">
                </div>
                <i class='bx bx-cart' style="display: none";></i>
                <p class="description">${newarrivals[index].description}</p>
                <p class="price"><span class="first-price">Ksh${newarrivals[index].firstprice}</span><span style="visibility: hidden";>0</span>Ksh${newarrivals[index].secondprice}</p>`;
                newarrivalsContainer.appendChild(newarrivalProduct);
})
