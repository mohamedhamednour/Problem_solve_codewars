class ListNode{
    constructor(vla =null , nex= null){
  this.val = val
  this.nex = nex

    }
}


var mergeTwoLists = function(list1, list2) {

    // using dummy head to avoid writing additional code for edge cases (e.g. list = null).
    // using "new" keyword to create a new object. It makes the this variable point to the newly created object.
	// p is the pointer of dummy, p1 is the pointer of list1, p2 is the pointer of list2
    let dummy = new ListNode(0);
    let p = dummy;
    let p1 = list1; //124
    let p2 = list2;   //134

    //   while both lists are not null.
    while (p1 && p2 ){
	
        // compare the number of nodes. insert the smaller node to the result
      //p1 has 1 2 3 > //p2 1 3 4
        if (p1.val > p2.val){
            p.next = p2;  //p.next = null- list2 134
            p2 = p2.next;  //list2   //'
        }else{
            p.next = p1;
            p1 = p1.next;
        }
        
        // move the pointer to the next one
        p = p.next;
    }
    
    // if every node of one list has been traversaled, we will insert the rest of the other list to the result
    p.next = p1 || p2;
    return dummy.next;
};