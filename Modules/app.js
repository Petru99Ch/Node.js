// Main Module

console.log("Aplication Started!!")
let {add, sub, mul, div} = require("./math")

let temperature = require("./temperature.json")
let isNumber = require("./types")
let valueString = []
let error = 0
console.log(isNumber)
// console.log(temperature)
// temperature.forEach(value => {
//     if(value !== "NaN"){
//         valueString.push(+value)
//     }
// })
 isNumber(temperature, valueString)



temperature.forEach(value => {
    if(value == "NaN"){
        error++
    }
})
let sumValue = add(valueString)
let errorPercent = div(error,temperature.length) * 100 

let average = div(sumValue, valueString.length)




console.log(errorPercent)
console.log(average)


console.log("Aplication Ended!!")