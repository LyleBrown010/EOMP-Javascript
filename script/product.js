const products = [
    {
        id: 1 , 
        image: "https://i.postimg.cc/gXp1NkRr/Mountain-Sweater.jpg", 
        name:"Mountain Jumper",
        price:"500",
        category:"jumper", 
        quantity: "20"
    },
    {
        id: 2 , 
        image: "https://i.postimg.cc/c6sV3C0b/5-Panel-Forest.jpg", 
        name:"Forest Hat",
        price:"250",
        category:"hat", 
        quantity: "20"
    },
    {
        id: 3 , 
        image: "https://i.postimg.cc/xXJrdZnj/H-M-Wide-twill-trousers.jpg", 
        name:"Twill Trouser",
        price:"400",
        category:"pants", 
        quantity: "20"
    },
    {
        id: 4 , 
        image: "https://i.postimg.cc/r093bXCj/Rainbow-Sweater.jpg", 
        name:"Rainbow Jumper",
        price:"600",
        category:"jumper", 
        quantity: "20"
    },
    {
        id: 5 , 
        image: "https://i.postimg.cc/Hrfq8tkw/5-panel-north.jpg", 
        name:"North Hat",
        price:"300",
        category:"hat", 
        quantity: "20"
    },
    {
        id: 6 , 
        image: "https://i.postimg.cc/HVLDqxNy/image.jpg", 
        name:"Tree Legs",
        price:"400",
        category:"pants", 
        quantity: "20"
    }
];

function displayProducts(products){
    const myProducts = document.getElementById("products");
    myProducts.innerHTML = "";
    products.forEach((product) => {
        const productElement = document.createElement("div");
        productElement.innerHTML = `       
        <div class="card mb-3" style="max-width: 550px; height: 180px">
        <div class="row g-0">
        <div class="col-md-4" id="card">
        <img id="img" src="${product.image}" class="img-fluid rounded-start" alt="${product.name}">
        </div>
        <div class="col-md-8">
        <div class="card-body">
        <h5 class="card-title">${product.name}</h5>
        <p class="card-text">description</p>
        <p class="card-text"><small class="text-body-secondary">R ${product.price}.00</small></p>
        <button id="btnAddToCart" class="m-2" onclick="addToCart(${product.id})">ADD TO CART</button>
        </div>
        </div>
        </div>
        </div>
        `;
        myProducts.appendChild(productElement);

    });
}
displayProducts(products);

let cart = JSON.parse(localStorage.getItem("Products")) || [];

// filter by category
function filterHat(){
    let filterProducts = products.filter((product) => product.category === "hat");
    displayProducts(filterProducts)
}
function filterJumper(){
    let filterProducts = products.filter((product) => product.category === "jumper");
    displayProducts(filterProducts)
}
function filterPants(){
    let filterProducts = products.filter((product) => product.category === "pants");
    displayProducts(filterProducts)
}

function addToCart(productID){
    const product = products.find((product) => product.id === productID);

    if (product && product.quantity > 0){
        cart.push(product);
        product.quantity--;
        updateCart();
    }
}

function removeCart(index){
    let remove = cart.splice(index, 1)[0];
    remove.quantity++;
    updateCart();
}

function updateCart(){
    const cartContainer = document.getElementById("cartContainer");
    localStorage.setItem("Products", JSON.stringify(cart));
    cartContainer.innerHTML = "";
    cart.forEach((product, index) => {
        const cartItem = document.createElement("div");
        cartItem.innerHTML = `
        <span>${product.name}</span>
        <img src="${product.image}"/>
        <p>Total R ${product.price}</p>
        <button onclick="removeCart(${index})" class="rembutton">X</button>
        `;
        cartContainer.appendChild(cartItem);
    });
    calculateTotal();

};

function calculateTotal(){
    let totalElement = document.getElementById("total");
    let total = 0 
    cart.forEach(item => {
        total += eval(item.price)
    })
    totalElement.textContent = `${total}`
}
updateCart();

function checkout() {
    const modalFooter = document.querySelector(".modal-footer");
    modalFooter.innerHTML = `
      <div class="tick-animation" >
        <p>Checkout successful!</p>
      </div>
    `;
    cart = [];
    updateCart();
  }


