// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.
function invert(array) {
     let  basepostive = []
     let  basengative = []
      for (let i = 0; i < array.length; i++) {
        if (array[i] > 0){
          basepostive.push(array[i] * -1)
        }else{
             basengative.push(Math.abs(array[i]) )
        }
        
      }
    return  basengative.concat(basepostive);
 }


 console.log(invert([1,2,3,-9,10,-20]))

//  anthor solve
function invert(array) {
  return array.map(num =>   {
    return num * -1
  })
}
 console.log(invert([1,2,3,-9,10,-20]))