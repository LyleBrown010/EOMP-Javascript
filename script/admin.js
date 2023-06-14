let products = JSON.parse(localStorage.getItem('products'));
let tableBody = document.getElementById('admin'); 
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

function displayList(){
    tableBody.innerHTML = ""; 
    products.forEach (product => {
        tableBody.innerHTML += `
        <tr>
        <td>${product.image}</td>
        <td>${product.name}</td>
        <td>${product.price}</td>

        </tr>
        `;
    })
}
displayList();










// // edit 
// function editProduct(product){
//     this.id = product.id;
//     this.image = doc
// }