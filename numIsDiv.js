const divisibleBy = (numbers, divisor) => {
    //variables
    let newNum = [];

    for(let i=0; i < numbers.length; i++) {
        if(numbers[i]%divisor === 0) {
            newNum.push(numbers[i])
        }
    } return {numbers,divisor,newNum};
}

//test case
//test case #1
let num1 = [2,4,6,8];
let num2 = [2,4,6,9];

let divisor = 2;

console.log(divisibleBy(num1,divisor));
console.log(divisibleBy(num2,divisor));