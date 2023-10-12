// module.exports.Math = {
//     add: (a, b) => a + b  ,
//     sub: (a, b) =>  a - b ,
//     mul: (a, b) =>  a * b, 
//     div: (a, b) =>  a / b 
// }

function add(arr){
    let sum = 0
    arr.forEach(value =>{
        sum += value
         
    })
    return sum
}

function div(a,b){
    let res = a/b
    return res
}
module.exports.add = add
module.exports.div = div


// module.exports.add = (arr) => {
//     let sum = 0
//     let res = arr.forEach(value =>{
//         sum += value
         
//     })
//     console.log(res)
// }