// Your task is to find the first element of an array that is not consecutive.

// By not consecutive we mean not exactly 1 larger than the previous element of the array.

// E.g. If we have an array [1,2,3,4,6,7,8] then 1 then 2 then 3 then 4 are all consecutive but 6 is not, so that's the first non-consecutive number.

// If the whole array is consecutive then return null2.

// The array will always have at least 2 elements1 and all elements will be numbers. The numbers will also all be unique and in ascending order. The numbers could be positive or negative and the first non-consecutive could be either too!

// P.R.E.P : Parameters, Returns, Examples, Pseudo Code:

// Parameters: first non consecutive in array (not exactly one larger than previous in array). null2 return if all in array are consecutive. always at least 2 elements in the array, always numbers. will all be unique and in ascending order. can be postive or negative

// Returns: Return either the first element that is not consecutive, or null2 if all are consecutive. 
    // not defined how to return? maybe start with console log?

// Examples:  If we have an array [1,2,3,4,6,7,8] then 1 then 2 then 3 then 4 are all consecutive but 6 is not, so that's the first non-consecutive number.

// Pseudo code: 
    // function with conditional statement that takes in array. thinking an if and else statement, don't need an else if?

    // function firstNonConsecutive(arr) {
    //     for (let i = 0; i < arr.length; i++) {
    //       if (arr[i + 1] - arr[i] !== 1) {
    //         return arr[i + 1];
    //       }
    //     }
    //     return null;
    //   }
      
      
    //   console.log(firstNonConsecutive([ 0, 1, 2, 3, 4, 6, 7, 8, 9 ]));

// tried above and passed initial test, but did not work on attempt because null did not return. got undefined instead.

// did some researching on stack overflow and found nice and neat code below. Good practice because:
    //   it is a clean arrow function that is easy to read. uses array.prototype.find() method that will work with a wider range of string types and negatives 

    // const firstNonConsecutive = arr => arr.find((n,i,s) => i && n-s[i-1] > 1)
        // this one had same issue. had to expand further on the function to include math min and math max, along with programming null return


    const src1 = [1,2,3,4,6,7,8],
    src2 = [ 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 ],
    src3 = [ -4, -3, -2, 0, 1, 3, 4, 5 ],
    firstNonConsecutive = arr => (
      gap = arr.find((n,i,s) => i && Math.max(n,s[i-1])-Math.min(n,s[i-1]) > 1), 
      gap === undefined ? null : gap
    )
    
console.log(firstNonConsecutive(src1))
console.log(firstNonConsecutive(src2))
console.log(firstNonConsecutive(src3))

// ------------------------------------------------------------------------------------

// favorites of ones in other solutions page:

    // a way to do it in a single line:
    // firstNonConsecutive = arr => arr.length == 1 ? null : arr[0] + 1 != arr[1] ? arr[1] : firstNonConsecutive(arr.slice(1)) 

    // function firstNonConsecutive(arr) {
//   for (let i = 0; i < arr.length - 1; ++i) {
//     if (arr[i] + 1 !== arr[i + 1]) {
//       return arr[i + 1]
//     }
//   }
//   return null
// }
