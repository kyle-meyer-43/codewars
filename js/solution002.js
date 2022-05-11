// Write a function called repeatStr which repeats the given string exactly n times.

function repeatStr(n, s){
    console.log(s .repeat(n))
    // worked fine in console with just the log, but was returning "expected undefined to deeply equal..." error in codewars tests, so found solution on stack overflow that needed to add a return. Added a duplicate return and passed code wars test
    return s .repeat(n)
}

repeatStr(3,'Beep')


// Favorite solutions from examples given after solving?:

    // As arrow function and without console log:
        // repeatStr = (n, s) => s.repeat(n)
    