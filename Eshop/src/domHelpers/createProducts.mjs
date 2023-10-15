

/*

Bootstrap CARD !  + custom 


<div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
*/



const createCard = (imgSrc, nameProduct, priceProduct, currencyProduct, parentElement) => {     
    let product = document.createElement('div')
    product.classList.add("card", "card-custom","text-center")
  

    let image = document.createElement("img")
    image.src = imgSrc
    image.classList.add("card-img-top","custom-image")
    image.alt = `${nameProduct}`

    let cardB = document.createElement("div")
    cardB.className = "card-body"

    let p = document.createElement("p")
    p.className="card-text"
    p.innerText = nameProduct

    let price = document.createElement("p")
    price.innerText = priceProduct 
    let currency = document.createElement("span")
    currency.innerText = currencyProduct
    price.appendChild(currency)
    
    cardB.appendChild(p)
    cardB.appendChild(price)

    

    product.appendChild(image)
    product.appendChild(cardB)


    let slide = document.createElement("div")
    slide.className = "swiper-slide"

    slide.appendChild(product)

    parentElement.appendChild(slide)
}


export{createCard}