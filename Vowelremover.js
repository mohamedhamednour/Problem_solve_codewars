function shortcut(add) {
    let incloud  = ['a', 'e', 'i', 'o', 'u']
     let two =  add.split('').filter((el)=> !incloud.includes(el)).join("")
    return two;
  }
  
console.log(shortcut('hello'))

// anthor solve
 function shortcut(string) {//This should definitely be called the disemvoweler
    return string.replace(/[aeiou]/g, '');
  }