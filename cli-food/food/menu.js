let Item = require("./Item")
let Price = require("./Price")

module.exports = {
    menu:[
        new Item("Salad", new Price(10, "USD"), 1),
        new Item("Soup", new Price(15, "USD"), 2),
        new Item("Bread", new Price(5, "USD"), 3),
        
    ]
}