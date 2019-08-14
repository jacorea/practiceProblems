//Given a number n, count monkeys 1 by one in an array.

const monkeyCount = (nMonkeys) => {
    let monkeyArr = [];
    let count = 0;

    for(let i = 0; i< nMonkeys; i++) {
        count += 1;
        monkeyArr.push(count);
    } return monkeyArr;
}

console.log(monkeyCount(6));