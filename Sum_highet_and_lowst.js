// remove  Sum-Without-The-Highest-And-The-Lowest-Number

let sum = (arr) => {

  let result = arr.sort((a,b)=> a - b)

  let  add  = result.slice(1, result.length - 1).reduce((pre , nex)=> pre + nex);

  return add
};

console.log(sum([1,2 ,7,8,5,5,41]));


