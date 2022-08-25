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
const cleanString = s => {
    
    let ar = [];
    for (let e of s){

        if(e !='#'){
            ar.push(e)}
            else if (e == '#'){
                ar.pop() } console.log(ar)
}
        return ar.join('')
    
    }
            

console.log(cleanString)

//Grab the string and split it into individual characters ('a')   
//Now it's an array. We want to map through
    //And say, does the character that coems after look like this? ####
    //if yes, pop off
    //if no, skip
    //and if it's a #, get rid of that too
    //join the string
    //Return it.

