// function nextSmaller(n) {
//   return 0;
// }




//Assumptions
  //Trailing zeros do no count as a new number


//Test cases
  //case 1: number can no longer be reduced to smaller number
    //1-20 stays the same
    //if single digit rule applies
    //check length and if it starts with zero.
  //case 2: 
    //double and single repeated integers may not be reduced. Can test this 
  //case 3: 
    //If number is hundreds or thousands check last 2 digits?

const nextSmaller = (n) => {
  //Returning a number as a string.
  let nString = "";
  let compare = "";
  nString = n.toString();
  n= nString;

  if(n.length === 2) {
    for(i=0; i<n.length;i++) {
      
    }
  }
} 

var a = 22;
console.log(nextSmaller(a))