let {menu} = require('./food/menu')
let {printMenu} = require('./food/helpers')

function mainLoop(){
    printMenu(menu, (option) =>{
        //    HW4: string input -> integer number
        //  + chech -> error -> inexistent option
             let result = menu.filter( value =>  parseInt(option) == value.id)
                result.length == 0 ? console.log ("This option don't exist: Please check menu and choose real option") : console.log("You've chosen", parseInt(option) )                    
               
                setTimeout(mainLoop, 500)
    })
}
mainLoop()