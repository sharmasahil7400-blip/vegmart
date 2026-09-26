let main = document.querySelector("#main")
let cart = JSON.parse(localStorage.getItem("cart"));
let cartTotal = 0; 

function updateCartTotal() {
    cartTotal = 0;

    cart.forEach((product) => {
        let priceValue = Number(product.price.replace("₹", ""));
        cartTotal = cartTotal + (priceValue * product.count);
    });

    totalElement.innerText = "₹" + cartTotal;
}


cart.forEach((product) => {
    //   console.log(product.image);

    let item = document.createElement("div");
     item.classList.add("cartItem");

    let image = document.createElement("img");
    image.src = product.image;
    image.classList.add("cartImage");

    let details = document.createElement("div");

    let name = document.createElement("h3");
    name.innerText = product.name;

    let quantity = document.createElement("p");
    quantity.innerText = product.quantity;
    let count = document.createElement("span");
    count.innerText = product.count;

    let plus=document.createElement("button")
    plus.innerText="+"
    let minus=document.createElement("button")
    minus.innerText="-"

    

    let price = document.createElement("h2");
    let priceValue = Number(product.price.replace("₹", ""));
    let total = priceValue * product.count;
    price.innerText = "₹" + total;
    cartTotal = cartTotal + total; 

    plus.addEventListener('click',()=>{
        product.count++;
        count.innerText = product.count;
        quantity.innerText = product.count + "kg";
       let pricevalue = Number(product.price.replace("₹", ""));
       let total = pricevalue * product.count;
      
       price.innerText = "₹" + total;
       

       localStorage.setItem("cart", JSON.stringify(cart));
       updateCartTotal();

    })

    minus.addEventListener("click", () => {
    if (product.count > 1) {
        product.count--;
        count.innerText = product.count;
        quantity.innerText = product.count + "kg";
        let priceValue = Number(product.price.replace("₹", ""));
        let total = priceValue * product.count;
      

        price.innerText = "₹" + total;
        
        localStorage.setItem("cart", JSON.stringify(cart));
        updateCartTotal();
            }
        });
   

    details.appendChild(name);
    details.appendChild(quantity);
    details.appendChild(price);
    details.appendChild(minus);
    details.appendChild(count);
    details.appendChild(plus);

    item.appendChild(image);
    item.appendChild(details);

    main.appendChild(item);
   
});
let totalElement = document.querySelector("#cartTotal");
totalElement.innerText = "₹" + cartTotal;
updateCartTotal();