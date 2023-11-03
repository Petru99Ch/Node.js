const http = require('node:http')
const {KEY, PATH, HOST} = require('./config.json')
const readline = require('node:readline')
const { stdin: input, stdout: output } = require('node:process');

const rl = readline.createInterface({ input, output })

const checkWeather = () =>{
    rl.question('where city you want check the weather? ', (city) => {

        const callback = ( res ) =>{
    
            // BIND EVENT HANDLERS
        
            // res.on("end", ()=>{
            //     console.log("Api response ended")
            // })

            // res.on("error", ()=>{
            //     console.log("Api response error")
            // })

            
            res.on("data", (chunk)=>{
                let data = JSON.parse(chunk.toString())                
                // console.log(data.message)

                if(data.message == "city not found" || data.message == "Nothing to geocode"){
                    console.log("City not found, please in real city!")
                    
                }else{
                    console.log(`
                    Temperature: ${data.main.temp}
                    Temperature-max : ${data.main.temp_max}
                    Temperature-min : ${data.main.temp_min}
                    Wind-sped : ${data.wind.speed}
                    Country: ${data.sys.country}
                    
                    `)
                }                
            })  
        }
        
        const req = http.request({
            host: HOST,
            path: PATH + `?q=${city}&appid=${KEY}&units=metric`,
            port: 80,
            method: "GET"
        }, callback)
        
        req.end()   
      
        setTimeout(checkWeather, 1000)
        
      })      
}
checkWeather()





