// {name: 'Jeremy', age: 24, role: 'Software Engineer'}
// should be converted into

// [["age", 24], ["name", "Jeremy"], ["role", "Software Engi


function convertHashToArray(hash){
 let entries =  Object.entries(hash)
 

 return   entries.sort()
  }



  console.log(convertHashToArray({name: 'Jeremy', age: 24, role: 'Software Engineer'}))