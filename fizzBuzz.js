
//Problem: FizzBuzz
//Date: 17 April, 2019
//Completed by: Jonathan Corea

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

