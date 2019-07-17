// Title: Range Extraction 

// Goal: End Result: Determine a format for expressing an ordered list of integers to use a comma separated by a list. 


//Parameters
    //list individual integers
    //range of integers(starting-ending) format.
    //not considered range unless spans 3 numbers.
    //string is returned.

// Test case
    let listOne = [-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]

//function 
const solution = (list) => {
    let range="";
    for(let i=0; i<list.length; i++) {
        range += list[i] + ",";
    } return range
}

console.log(solution(listOne));