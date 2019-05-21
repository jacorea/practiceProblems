//find the most repeated, consecutive character in a string

//Test case #1 - "aabbbaacc"

const maxChar = (string) => {

    //variables
    let mChar = ""; //maximum repeated character
    let mCount = 0; //maximum repeated count of mChar
    let max= {}; //store maximums in an object

    for(let i=0; i<string.length;i++) {
        //destructuring of mChar in max object
        let mChar= string[i];

        if(max[mChar] === undefined) {
            mChar = string[i];
            max[mChar] =1;
        } else if(mChar !== string[i-1]) {
            max[mChar] = 1;
        } else if(mChar === string[i]) {
           max[mChar] +=1
        } 
    }  console.log({max})
    for(var elem in max) {
        if(mCount === 0) {
            mCount = max[elem]
            mChar = elem
        } else if(max[elem] > mCount) {
            mCount = max[elem]
            mChar = elem
        }
    } return {mChar, mCount};
} 



console.log(maxChar("aabbcccddcccccaaaaaa"))
//Currently determines max consecutive character in a string, but if there's mulitple strings with the same mCount it takes the latest character rather than giving all characters with the same count. Also, need to implement test conditions where there it test lenght of string and 2 character strings.


