import { Money } from "../Money/Money.mjs"
import { data } from "./data.mjs"
import { Product } from "./Product.mjs"
let products = []

const createProduct = () => {
    data.forEach(product=>{
        products.push(new Product(product.name, product.image, new Money(product.price, product.currency)))
    })
}
createProduct()

console.log(products)

export{products}