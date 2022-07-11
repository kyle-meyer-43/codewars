//7 kyu : Validate PIN code for ATM

// Parameters: Taking in attempt at making new PIN code. Good PINS are strings with either exactly 4 or 6 digits. All others that have different amount of digits or non numbers(like letters) are invalid/not compatible

//returns: If it is a valid PIN string return true. If not return false

// examples: 
    //3567  -- > true
    //56731 --> false
    //h4g7  --> false

//Pseudo code: take in attempt, evaluate, return result of true or false of fulfilling requirements.


//still need to add for if contains letters or other characters
function validatePIN (pin) {
    if  ((pin.length === 4 || 6)){
        return true
    }else if((pin.length === 1)){
        return false
    }
    else return false
  }