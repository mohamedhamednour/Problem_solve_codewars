let shepp = (arrSheep) => {
  sheepTrue = [];
  counter = 0
  for (let i = 0; i < arrSheep.length; i++) {
    if (arrSheep[i] == true) {
      sheepTrue.push(arrSheep[i]);
      counter += 1
    }
  }
  return counter
};

 let sheepTwo = (arrSheep)=>{
    if(!arrSheep.length) return 1
    counter = 0

     arrSheep.map((el)=>{
         el == true ?    counter += 1 : ''

    })

     return `counter is  : ${counter}`
 }

console.log(sheepTwo([true , true , false , true, false , true , false ,true]));


