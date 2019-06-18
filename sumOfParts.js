//Given certain number of arrays, return sum of each array in a summary array.

//Pseudo Code
//Step 1: Validity of array
    //check if all variables in an array are numbers.
//Step 2: 
    //Determine sum of each individual array
//Step 3
    //Push returning sum as a ResultSummary array.

var arr1=[0, 1, 3, 6, 10];
var arr2=[20, 20, 19, 16, 10, 0];

const partsSums = (...ls) => {
    let sumNumArr = [];
    let sum = 0;
    let arrLength = 0

    for(let i=0; i<ls.length; i++) {
       for(j=0; j<ls[i].length; j++) {
        //    console.log("this is index of nested array "+ j)
        //    console.log("element of nested array " + ls[i][j])
           arrLength = ls[i].length -1
          if(sum === 0) {
            sum = ls[i][j];
          } else if(sum > 0) {
            sum += ls[i][j];
          } 
        } sumNumArr.push(sum);
        sum = 0
    } return sumNumArr;
}
console.log(partsSums(arr1,arr2))