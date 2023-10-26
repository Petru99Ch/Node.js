const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

const rl = readline.createInterface({ input, output });

module.exports.printMenu = (menu, cb) =>{
    menu.forEach(item => console.log(item.print()))
    rl.question ("Choose number food>>", (option)=>{
        cb(option)
    })
    
}