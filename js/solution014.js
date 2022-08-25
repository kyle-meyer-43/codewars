//Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

// Your task is to process a string with "#" symbols.

// Examples

// "abc#d##c"      ==>  "ac"
//"abc##d######"  ==>  ""
// "#######"       ==>  ""
// ""              ==>  "" 

//P: it gives us a string. will we ever be given an empty sting? yes. Will i ever be giben spcialal characters? yes probabley. but it doesn't really matter if it's in a string

//R: return a string that has letters that didn't have a # after them
//E:

//P: Make a function that takes in a string
function cleanString(s){
    //Grab the string and split it into individual characters ('a')
    let array =s.split('')
    array.forEach((val,i) => if(array[i+1] === '#'){
        array.pop(val)
    })

    for(i=0;i<=array.length;i++){
        if(array[i+1] ==='#'){
            array.pop(val)
            console.log(array)
        }
    }
    //Now it's an array. We want to map through
    //And say, does the character that coems after look like this? ####
    //if yes, pop off
    //if no, skip
    //and if it's a #, get rid of that too
    //join the string
    //Return it.

}