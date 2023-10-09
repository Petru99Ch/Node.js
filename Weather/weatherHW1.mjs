
// global module 

import * as readline from 'node:readline'
import { stdin as input, stdout as output } from 'node:process'

// custom module / local
import {data} from './data.mjs'

const io = readline.createInterface({input, output})

io.question('Choose the day ',(value)=>{
   
        data.forEach((day, index) =>{
            // HW1: what if the user inputs the day name --->"Monday"
            if(index + 1 == +value || day.day_name == value){
                console.log(`[${day.date}]: ${day.temp}`)
            }
            
        })

    io.close()
})

