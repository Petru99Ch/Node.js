const w = 10 
const h = 10 

const maping = [
    [0,1,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,1,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
]



const render = () =>{
    console.clear()
    let output = ""
//////// First row
    for(let x = 1; x <= w ; x++){
        if(x == 1 ){
            output += "+-"
        }else{
            output += "--"
        }
    }
    output += "-+"

    output += "\n"

////////////////Content

    // HW1 : rewrite yhe code using for inside for 
    for(let row = 0; row < maping.length; row++){

        output += "|"

        for(let col = 0; col < maping.length; col++){

            // HW3: render the 1 as # sign
            if(maping[row][col] == 1){
                output += "#"+ " "
            }else{
                output += "." + " "
            }
             
        }
        output += "|" +"\n"
       
    }

///////////// Last row 
    output += "+-"
    for(let y = 1; y < h ; y++){       
        output += "--"        
    }
    output += "-+"

    console.log(output)


}

render()
