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
        <button onclick="editProduct()">Edit Product</button>
        <button onclick="deleteProduct()">delete</button>
        `;
        myStock.appendChild(stockElement);
        

    });
    
    localStorage.setItem("newStock", JSON.stringify(myStock));
}

document.onload = dispTable();

// add 
let addProduct = document.getElementById(addProduct);

addProduct.addEventListener('click', () => {
    try{
        const image; 
        const name; 
        const price; 
        const category;
        const quantity; 

        let id = myStock((stock) => stock.id.at(-1) >= 1
        ? myStock((stock) => book.id).at(-1) : 0);
        id++; 
    }
    catch(error){
        console.error("can not add new product", error);
    }
})

// edit
function editProduct(){

}

// delete 
function deleteProduct(){
    stock = JSON.parse(localStorage.getItem('products'));
    stock = splice (index, 1);
    localStorage.setItem('products', JSON.stringify(stock));
    dispTable()
}