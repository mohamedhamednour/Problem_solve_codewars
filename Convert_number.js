// Convert-number-to-reversed-array - 


let convert = (num)=>{
     let convertNum =  num.toString()
     return  convertNum.split("").reverse().map((e)=> Number(e))
}

let convertTwo = (num)=>{
    let convertNum =  num.toString()
    newarray = []
    for(let i = 0 ; i < convertNum.length ; i++){
           newarray.push(Number(convertNum[i]))
    }
   return  newarray.reverse()
}

console.log(convertTwo(98755))