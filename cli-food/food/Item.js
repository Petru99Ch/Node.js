//  HW1: add field "id"
//  HW2: make price -> {value: 1.00, currency: "USD"}
//  Hw3: remale print()

module.exports = class Item {
    constructor(name, price, id){
        this.name = name
        this.price = price 
        this.id = id
    }

    print(){
        return   '#################################\n'+
                `| ${this.id}. ${this.name}: |\t${parseFloat(this.price.amount).toFixed(2)} ${this.price.currency}\t \n`+
                 '#################################\n'
    }
}

// 