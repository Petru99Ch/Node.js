const Food = require('./food/Item')

const {save, load} = require('./persistance')

save(new Food("Salad"), "./persistance/data/food.json")
let data = load("./persistance/data/food.json")
console.log(data)