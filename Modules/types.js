function isNumber(arr,array){
    arr.forEach(value => {
        if(typeof value == number){
            array.push(+value)
        }
    })

    return array
    
}

module.exports.isNumber = isNumber