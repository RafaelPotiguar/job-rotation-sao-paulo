let x = -1
let y = 1
let numInfomrado = 21;

for (let i = 0; i < 10; i++) {
    z = x + y
    x = y
    y = z            
    console.log(y);
    if(y === numInfomrado){
        console.log("------- está na lista")
    }else{
        console.log("-------")
    } 
}


