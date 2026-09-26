
let buttons=document.querySelectorAll(".con button")
let cartarray=[]
buttons.forEach((button)=>{
    button.addEventListener("click",()=>{
        let product=button.parentElement.parentElement;
        
        let des=product.querySelector(".des")
        let name = des.querySelector("h3");
        let quantity = des.querySelector("p");
        let price = des.querySelector("h2");
        let image = product.querySelector("img");
        let productdata={
            "name":name.textContent,
            "quantity":quantity.textContent,
            "price":price.textContent,
            "image": image.src
        };
        let existingProduct = cartarray.find((product) => {
        return product.name === productdata.name;
        });
        if (existingProduct) {
            existingProduct.count++;    
            }
         else {
            productdata.count = 1;
            cartarray.push(productdata); 
              }
        
             
        localStorage.setItem("cart", JSON.stringify(cartarray));
    })
})
///nav bar pe click hone ke bad kya  hona chahiye hai wo means item filter
let fruit_veg=document.querySelector("#fruit_veg")
let dairy=document.querySelector("#dairy")
let snaks=document.querySelector("#snacks")
let essentials=document.querySelector("#essentials")
let household=document.querySelector("#household")
let personalcare=document.querySelector("#personalcare")
let berverages=document.querySelector("#berverages")

let product=document.querySelectorAll(".con")

fruit_veg.addEventListener("click",()=>{
    event.preventDefault()//ye nahi diya toh butoon click karte hi bas fru_veg dikhega par turant refresh hoga
    console.log("fruit clicked");

    product.forEach((item)=>{
        console.log(item.dataset.category);
        if (item.dataset.category == "veg" || item.dataset.category == "fruits"){
                item.style.display = "";
        }
           
        else{
              item.style.display = "none";
        }
    })
})
dairy.addEventListener("click",()=>{
    event.preventDefault()
    product.forEach((item)=>{
        console.log(item.dataset.category);
        if (item.dataset.category == "dairy"){
                item.style.display = "";
        }
           
        else{
              item.style.display = "none";
        }
    })
})
essentials.addEventListener("click",()=>{
    event.preventDefault()
    product.forEach((item)=>{
        console.log(item.dataset.category);
        if (item.dataset.category == "essentials"){
                item.style.display = "";
        }
           
        else{
              item.style.display = "none";
        }
    })
})
snacks.addEventListener("click",()=>{
    event.preventDefault()
    product.forEach((item)=>{
        console.log(item.dataset.category);
        if (item.dataset.category == "snacks"){
                item.style.display = "";
        }
           
        else{
              item.style.display = "none";
        }
    })
})

household.addEventListener("click",()=>{
    event.preventDefault()
    product.forEach((item)=>{
        console.log(item.dataset.category);
        if (item.dataset.category == "Household"){
                item.style.display = "";
        }
           
        else{
              item.style.display = "none";
        }
    })
})
berverages.addEventListener("click",()=>{
    event.preventDefault()
    product.forEach((item)=>{
        console.log(item.dataset.category);
        if (item.dataset.category == "breverages"){
                item.style.display = "";
        }
           
        else{
              item.style.display = "none";
        }
    })
})
personalcare.addEventListener("click",()=>{
    event.preventDefault()
    product.forEach((item)=>{
        console.log(item.dataset.category);
        if (item.dataset.category == "personalcare"){
                item.style.display = "";
        }
           
        else{
              item.style.display = "none";
        }
    })
})


////////////////////// yaha tak filter
//------\\price range filter start
let prange=document.querySelector(".sectL")
let ogp=prange.querySelector("#p")
let input=ogp.querySelector(".price-slider")
let bothinput=input.querySelectorAll("input")


let apply_filter=document.querySelector(".sectL .btn button")
apply_filter.addEventListener("click",()=>{
    let minprice = Number(bothinput[0].value);
    let maxprice = Number(bothinput[1].value);
    product.forEach((item)=>{
        let price=item.querySelector(".des h2")
        let pricevalue = Number(price.innerText.replace("₹", ""));
        if (pricevalue >= minprice && pricevalue <= maxprice){
            item.style.display=""
        }
        else{
            item.style.display="none"
        }
  
    }) 
    let checkboxes=document.querySelector(".Brandcheckbox")
    let allcheckboxes=checkboxes.querySelectorAll("input")
    let selectedBrands = [];
    allcheckboxes.forEach((current) => {
        if (current.checked) {
            selectedBrands.push(current.value);
        }
    });
    console.log(selectedBrands);
    product.forEach((item) => {

    if (selectedBrands.includes(item.dataset.brand)) {
        item.style.display = "";
    }
    else {
        item.style.display = "none";
    }

});
});

//////clear filter ke liye//
let button = document.querySelectorAll(".sectL .btn button");
let clear_filter = button[1];
clear_filter.addEventListener('click',()=>{
    bothinput[0].value = 0;
    bothinput[1].value = 1000;
    let minprice=bothinput[0].value
    let maxprice=bothinput[1].value
    product.forEach((item)=>{
        let price=item.querySelector(".des h2")
        let pricevalue = Number(price.innerText.replace("₹", ""));
        if (pricevalue >= minprice && pricevalue <= maxprice){
            item.style.display=""
        }
        else{
            item.style.display="none"
        }
  
    }) 
})
let select=document.querySelector("nav #category_select")
select.addEventListener('change',()=>{
    let selectcategory=select.value;
    product.forEach((item)=>{
         if (
            selectcategory == "" ||//agar select category kselect kiya toh pura dekhega
            (selectcategory == "fruits-veg" &&
            (item.dataset.category == "fruits" ||
             item.dataset.category == "veg")) ||
            item.dataset.category == selectcategory
        )
              item.style.display = "";
        else{
              item.style.display = "none";
        }
    })
})

let signIn = document.querySelector("#homesign");

signIn.addEventListener("click", () => {
    window.location.href = "login.html";
});
let isLoggedIn = localStorage.getItem("isLoggedIn");

if (isLoggedIn != "true") {
    window.location.href = "login.html";
}
//main search [products]
let search = document.querySelector("#maininput");
search.addEventListener("input", () => {
    let searchValue = search.value.toLowerCase();
    product.forEach((item) => {
        let productName = item.querySelector(".des h3").innerText.toLowerCase();
        if (productName.includes(searchValue)) {
            item.style.display = "";
        }
        else {
            item.style.display = "none";
        }
    });
});















