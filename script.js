const hotdeals = [
    {
        id: 1,
        featured: "FEATURED",
        discount: "-38%",
        description: "Air Jordan",
        firstprice: 600.00,
        secondprice: 4500.00,
        image: "images/be_yourself2-removebg-preview.png",
    },
    {
        id: 2,
        featured: "FEATURED",
        discount: "-38%",
        description: "Air Jordan",
        firstprice: 6500.00,
        secondprice: 4500.00,
        image: "/images/nion_black-removebg-preview.png",
    },
    {
        id: 3,
        featured: "FEATURED",
        discount: "-38%",
        description: "Air Jordan",
        firstprice: 6500.00,
        secondprice: 4500.00,
        image: "/images/nion_black-removebg-preview.png",
    },
    {
        id: 4,
        featured: "FEATURED",
        discount: "-38%",
        description: "Air Jordan",
        firstprice: 6500.00,
        secondprice: 4500.00,
        image: "/images/nion_black-removebg-preview.png",
    },
    {
        id: 5,
        featured: "FEATURED",
        discount: "-38%",
        description: "Air Jordan",
        firstprice: 6500.00,
        secondprice: 4500.00,
        image: "/images/nion_black-removebg-preview.png",
    },
    {
        id: 6,
        featured: "FEATURED",
        discount: "-38%",
        description: "Air Jordan",
        firstprice: 6500.00,
        secondprice: 4500.00,
        image: "/images/jordan_sneakers_white-removebg-preview.png",
    },
    {
        id: 7,
        featured: "FEATURED",
        discount: "-38%",
        description: "Air Jordan",
        firstprice: 6500.00,
        secondprice: 4500.00,
        image: "/images/jordan_sneakers_red-removebg-preview.png",
    },
    {
        id: 8,
        featured: "FEATURED",
        discount: "-38%",
        description: "Air Jordan",
        firstprice: 6500.00,
        secondprice: 4500.00,
        image: "/images/jordan_gray-removebg-preview.png",
    },
    {
        id: 9,
        featured: "FEATURED",
        discount: "-38%",
        description: "Air Jordan",
        firstprice: 6500.00,
        secondprice: 4500.00,
        image: "/images/be_yourself3-removebg-preview.png",
    },
    {
        id: 10,
        featured: "FEATURED",
        discount: "-38%",
        description: "Air Jordan",
        firstprice: 6500.00,
        secondprice: 4500.00,
        image: "/images/black tshirt.jpg",
    },
    {
        id: 11,
        featured: "FEATURED",
        discount: "-18%",
        description: "Air Jordan",
        firstprice: 500.00,
        secondprice: 450.00,
        image: "/images/jordan_black-removebg-preview.png",
    }
]

const hotdealsContainer = document.querySelector('.hotdealsContainer');
hotdealsContainer.innerHTML = '';

hotdeals.forEach((hotDeal, index)=>{
    hotdealProduct = document.createElement('div');
    hotdealProduct.className = "product";
    hotdealProduct.innerHTML = `<div class="ftre">
                    <p class="featured">${hotdeals[index].featured}</p>
                    <p class="discount">${hotdeals[index].discount}</p>
                </div>
                <div class="l-icons">
                    <i class='bx bx-heart' ></i>
                    <i class='bx bx-low-vision'></i>
                    <i class='bx bx-revision' ></i>
                </div>
                <div class="image">
                    <img src="${hotdeals[index].image}" alt="">
                </div>
                <i class='bx bx-cart'></i>
                <p class="description">${hotdeals[index].description}</p>
                <p class="price"><span class="first-price">Ksh${hotdeals[index].firstprice}</span><span style="visibility: hidden";>0</span>Ksh${hotdeals[index].secondprice}</p>
                `;
                hotdealsContainer.appendChild(hotdealProduct);
});
