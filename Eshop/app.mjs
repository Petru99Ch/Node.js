
import { products } from "./src/Product/products.mjs"
import { createCard } from "./src/domHelpers/createProducts.mjs"


let sw = document.querySelector(".swiper-wrapper")
const addProduct = () => {
    
    products.forEach(value =>{
      createCard(value.image, value.name, value.price.amount, value.price.currency, sw)
    })


}
addProduct()

