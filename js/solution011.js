
// Switch It Up!

//When provided with a number between 0-9, return it in words.

//Parameters: Taking in a number. Will assume it's postive and an integer. 

// Returns: If number is 1-9, returning in words. All others returning just like it's input

//Example: 1 comes in, 'one' goes out

// Pseudo code: Function to take in a number. Conditional or switch case. Sep cases for each number 1-9, then one catch all for everyting else.

let number
function switchItUp (number){
    switch(number){
    case 1:
        return('One')
        break;
    case 2:
        return('Two')
        break;
    case 3:
        return('Three')
        break;
    case 4:
        return('Four')
        break;
    case 5:
        return('Five')
        break;
    case 6:
        return ('Six')
        break;
    case 7:
        return ('Seven')
        break;
    case 8:
        return('Eight')
        break;
    case 9:
        return('Nine')
        break;
    default: 
        return(text = 'Zero')
    }
}

//Alternate solutions and notes:
    
    //Way I did it was top result, but could have been cleaner without the breaks after each case. Also did not need to define number as a variable outside of the function.

//Even cleaner as:
function switchItUp(number) {
    switch (number) {
      case 0: return 'Zero';
      case 1: return 'One';
      case 2: return 'Two';
      case 3: return 'Three';
      case 4: return 'Four';
      case 5: return 'Five';
      case 6: return 'Six';
      case 7: return 'Seven';
      case 8: return 'Eight';
      case 9: return 'Nine';
    }
  }

//Or:
function switchItUp(n){
    return ["Zero","One","Two","Three","Four","Five","Six","Seven","Eight","Nine"][n]
}
