// There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better than the average student in your class.

// You receive an array with your peers' test scores. Now calculate the average and compare your score!

// Return True if you're better, else False!

// Note:

// Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!

// Parameters: know your test score, taking in array of test scores in class. your score is not in that array, but can be added to get the overall average. If your score is better than average, return True. Otherwise, return False

// Returns: If your score is better than average, return True. Otherwise, return False

// examples: if average is 85 and your score is 90, returns True. If average is 85 and your score is 80, return False

// psuedo code: Take in array, calculate average, compare to your score, return True or False depending on comparison. Need two separate functions? One to find average and 1 to compare against average?  

function betterThanAverage(classPoints, yourPoints){
    let a = classPoints.reduce((a,b) => a+b)/classPoints.length
    return (yourPoints > a) ? true : false
}