//find the most repeated, consecutive character in a string


const maxChar = (string) => {
    
    //variables
    let mCount = 0; //maximum repeated count of mChar
    let maxChar="";
    let charCount = 0;
    let char = "";
    
    if(string === '') {
        return "please input a string"
    }
    
    for(let i=0; i<string.length;i++) {
        //destructuring of mChar in max object        
        if(string.length === 1){
            return "please input a longer string, no consecutive characters found.";
        } else if(char === "") {
            char = string[i];
            charCount = 1;
        } else if(char !== string[i]) {
            char = string[i]
            charCount = 1;
        } else if(char === string[i-1]) {
            charCount += 1;
            if(charCount >= mCount) {
                mCount = charCount;
                maxChar = char;
            }
        } 
    } return {mCount,maxChar}
} 



// // Test Cases
//     //Case 1: empty string
        console.log(maxChar(""));
//     //Case 2: one character string
        console.log(maxChar("a"));
//     //Case 3: Max consecutive character in the beginning of string
        console.log(maxChar("aaabbccc"));
//     //Case 4: Max consecutive character repeated later in the string
        console.log(maxChar("aaabbaaaa"));
    

//COMMENTS:
    //Currently determines max consecutive character in a string, but if there's mulitple characters with the same mCount it takes the latest character rather than giving all characters with the same count. 
    //implemented conditions with empty string or string with only one character.


    
