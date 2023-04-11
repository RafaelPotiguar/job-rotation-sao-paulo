const nome = "Rafael Martins"
//let x = 0
const arr = nome.split('')

if (arr.length % 2 === 0) {
    for (let i = 0; i < ((arr.length)/2); i++) {
        aux1 = arr[i]
        aux2 = arr[arr.length - (i+1)]
        
        arr.splice(i, 1, aux2);
        arr.splice((arr.length) - (i+1), 1, aux1);       
    }
}else{
    for (let i = 0; i < ((arr.length)/2); i++) {
        aux1 = arr[i]
        aux2 = arr[arr.length - (i+1)]
        
        arr.splice(i, 1, aux2);
        arr.splice((arr.length) - (i+1), 1, aux1);       
    }

}

const arrIvert = arr.join("");

console.log(arrIvert)