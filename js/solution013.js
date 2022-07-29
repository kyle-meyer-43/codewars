// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

// Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".


//PARAMETERS
// We're going to have a string. We sometimes will get numbers or specials. We don't want to change those. We'll always get english. Should also consider what to di if we get empty spaces

//RETURNS
// We want to get a new string that takes in the original string and then pushes out a string with every letter +13 from the letter that was imputted in that spot

//EXAMPLES
// 'a' would be switched 'n'

//PSUEDO CODE
//  Write a function that takes in a string
function rot13(message){
// create a place for the output to rest   ** Always a good idea to create a place fo the new string to rest
let newString = ''
// Change the letters in the inputted string to be 13 plus
let alpha = 'abcdefghijklmnopqrstuvwxyzabcdefghijklm'
let alpha2 = alpha.toUpperCase()

// make a for loop to walk thorugh our original string (message), change the character that you find to +13

for (let i = 0; i < message.length; i++){
    console.log( alpha[alpha.indexOf(message[i])+13])
    if (alpha.indexOf(message[i].toLowerCase()) === -1){ //determine if thing is special character. ignores it
        newString += message[i]
    continue
    }  
    if (message[i] == alpha[alpha.indexOf(message[i])]){    
        
        newString += alpha[alpha.indexOf(message[i])+13];
        continue  //will restart a for loop. The opposite of 'break;'  Return is, as always, the end of code
    }
    newString += alpha2[alpha2.indexOf(message[i])+13]

    }
    //return the new string moved ahead by 13.
    return newString
}
//Other way I might try to do it: convert string to array. one item in array for each letter or number in string. then join them back together as the new string


//Alternate solutions:

// function rot13(message){
//     return message
//       .split('')
//       .map(char => {
//         let code = char.charCodeAt(0)
//         if(code >= 65 && code <= 77 || 
//            code >= 97 && code <= 109){
//           return String.fromCharCode(code + 13)
//         } 
//         else if (code >= 78 && code <= 90 || 
//                  code >= 110 && code <= 122){
//           return String.fromCharCode(code - 13)
//         }
//         return char
//       })
//       .join('')
//   }

//Another good alternate solution:

// function rot13(message) {
//     var abc = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLM';
//     return message.replace(/[a-z]/gi, c => abc[abc.indexOf(c) + 13]);
//   }