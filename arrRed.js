

//Given an array of numbers, delete any duplicates of the array without making a new array but keeping the same order.

//Pseudo code

// //Test Cases
//     //Case 1: empty array
        // arrEmpty = [];
//     //Case 2: only one number
//         //Can look at element type and string.
//         arrNoDupl = [1]; 
//     //Case 3: element type
//         arrType = [];
//     //Case 4: Working array 


        arr1 = [1,1,2,2,3,4,4,4];

    const arrDelete = (arr) => {
        //compare variable 
        let compare = "";
        let nCount = {};

        if(arr.length === 0) {
            return ("status: empty array") 
        }
        
        for(let i=0;i<arr.length;i++) {
            if(compare === "") {
                compare = arr[i];
                nCount[arr[i]] = 1
            } else if(compare !== arr[i]) {
                compare = arr[i]
                nCount[arr[i]] =1
            } else if(arr[i] === compare) {
                nCount[arr[i]] += 1; 
            } 
        } 
        
        for(var elem in nCount) {
            console.log(nCount[elem])
        } 
    }

    console.log(arrDelete(arr1));

