// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.



//Parameters: 
//Trying to take in an array and analyze it. Will be counting how many positive numbers are in the array and the sum of the negative numbers. 0's hidden b/c not pos or neg. If array is empty or null, will give empty array.

// Returns: total number of postive numbers in the array. sum of negative numbers in array. 0's in array hidden. Empty array if array is empty or null

// Examples:
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

//Pseudo code:
//Create function that takes in an array and splits it up into negatives and postives. Use conditionals to put in the total number of postive ints in the array, and the sum of the negatives added into the second spot of array. Else condition to return the empty array if doesn't have req elements.


function countPostivesSumNegatives(arr){

   if (arr == null || !arr.length){
       return []
   } else{

        let pos = arr.filter(a => a>0 ).length
        
        let neg = arr.filter(a => a<0 ).reduce((a,b) => a+b);
        
        return [pos,neg]
   }  
}