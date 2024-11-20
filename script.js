//showing and disappearing wishlist box
const wishShow = document.querySelector('.wish-show');
const wishBox = document.querySelector('.wishlist');
const wishcloseBtn = document.querySelector('.wishclose');
wishcloseBtn.addEventListener('click', ()=>{
    wishBox.classList.toggle('active');
})
wishShow.addEventListener('click', ()=>{
    wishBox.classList.toggle('active');
})
console.log(wishBox)

//showing and hiding search div
const searchIcon = document.querySelector('.search .bx-search');
const searchContainer = document.querySelector('.search');
searchIcon.addEventListener('click', ()=>{
    searchContainer.classList.toggle('active');
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


//section  clothing
const clothingItems = [
    {
        id: 1,
        featured: "FEATURED",
        discount: "SALE",
        description: "Light Weight Multipocket",
        firstprice: 3500.00,
        secondprice: 2800.00,
        image: "images/clothing1.png",
    },
    {
        id: 2,
        featured: "FEATURED",
        discount: "SALE",
        description: "IX7 Tactical Cargo Pants CP",
        firstprice: 4500.00,
        secondprice: 3500.00,
        image: "images/clothing3.jpg",
    },
    {
        id: 3,
        featured: "FEATURED",
        discount: "SALE",
        description: "High Quality Spandex Tactical",
        firstprice: 4500.00,
        secondprice: 4000.00,
        image: "images/clothing2.jpg",
    },
    {
        id: 4,
        featured: "FEATURED",
        discount: "SALE",
        description: "High Quality Spandex Tactical",
        firstprice: 4500.00,
        secondprice: 4000.00,
        image: "images/clothing4.jpg",
    },
    {
        id: 5,
        featured: "FEATURED",
        discount: "SALE",
        description: "High Quality Spandex Tactical",
        firstprice: 4500.00,
        secondprice: 4000.00,
        image: "images/clothing5.jpg",
    },
    {
        id: 6,
        featured: "FEATURED",
        discount: "SALE",
        description: "High Quality Spandex Tactical",
        firstprice: 4500.00,
        secondprice: 4000.00,
        image: "images/clothing6.jpg",
    },
    {
        id: 7,
        featured: "FEATURED",
        discount: "SALE",
        description: "Tactical Waterproof Jacket",
        firstprice: 6000.00,
        secondprice: 4500.00,
        image: "images/clothing7.jpg",
    },
    {
        id: 8,
        featured: "FEATURED",
        discount: "SALE",
        description: "Pave Round Hawk Tactical Jacket",
        firstprice: 3500.00,
        secondprice: 2500.00,
        image: "images/clothing8.jpg",
    }
]

const clothingsectionContainer = document.querySelector('.clothingsectionContainer');
clothingsectionContainer.innerHTML = "";

clothingItems.forEach((clothItem, index)=>{
    clothingitemProduct = document.createElement('div');
    clothingitemProduct.className = ".clothingsectionContainer product";
    clothingitemProduct.innerHTML = `<div class="ftre">
                    <p class="featured" style="visibility: hidden";>FEATURED</p>
                    <p class="discount">${clothingItems[index].discount}</p>
                </div>
                <div class="l-icons" style="visibility: hidden";>
                    <i class='bx bx-heart' style="visibility: visible";></i>
                    <i class='bx bx-low-vision'></i>
                    <i class='bx bx-revision' ></i>
                </div>
                <div class="image">
                    <img src="${clothingItems[index].image}" alt="">
                </div>
                <i class='bx bx-cart addCart'></i>
                <p class="description">${clothingItems[index].description}</p>
                <p class="price"><span class="first-price">Ksh${clothingItems[index].firstprice}</span><span style="visibility: hidden";>0</span>Ksh${clothingItems[index].secondprice}</p>`;
                clothingsectionContainer.appendChild(clothingitemProduct);
});



//clothing accessories
const clothingAccessories = [
    {
        id: 1,
        featured: "FEATURED",
        discount: "SALE",
        description: "3 Lens Tactical Goggles",
        firstprice: 5000.00,
        secondprice: 3499.00,
        image: "images/clothingaccessory1.png",
    },
    {
        id: 2,
        featured: "FEATURED",
        discount: "SALE",
        description: "Oudoor Tactical Adjustable",
        firstprice: 2500.00,
        secondprice: 1500.00,
        image: "images/clothingaccessory2.png",
    },
    {
        id: 3,
        featured: "FEATURED",
        discount: "SALE",
        description: "High Quality Double Chain",
        firstprice: 2000.00,
        secondprice: 1199.00,
        image: "images/clothingaccessory3.jpg",
    },
    {
        id: 4,
        featured: "FEATURED",
        discount: "SALE",
        description: "Breathable Handgloves",
        firstprice: 3500.00,
        secondprice: 1800.00,
        image: "images/clothingaccessory4.jpg",
    },
    {
        id: 5,
        featured: "FEATURED",
        discount: "SALE",
        description: "Fashionable Heavy Duty Belt",
        firstprice: 3500.00,
        secondprice: 2000.00,
        image: "images/clothingaccessory5.jpg",
    },
    {
        id: 6,
        featured: "FEATURED",
        discount: "SALE",
        description: "Leather Half Finger",
        firstprice: 3500.00,
        secondprice: 1800.00,
        image: "images/clothingaccessory6.jpg",
    },
    {
        id: 7,
        featured: "FEATURED",
        discount: "SALE",
        description: "Tactical One Point Adjust",
        firstprice: 3500.00,
        secondprice: 2500.00,
        image: "images/clothingaccessory7.png",
    },
    {
        id: 8,
        featured: "FEATURED",
        discount: "SALE",
        description: "New Mesh Punisher",
        firstprice: 3000.00,
        secondprice: 1500.00,
        image: "images/clothingaccessory8.png",
    },
    {
        id: 9,
        featured: "FEATURED",
        discount: "SALE",
        description: "New Mesh Punisher Brown",
        firstprice: 3500.00,
        secondprice: 2500.00,
        image: "images/clothingaccessory9.png",
    },
    {
        id: 10,
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

clothingAccessories.forEach((accesory, index)=>{
    clothindaccesoryProduct = document.createElement('div');
    clothindaccesoryProduct.className = ".clothingaccessoriesContainer product";
    clothindaccesoryProduct.innerHTML = `
                <div class="ftre">
                    <p class="featured" style="visibility: hidden";>FEATURED</p>
                    <p class="discount">${-(((clothingAccessories[index].firstprice - clothingAccessories[index].secondprice) / clothingAccessories[index].firstprice) * 100).toFixed(0)}%</p>
                </div>
                <div class="l-icons" style="visibility: hidden";>
                    <i class='bx bx-heart' style="visibility: visible";></i>
                    <i class='bx bx-low-vision'></i>
                    <i class='bx bx-revision' ></i>
                </div>
                <div class="image">
                    <img src="${clothingAccessories[index].image}" alt="">
                </div>
                <i class='bx bx-cart'></i>
                <p class="description">${clothingAccessories[index].description}</p>
                <p class="price"><span class="first-price">Ksh${clothingAccessories[index].firstprice}</span><span style="visibility: hidden";>0</span>Ksh${clothingAccessories[index].secondprice}</p>`;
                clothingaccessoriesContainer.appendChild(clothindaccesoryProduct);
})


//section wrist watch products
const wristWatches = [
    {
        id: 1,
        featured: "FEATURED",
        discount: "SALE",
        description: "Spovan Bravo 2S",
        firstprice: 6800.00,
        secondprice: 5500.00,
        image: "images/watch3.jpg",
    },
    {
        id: 2,
        featured: "FEATURED",
        discount: "SALE",
        description: "SKMEI Fashion Sport",
        firstprice: 6800.00,
        secondprice: 5500.00,
        image: "images/watch11.jpg",
    },
    {
        id: 3,
        featured: "FEATURED",
        discount: "SALE",
        description: "SKMEI Fashion Sport",
        firstprice: 3500.00,
        secondprice: 2399.00,
        image: "images/watch3.jpg",
    },
    {
        id: 4,
        featured: "FEATURED",
        discount: "SALE",
        description: "Fashion Sport White",
        firstprice: 3500.00,
        secondprice: 2399.00,
        image: "images/watch4.jpg",
    },
    {
        id: 5,
        featured: "FEATURED",
        discount: "SALE",
        description: "SKMEI Fashion Sport",
        firstprice: 3500.00,
        secondprice: 2399.00,
        image: "images/watch6.jpg",
    },
    {
        id: 6,
        featured: "FEATURED",
        discount: "SALE",
        description: "Fossil Men Townsman",
        firstprice: 24500.00,
        secondprice: 19999.00,
        image: "images/watch5.jpg",
    },
    {
        id: 7,
        featured: "FEATURED",
        discount: "SALE",
        description: "Spovan PR1",
        firstprice: 3500.00,
        secondprice: 2800.00,
        image: "images/watch7.jpg",
    },
    {
        id: 8,
        featured: "FEATURED",
        discount: "SALE",
        description: "Spovan SP710",
        firstprice: 5500.00,
        secondprice: 4500.00,
        image: "images/watch8.png",
    },
    {
        id: 9,
        featured: "FEATURED",
        discount: "SALE",
        description: "Casio Vintage A168",
        firstprice: 13500.00,
        secondprice: 9999.00,
        image: "images/watch10.jpg",
    },
    {
        id: 10,
        featured: "FEATURED",
        discount: "SALE",
        description: "Fossil Women's",
        firstprice: 27000.00,
        secondprice: 22000.00,
        image: "images/watch12.jpg",
    },
    {
        id: 11,
        featured: "FEATURED",
        discount: "SALE",
        description: "Spovan SPV 710",
        firstprice: 5500.00,
        secondprice: 4500.00,
        image: "images/watch1.jpg",
    },
    {
        id: 12,
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

wristWatches.forEach((wristwatch, index)=>{
    wristwatchProduct = document.createElement('div');
    wristwatchProduct.className = ".watchesContainer product";
    wristwatchProduct.innerHTML = `
                <div class="ftre">
                    <p class="featured" style="visibility: hidden";>FEATURED</p>
                    <p class="discount">${-(((wristWatches[index].firstprice - wristWatches[index].secondprice) / wristWatches[index].firstprice) * 100).toFixed(0)}%</p>
                </div>
                <div class="l-icons" style="visibility: hidden";>
                    <i class='bx bx-heart' style="visibility: visible";></i>
                    <i class='bx bx-low-vision'></i>
                    <i class='bx bx-revision' ></i>
                </div>
                <div class="image">
                    <img src="${wristWatches[index].image}" alt="">
                </div>
                <i class='bx bx-cart'></i>
                <p class="description">${wristWatches[index].description}</p>
                <p class="price"><span class="first-price">Ksh${wristWatches[index].firstprice}</span><span style="visibility: hidden";>0</span>Ksh${wristWatches[index].secondprice}</p>`;
                wristwatchesContainer.appendChild(wristwatchProduct);
});

//section bags
const bags = [
    {
        id: 1,
        featured: "FEATURED",
        discount: "SALE",
        description: "Chest Sling Bag",
        firstprice: 3500.00,
        secondprice: 2400.00,
        image: "images/bag1.jpg",
    },
    {
        id: 2,
        featured: "FEATURED",
        discount: "SALE",
        description: "Light Weight Hydration",
        firstprice: 5000.00,
        secondprice: 2800.00,
        image: "images/bag2.png",
    },
    {
        id: 3,
        featured: "FEATURED",
        discount: "SALE",
        description: "50l Waterproof",
        firstprice: 6500.00,
        secondprice: 4000.00,
        image: "images/bag3.png",
    },
    {
        id: 4,
        featured: "FEATURED",
        discount: "SALE",
        description: "35l Multipurpose Durf",
        firstprice: 5000.00,
        secondprice: 3800.00,
        image: "images/bag4.jpg",
    },
    {
        id: 5,
        featured: "FEATURED",
        discount: "SALE",
        description: "Tactical Chestsling",
        firstprice: 3500.00,
        secondprice: 2400.00,
        image: "images/bag5.jpg",
    },
    {
        id: 6,
        featured: "FEATURED",
        discount: "SALE",
        description: "Chestsling Bag",
        firstprice: 3500.00,
        secondprice: 2400.00,
        image: "images/bag6.jpg",
    },
    {
        id: 7,
        featured: "FEATURED",
        discount: "SALE",
        description: "Chestsling Bag",
        firstprice: 3500.00,
        secondprice: 2400.00,
        image: "images/bag7.jpg",
    },
    {
        id: 8,
        featured: "FEATURED",
        discount: "SALE",
        description: "Outdoor Waterproof",
        firstprice: 4500.00,
        secondprice: 3500.00,
        image: "images/bag8.jpg",
    },
    {
        id: 9,
        featured: "FEATURED",
        discount: "SALE",
        description: "Waterproof Pouch",
        firstprice: 2500.00,
        secondprice: 1700.00,
        image: "images/bag10.jpg",
    },
    {
        id: 10,
        featured: "FEATURED",
        discount: "SALE",
        description: "Outdoor Bag",
        firstprice: 4500.00,
        secondprice: 3500.00,
        image: "images/bag9.jpg",
    },
    {
        id: 11,
        featured: "FEATURED",
        discount: "SALE",
        description: "3L Water Bladder",
        firstprice: 3500.00,
        secondprice: 2500.00,
        image: "images/bag11.jpg",
    },
    {
        id: 12,
        featured: "FEATURED",
        discount: "SALE",
        description: "Chest Rig Bag",
        firstprice: 3300.00,
        secondprice: 2300.00,
        image: "images/bag12.jpg",
    }

]

const bagsectionContainer = document.querySelector('.bagsContainer');
bagsectionContainer.innerHTML = "";

bags.forEach((bag, index)=>{
    bagProduct = document.createElement('div');
    bagProduct.className = ".bagsContainer product";
    bagProduct.innerHTML = `
                <div class="ftre">
                    <p class="featured" style="visibility: hidden";>FEATURED</p>
                    <p class="discount">${-(((bags[index].firstprice - bags[index].secondprice) / bags[index].firstprice) * 100).toFixed(0)}%</p>
                </div>
                <div class="l-icons" style="visibility: hidden";>
                    <i class='bx bx-heart' style="visibility: visible";></i>
                    <i class='bx bx-low-vision'></i>
                    <i class='bx bx-revision' ></i>
                </div>
                <div class="image">
                    <img src="${bags[index].image}" alt="">
                </div>
                <i class='bx bx-cart'></i>
                <p class="description">${bags[index].description}</p>
                <p class="price"><span class="first-price">Ksh${bags[index].firstprice}</span><span style="visibility: hidden";>0</span>Ksh${bags[index].secondprice}</p>`;
                bagsectionContainer.appendChild(bagProduct);
});


//section accessories
accessories = [
    {
        id: 1,
        featured: "FEATURED",
        discount: "SALE",
        description: "Remax RPP-550",
        firstprice: 4200.00,
        secondprice: 3500.00,
        image: "images/accessory1.jpg",
    },
    {
        id: 2,
        featured: "FEATURED",
        discount: "SALE",
        description: "Remax RPP-550",
        firstprice: 4200.00,
        secondprice: 3500.00,
        image: "images/accessory2.jpg",
    },
    {
        id: 3,
        featured: "FEATURED",
        discount: "SALE",
        description: "Onoedio Pro-M Wireless",
        firstprice: 7500.00,
        secondprice: 6500.00,
        image: "images/accessory3.jpg",
    },
    {
        id: 4,
        featured: "FEATURED",
        discount: "SALE",
        description: "X-55 Wireless Earphones",
        firstprice: 2999.00,
        secondprice: 1999.00,
        image: "images/accessory4.jpg",
    },
    {
        id: 5,
        featured: "FEATURED",
        discount: "SALE",
        description: "Baofeng UV82",
        firstprice: 10500.00,
        secondprice: 7000.00,
        image: "images/accessory5.png",
    },
    {
        id: 6,
        featured: "FEATURED",
        discount: "SALE",
        description: "Baofeng UV5R",
        firstprice: 6000.00,
        secondprice: 4500.00,
        image: "images/accessory6.png",
    },
    {
        id: 7,
        featured: "FEATURED",
        discount: "SALE",
        description: "Baofeng UV5R",
        firstprice: 10500.00,
        secondprice: 7000.00,
        image: "images/accessory7.jpg",
    },
    {
        id: 8,
        featured: "FEATURED",
        discount: "SALE",
        description: "Baofeng Dual Band",
        firstprice: 6000.00,
        secondprice: 4500.00,
        image: "images/accessory8.jpg",
    },
    {
        id: 9,
        featured: "FEATURED",
        discount: "SALE",
        description: "Baofeng UV5R",
        firstprice: 6000.00,
        secondprice: 4500.00,
        image: "images/accessory9.jpg",
    }
]

const accessorysectionContainer = document.querySelector('.accessoriesContainer');
accessorysectionContainer.innerHTML = "";

accessories.forEach((accesory, index)=>{
    accessoryProduct = document.createElement('div');
    accessoryProduct.className = ".accessoriesContainer product";
    accessoryProduct.innerHTML = `
                <div class="ftre">
                    <p class="featured" style="visibility: hidden";>FEATURED</p>
                    <p class="discount">${-(((accessories[index].firstprice - accessories[index].secondprice) / accessories[index].firstprice) * 100).toFixed(0)}%</p>
                </div>
                <div class="l-icons" style="visibility: hidden";>
                    <i class='bx bx-heart' style="visibility: visible";></i>
                    <i class='bx bx-low-vision'></i>
                    <i class='bx bx-revision' ></i>
                </div>
                <div class="image">
                    <img src="${accessories[index].image}" alt="">
                </div>
                <i class='bx bx-cart'></i>
                <p class="description">${accessories[index].description}</p>
                <p class="price"><span class="first-price">Ksh${accessories[index].firstprice}</span><span style="visibility: hidden";>0</span>Ksh${accessories[index].secondprice}</p>`;
                accessorysectionContainer.appendChild(accessoryProduct);
});


//section camping gear
const camping = [
    {
        id: 1,
        featured: "FEATURED",
        discount: "SALE",
        description: "Outdoor Foldable Bed",
        firstprice: 10000.00,
        secondprice: 8500.00,
        image: "images/camping1.jpg",
    },
    {
        id: 2,
        featured: "FEATURED",
        discount: "SALE",
        description: "Outdoor Foldable Chair",
        firstprice: 3500.00,
        secondprice: 2700.00,
        image: "images/camping2.jpg",
    },
    {
        id: 3,
        featured: "FEATURED",
        discount: "SALE",
        description: "Survival Kit",
        firstprice: 7000.00,
        secondprice: 5500.00,
        image: "images/camping3.png",
    },
    {
        id: 4,
        featured: "FEATURED",
        discount: "SALE",
        description: "Double ARC Lighter",
        firstprice: 2800.00,
        secondprice: 2200.00,
        image: "images/camping4.png",
    },
    {
        id: 5,
        featured: "FEATURED",
        discount: "SALE",
        description: "Sleeping Bag",
        firstprice: 6200.00,
        secondprice: 5000.00,
        image: "images/camping5.jpg",
    },
    {
        id: 6,
        featured: "FEATURED",
        discount: "SALE",
        description: "Inflateble Sleeping Mat",
        firstprice: 10000.00,
        secondprice: 8500.00,
        image: "images/camping6.jpg",
    },
    {
        id: 7,
        featured: "FEATURED",
        discount: "SALE",
        description: "Waterproof Tent",
        firstprice: 7000.00,
        secondprice: 6000.00,
        image: "images/camping7.jpg",
    }
]

const campinggearContainer = document.querySelector('.campinggearContainer');
campinggearContainer.innerHTML = "";

camping.forEach((campItem, index)=>{
    campitemProduct = document.createElement('div');
    campitemProduct.className = ".campinggearContainer product";
    campitemProduct.innerHTML = `
                <div class="ftre">
                    <p class="featured" style="visibility: hidden";>FEATURED</p>
                    <p class="discount">${-(((camping[index].firstprice - camping[index].secondprice) / camping[index].firstprice) * 100).toFixed(0)}%</p>
                </div>
                <div class="l-icons" style="visibility: hidden";>
                    <i class='bx bx-heart' style="visibility: visible";></i>
                    <i class='bx bx-low-vision'></i>
                    <i class='bx bx-revision' ></i>
                </div>
                <div class="image">
                    <img src="${camping[index].image}" alt="">
                </div>
                <i class='bx bx-cart'></i>
                <p class="description">${camping[index].description}</p>
                <p class="price"><span class="first-price">Ksh${camping[index].firstprice}</span><span style="visibility: hidden";>0</span>Ksh${camping[index].secondprice}</p>`;
                campinggearContainer.appendChild(campitemProduct);
});


//section boots
boots = [
    {
        id: 1,
        featured: "FEATURED",
        discount: "SALE",
        description: "Hiking boots",
        firstprice: 5500.00,
        secondprice: 3499.00,
        image: "images/boot1.jpg",
    },
    {
        id: 2,
        featured: "FEATURED",
        discount: "SALE",
        description: "Desert Waterproof",
        firstprice: 7500.00,
        secondprice: 6000.00,
        image: "images/boot2.jpg",
    },
    {
        id: 3,
        featured: "FEATURED",
        discount: "SALE",
        description: "Lowa Desert Waterproof",
        firstprice: 7500.00,
        secondprice: 6000.00,
        image: "images/boot3.jpg",
    },
    {
        id: 4,
        featured: "FEATURED",
        discount: "SALE",
        description: "Lowa Desert Waterproof",
        firstprice: 7500.00,
        secondprice: 6000.00,
        image: "images/boot4.jpg",
    },
    {
        id: 5,
        featured: "FEATURED",
        discount: "SALE",
        description: "Siwar Desert Waterproof",
        firstprice: 5500.00,
        secondprice: 3499.00,
        image: "images/boot5.png",
    },
    {
        id: 6,
        featured: "FEATURED",
        discount: "SALE",
        description: "Lowa Desert Waterproof",
        firstprice: 7500.00,
        secondprice: 6000.00,
        image: "images/boot6.jpg",
    },
    {
        id: 7,
        featured: "FEATURED",
        discount: "SALE",
        description: "Low Cut Desert Boot",
        firstprice: 6500.00,
        secondprice: 5500.00,
        image: "images/boot7.jpg",
    },
    {
        id: 8,
        featured: "FEATURED",
        discount: "SALE",
        description: "5.11 Tactical Series",
        firstprice: 6500.00,
        secondprice: 5500.00,
        image: "images/boot8.jpg",
    },
    {
        id: 9,
        featured: "FEATURED",
        discount: "SALE",
        description: "Low Cut Tactical Series",
        firstprice: 6500.00,
        secondprice: 5500.00,
        image: "images/boot9.jpg",
    },
    {
        id: 10,
        featured: "FEATURED",
        discount: "SALE",
        description: "5.11 Tactical Series",
        firstprice: 6500.00,
        secondprice: 5500.00,
        image: "images/boot10.jpg",
    },
    {
        id: 11,
        featured: "FEATURED",
        discount: "SALE",
        description: "Low Cut Tactical Series",
        firstprice: 6500.00,
        secondprice: 5500.00,
        image: "images/boot11.jpg",
    },
    {
        id: 12,
        featured: "FEATURED",
        discount: "SALE",
        description: "Lowa Desert Waterproof",
        firstprice: 6500.00,
        secondprice: 5500.00,
        image: "images/boot12.jpg",
    }
]

const bootsectionContainer = document.querySelector('.bootsContainer');
bootsectionContainer.innerHTML = "";

boots.forEach((bootproduct, index)=>{
    bootproductContainer = document.createElement('div');
    bootproductContainer.className = ".bootsContainer product";
    bootsectionContainer.dataset.id =  `${boots[index].id}`;
    bootproductContainer.innerHTML = `
                <div class="ftre">
                    <p class="featured" style="visibility: hidden";>FEATURED</p>
                    <p class="discount">${-(((boots[index].firstprice - boots[index].secondprice) / boots[index].firstprice) * 100).toFixed(0)}%</p>
                </div>
                <div class="l-icons" style="visibility: hidden";>
                    <i class='bx bx-heart' style="visibility: visible";></i>
                    <i class='bx bx-low-vision'></i>
                    <i class='bx bx-revision' ></i>
                </div>
                <div class="image">
                    <img src="${boots[index].image}" alt="">
                </div>
                <i class='bx bx-cart'></i>
                <p class="description">${boots[index].description}</p>
                <p class="price"><span class="first-price">Ksh${boots[index].firstprice}</span><span style="visibility: hidden";>0</span>Ksh${boots[index].secondprice}</p>`;
                bootsectionContainer.appendChild(bootproductContainer);
});

