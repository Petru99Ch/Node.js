const http = require('node:http');
const { Client } = require('pg') 
const {saveData, getData, send, updateData, deleteData} = require('./client')



// Create a local server to receive data from
const server = http.createServer((req, res) => {
    //check url
    if(req.url != "/api")
        return send(res,404, "Invalid url address")
         
        if(req.headers['content-type'] != 'application/json')
                return send(res,400,"this api supports only JSON content");   
        
              // check if request is app/json
            switch(req.method){
                case "POST" : 
                    let data = ""
                    req.on('data', (chunk) => {                        
                        data+=chunk
                    });
                    req.on('end', () => {
                        data = JSON.parse(data)
                        console.log('No more data in response.', data);

                        saveData(data).then(()=>{
                            send(res,200,"record created")
                        })
                    });

                  
                // get all the data from request BODY                    

                break;
                case "GET" : 
                    getData().then(data =>{
                        send(res,200,"record found", data)
                    })
                    
                break;

                case "PATCH" : 

                    let upData = ""
                    req.on('data', (chunk) => {                        
                        upData+=chunk
                    });
                    req.on('end', () => {
                        upData = JSON.parse(upData)
                        console.log('No more data in response.', upData);

                        updateData(upData).then(()=>{
                            send(res,200,"record update", upData)
                        })
                    });
                
                break;

                case "DELETE" : 

                    let delData = ""
                    req.on('data', (chunk) => {                        
                        delData+=chunk
                    });
                    req.on('end', () => {
                        delData = JSON.parse(delData)
                        console.log('No more data in response.', delData);

                        deleteData(delData).then(()=>{
                            send(res,200,"record delete", delData)
                        })
                    });
                
                break;

                default:
                    send(res,405,"Use only GET, POST, PUT, DELETE")
            }
                // check method GET, POST, ... - 200 / 405 
    
})

server.listen(3000)


/*
    HTTP methods:

    CRUD
    Create - INSERT -> POST
    Read   - SELECT -> GET
    Update - UPDATE -> PATCH
    Delete - DELETE -> DELETE
*/ 