// https://www.youtube.com/watch?v=7Rkib_fvowE
class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
    this.size = 0;
  }

  isimpty() {
    return this.size === 0;
  }

  getsize() {
    return this.size;
  }

  append(data) {
    this.head = new Node(data, this.head);
    this.size++;
  }
  lastnode(newNode) {
    let node = this.head;
    if (node == null) {
      //Means it's just empty list
      this.head = newNode;
    } else {
      while (node.next) {
        node = node.next;
      }
      node.next = newNode;
    }
    this.size++;
  }
  getalldata() {
   let  current =  this.head
   while (current) {
    console.log(current.data)
    current = current.next
    
   }
   return ''
  }
   
}

let list = new LinkedList();

list.append(10);
list.append(30);
list.append(70);
list.append(60);


list.lastnode(500);

console.log(list.getalldata());
console.log( list.getalldata());
