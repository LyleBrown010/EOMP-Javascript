// let products = JSON.parse(localStorage.getItem('products'));
// let tableBody = document.getElementById('admin'); 
// let savedProduct = document.getElementById('newProduct')

// function displayProducts() {
//     const ourProducts = document.getElementById("products");
//     products.forEach((product) => {
//       const productElement = document.createElement("div");
//       productElement.innerHTML = `
//         <img src="${product.Image}" alt="${product.name}" id="product-imgs">
//         <h3>${product.name}</h3>
//         <p>${product.price}</p>        
//         <button onclick="addToCart(${product.id})" class="addbtn">Add to cart</button>`;
//       ourProducts.appendChild(productElement);
//     });
// }

// function displayList(){
//     tableBody.innerHTML = ""; 
//     products.forEach (product => {
//         tableBody.innerHTML += `
//         <tr>
//         <td>${product.image}</td>
//         <td>${product.name}</td>
//         <td>${product.price}</td>m]
        
//         </tr>
//         `;
//     })
// }
// displayList(); 


let stock = JSON.parse(localStorage.getItem("newStock"))?JSON.parse(localStorage.getItem("stock")):[
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


function dispTable(){
    const myStock = document.getElementById('admin');
    myStock.innerHTML = ""; 
    stock.forEach((item) => {
        const stockElement = document.createElement("tr");
        stockElement.innerHTML += `
        
        <td><img src="${item.image}" alt="${item.id}" loading="lazy"></td>
        <td>${item.name}</td>
        <td>${item.price}</td>
        `;
        myStock.appendChild(stockElement);
        

    });
    
    localStorage.setItem("newStock", JSON.stringify(myStock));
}

document.onload = dispTable();














// // edit 
// function editProduct(product){
//     this.id = product.id;
//     this.image = doc
// }