function isNumber(initValue,result){
    initValue.forEach(value => {
        if(typeof value == 'number'){
            result.push(+value)
        }
    })
  
    return result
  
  }
  
  function checkError(initValue, error){
    initValue.forEach(value => {
        if(typeof value == 'number'){
            error++
        }
    })
  
    return error
  
  }
  
  module.exports.isNumber = isNumber
  module.exports.checkError = checkError
  