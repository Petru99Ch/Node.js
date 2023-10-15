HW1: make a frontend simple app based on MODULES:
    * this will be a single pagem which will use swiper carousel
    * will present products: each product -> slide, 3 per scroll on big screens, 1 per scroll on small screens

    - index.html
        |
        +--swiper...
        |
        +-- app.mjs
             |
             +-- load products, create the swiper DOM an THEN - init swiper
             |
             +-- products.mjs
                    |
                    +-- [Array of objects of type Product]

             +-- Product.mjs
                    |
                    +-- class Produtc { name: String, image: String, price: Money}

             +-- Money.mjs
                    |
                    +-- class Money {amount: Number, currency: String }

        +-- domHelpers.mjs
                    |
                    +-- newElement(parent, content, class, ...)


HW2*: try to layout the INSIDE of each slide using bootstrap - card component
HW3*: advanced DOM (.createElement()... +helper functions)                                       
                    