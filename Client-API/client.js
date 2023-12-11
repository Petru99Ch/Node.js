const { Client } = require('pg') 



  async function getData(){

    const client = new Client({
      host: 'localhost',
      port: 5432,
      database: 'client',
      user: 'postgres',
      password: 'qazwsx',
    })
    let data = []

    await client.connect()
    const result = await client.query('SELECT * FROM client_data')
    result.rows.forEach((row)=>{
        data.push(row)
      })
    await client.end()
    return data
  }

  async function saveData(person){
    const {id, name, age} = person
    const client = new Client({
      host: 'localhost',
      port: 5432,
      database: 'client',
      user: 'postgres',
      password: 'qazwsx',
    })

    await client.connect()
    await client.query('INSERT INTO client_data(id, name, age) VALUES($1, $2, $3);', [id, name, age])    
    await client.end()
  }

  async function execute(){
    await saveData({id:100, name:"New Guy", age: 44})
    await getData()
  }
 
  const send = (res, status, message, data=null ) =>{
    res.writeHead(status, {"Content-type": "application/json"})
    let responsBody = {message: message}
    if(data != null){
        responsBody.data = data
    }
    res.write(JSON.stringify(responsBody));

    res.end("")
  }




  async function updateData(person){
    const {name, id} = person
    const client = new Client({
      host: 'localhost',
      port: 5432,
      database: 'client',
      user: 'postgres',
      password: 'qazwsx',
    })
    await client.connect()
    await client.query('UPDATE client_data SET name = $1 WHERE id = $2', [name, id])  
    await client.end()
    
  }

  async function deleteData(person){
    const {name} = person
    const client = new Client({
      host: 'localhost',
      port: 5432,
      database: 'client',
      user: 'postgres',
      password: 'qazwsx',
    })
    await client.connect()
    await client.query('DELETE FROM client_data WHERE name = $1', [name])  
    await client.end()
    
  }










  module.exports = {saveData,getData, send, updateData, deleteData}