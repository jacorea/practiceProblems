//Kata problem in JavaScript
    //PROBLEM: Remove the spaces from a string.

//Cases
    const name = "Jonathan Corea is the best";

//Would first want to check that a string is given
//remove white space with Trim
//Loop through 

// let emptySpace = name.indexOf(" ");
// let newName = name.slice(0,emptySpace) + name.slice(emptySpace+1);
// let newName2 = name.replace(/\s+/g, "");


// const removeEmptySpace = (stringArg) => {
    
//     let newName = "";
//     for(let i=0; i<stringArg.length; i++) {
//         if(stringArg[i] === " ") {
//         newName = stringArg.replace(stringArg[i],"");
//         } 
//     } console.log(newName)
// }

// removeEmptySpace(name);
// console.log(newName2);

const removeWhiteSpace = (stringArg) => {
    if(stringArg === null || stringArg.length <= 0) {
        return "   please input a longer string."
    } 
    else{
        stringArg = stringArg.trim().replace(/\s+/g, "");
    } return stringArg;
}

console.log(removeWhiteSpace(name));