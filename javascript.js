
// var names = ["Jon", "Tom"]
// var emptyArray = []

// function likes(names) {
// if(names === [] ) {

//     console.log( "no one likes this")
//     }
// }
  
// likes(names);

// Write a method sum (sum_array in python, SumArray in C#) that takes an array of numbers and returns the sum of the numbers. 

//Problem # 1 - Sum of an Array
//Number array variable 
numbers = [1, 5.2, 4, 0, -1]

//Function that determines the total and current number stored as an element in an array.
getSum = (total, num)=> {
    return total + num
}

//Since reduce method does not change the array it needs to be stored as a variable. It calls the getSum function which uses the total and number as way the Reduce() is defined.  
const sum = numbers.reduce(getSum);
//Finally, logging the sum
// console.log(sum)

//Problem #1 - Sum of an Array (For Loop)

var numbers = [10, 20, 30, -1] // sums to 100
//function that adds numbers in an array

sumArray = (numbers)=> {
var sum2 = 0;
    for (var i = 0; i < numbers.length; i++) {
    sum2 += numbers[i]
    }
    console.log(sum2)
}

sumArray(numbers)


for(let i=0;i<=100; i++){
    if(i%3===0 & i%5===0){
        console.log("FizzBuzz")
    }else if(i%3 === 0){
        console.log("Fizz")
    } else if(i%5 ===0){
        console.log("Buzz")
    } else {
        console.log(i)
    }
}
