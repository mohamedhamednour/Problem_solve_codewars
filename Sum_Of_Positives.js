// sum  Positives number in array
let sum = (arr) => {
  arr && "not found";
  let base = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      base += arr[i];
    }
  }
  return base;
};
// anthor solve

let anthorSum = (arr) => {
  let baseFilter = arr.filter((el) => el > 0).reduce((pre, nex) => pre + nex);

  return baseFilter;
};

console.log(sum([1, 23, 5, -5]));
console.log(anthorSum([5,5,8,-8]));



// let star = ()=>{
//   let six = 9
//   for (let i = 0; i < six - 1; i++) {    
//     console.log('*'.repeat(i))

//   }
//   return ''
// }
// console.log(star())


// const object1 = {
//   a: 'somestring',
//   b: 42,
//   c: false,
//   d:444.5,
//   d: true
// };
// let arr = Object.values(object1)

// console.log(arr.filter((el) =>  typeof el == "boolean"))