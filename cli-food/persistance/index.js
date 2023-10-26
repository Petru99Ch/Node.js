const fs = require('fs')
const map = require("./map")

module.exports.save = (object,path)=> {
    object.type = object.constructor.name
    fs.writeFileSync(path, JSON.stringify(object) )
}

module.exports.load = (path)=> {
    let data =  JSON.parse(fs.readFileSync(path).toString())
    
   
    const Clazz = require(map[data['type']])
    // console.log(map[data['type']])
    let obj = new Clazz(data.name)
    return obj
}

