let cart = JSON.parse(localStorage.getItem('Products')); 
let checkoutList = document.getElementById('checkout'); 

function cartRemove(index){
    cart.splice(index, 1)[0];
    checkoutList();
}

function checkout(){
    checkoutList.innerHTML = "";

    cart.forEach((products, index) => {
        let cartList = document.createElement("div"); 
        cartList.innerHTML = '' ; 
        cartList.innerHTML = `
        <img src ${products.image}></img>
        <h4>${products.name}</h4>
        <p>${products.price}</p>
        `;

        checkoutList.appendChild(cartList);
    })
    total(); 

}

checkout(); 

function total(){
    let price = document.getElementById('total-amount'); 
    let total = 0; 

    price.forEach((products) => {
        total += eval(products.price);
    });

    price.textContent = `Total Price: R${(totalCash)}`
}

function clearCart(){
    localStorage.clear();

    alert("thank you for your purchase");

    location.reload();
}

const clearBtn = document.getElementById("clearAll")
clearBtn.addEventListener("click", clearCart);