// Write a function named setAlarm which receives two parameters. The first parameter, employed, is true whenever you are employed and the second parameter, vacation is true whenever you are on vacation.

// The function should return true if you are employed and not on vacation (because these are the circumstances under which you need to set an alarm). It should return false otherwise. Examples:

//Parameters:
    //Taking in two values, both will always be boolean.

//Returns:
    // looking for alert "alarm" that alerts when status of employed is true and vacation is false. all other combos should return false

//Examples:
// setAlarm(true, true) -> false
// setAlarm(false, true) -> false
// setAlarm(false, false) -> false
// setAlarm(true, false) -> true

//Pseudo Code
    // create function that takes in 2 variables. create conditional function that returns 'true' when employed is true and on vacation is false, otherwise return 'false'.

function setAlarm(employed,vacation){
    if (employed === true && vacation === false){
        return true
    }else{
        return false
    }
}
// got it right on first attempt except had the return values in quotes. removed those and it worked. finally starting to get down syntax better

//---------------------------------------------------------
//Solutions I liked on solutions page: (all have good use of arrow functions, booleans, and/or turnary)
//---------------------------------------------------------
const setAlarm = (employed, vacation) => employed && !vacation;

//---------------------------------------------------------
function setAlarm(employed, vacation){
    return employed && !vacation;
}
//---------------------------------------------------------
function setAlarm(employed, vacation){
    return (employed && !vacation) ? true : false;
}
//here the one above is much more clear than the one below
//---------------------------------------------------------
function setAlarm(employed, vacation){
    return employed === true && vacation === false ? true : false
    
    }