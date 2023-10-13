// Main Module

console.log("Aplication Started!!")
let add = require("./math.js")

let temperature = require("./temperature.json")
let isNumber = require("./types")
let checkError = require("./types")

let valueString = []
let error = 0



isNumber(temperature, valueString)
checkError(temperature, error)


let sumValue = add(valueString)
let errorPercent = div(error,temperature.length) * 100 
let average = div(sumValue, valueString.length)




console.log(errorPercent)
console.log(average)


console.log("Aplication Ended!!")