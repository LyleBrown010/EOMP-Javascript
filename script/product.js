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

function displayProducts(){
    const myProducts = document.getElementById("products");
    products.forEach((product) => {
        const productElement = document.createElement("div");
        productElement.innerHTML = `
        <div class="row">
        <div class="col-3 card">
        <img id="photo" src="${product.image}" alt="${product.name}">
        <h2>${product.name}</h2>
        <p>R ${product.price}</p>
        <button id="btnAddToCart" class="m-2" onclick="addToCart(${product.id})">ADD TO CART</button>
        </div>
        </div>        
        `;
        myProducts.appendChild(productElement);

    });
}
displayProducts();