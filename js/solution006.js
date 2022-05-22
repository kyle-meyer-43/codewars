// 8kyu: Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

// Parameters: Take in a value in method/function. Value will always be a boolean. 

// Returns: if true, return "yes", if no, return "no"

// Examples: true = "yes"  false + "no"

// psuedo code: create a conditional function that takes in boolean and returns corresponding value

function boolToWord(bool){
    if (bool==true) 
        return "Yes"
else if(bool==false) 
    return "No"
}