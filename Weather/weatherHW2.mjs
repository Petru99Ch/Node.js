
// global module 

import * as readline from 'node:readline'
import { stdin as input, stdout as output } from 'node:process'

// custom module / local
import {data} from './data.mjs'

const io = readline.createInterface({input, output})

io.question('Choose the day (1..7)',(value)=>{
    
    if(value.length>4){
        // Ex.data (Monday..Friday)
        // String processing
        let dayArr = value.split("..")
        console.log(dayArr)
        let fromDay = dayArr[0]
        let toDay = dayArr[1]
        let fromNumber
        let toNumber 
        console.log(fromDay)
        console.log(toDay)

        // Check data 
        for(let i = 0; i<=data.length; i++){
            if(data[i].day_name == fromDay  ){                
                fromNumber = data.indexOf(data[i])     
                console.log(fromNumber)
            }else if (data[i].day_name == toDay){                
                toNumber = data.indexOf(data[i])    
                console.log(toNumber)
            }    
            for(let i = fromNumber; i<=toNumber;i++ ){            
                console.log(`[${data[i].date}]: ${data[i].temp} : ${data[i].day_name}`)
    
            }
        }
        
        
    }else{
        // Ex.data (1..3)
            let fromNumber = value.charAt(0)
            let toNumber   = value.charAt(3)            
        
            for(let i = fromNumber-1; i<toNumber;i++ ){            
                console.log(`[${data[i].date}]: ${data[i].temp}: ${data[i].day_name}`)
            
            }
    }
    io.close()
})

