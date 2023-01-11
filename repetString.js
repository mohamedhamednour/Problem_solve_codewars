

let repet =(str , numrepet)=>{

    baseReapet = ''
    for(let i = 0 ; i < numrepet ; i++){
        baseReapet += str

    }
  return   baseReapet

}

// anthor solve
let repetTwo =(str , numrepet)=>{

   let  result =  str.repeat(numrepet)
  return   result;

}


console.log(repetTwo('hamed_ ' , 10))