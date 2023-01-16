// // Filter out the geese
// The goal of this exercise is to get back an array without some specific elements in it (elements that are specified in the geese array).

// Start the function
// Here we'll create a function called gooseFilter that accepts a parameter named birds of type Array.

function gooseFilter(birds) {
  let geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  return birds.filter((item) => !geese.includes(item));
}

console.log(
  gooseFilter([
    "Mallard",
    "Hook Bill",
    "African",
    "Crested",
    "Pilgrim",
    "Toulouse",
    "Blue Swedish",
  ])
);

// Filter out the geese
// The goal of this exercise is to get back an array without some specific elements in it (elements that are specified in the geese array).

// Start the function
// Here we'll create a function called gooseFilter that accepts a parameter named birds of type Array.

// function gooseTwo(birds) {
//   let geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
//   let neGeese = null;
//   for (let index = 0; index < birds.length; index++) {
//     let element = birds[index];

//     neGeese = geese.filter((el) => el != element);
//   }


//   return neGeese;
// }

// console.log(
//   gooseTwo([
//     "Mallard",
//     "Hook Bill",
//     "African",
//     "Crested",
//     "Pilgrim",
//     "Toulouse",
//     "Blue Swedish",
//   ])
// );

// const GEESE = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
// const gooseFilter = birds => birds.filter(bird => !GEESE.includes(bird));