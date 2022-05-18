// 8 kyu
// Let's play rock paper scissors!

// Parameters: show the winner of the game. If a draw, return "draw!"

// Return: looks like just need to return? Might be good to do console.log

// examples: 
    // rps('scissors','paper') // Player 1 won!
    // rps('scissors','rock') // Player 2 won!
    // rps('paper','paper') // Draw!

// Pseudo code: conditional statments? would work to display which "card" (play) won, but not which player made the play
    // after trying, went for switch case instead (down below)

// const rps = (p1, p2) => {
//     if p1 === 'rock' && p2 === 'scissors'{
//         console.log('p1 wins!')
//     }else if p1 === 'scissors' && p2 === 'paper'{
//         console.log('p1 wins!')
//     }else if p1 === 'paper' && p2 === 'rock'{
//         console.log('p1 wins!')
//     }else if p1 === 'scissors' && p2 === 'rock'{
//         console.log('p2 wins!')
//     }else if p1 === 'rock' && p2 === 'paper'{
//         console.log('p2 wins!')
//     }else if p1 === 'paper' && p2 === 'scissors'{
//         console.log('p2 wins!')
//     }else console.log('Draw!')
    
// }   

// trying again after finding switch case option in researching

const rps = (p1, p2) => {

    var winner = null;

    switch (p1){
        case 'rock':
            if (p2 === 'scissors')
            winner = 1;
            else if (p2 === 'paper')
            winner = 2;
            break;
        case 'paper':
            if (p2 === 'rock')
            winner = 1;
            else if (p2 === 'scissors')
            winner = 2;
            break;
        case 'scissors':
            if (p2 === 'paper')
            winner = 1;
            else if (p2 === 'rock')
            winner = 2;
            break
    }

    if (winner !== null)
        return 'Player ' + winner + ' won!';

    return "Draw!";
};

// Other solutions I liked from solutions page:


// using conditional in interesting way:

// const rps = (p1, p2) => {
//     if (p1 === p2) return "Draw!";
//     var rules = {rock: "scissors", paper: "rock", scissors: "paper"};
//     if (p2 === rules[p1]) {
//       return "Player 1 won!";
//     }
//     else {
//       return "Player 2 won!";
//     }
//   };

// --------------------------------------------

// More traditional conditionals. This one is what i was going for original, but with the proper syntax so it works

// const rps = (p1, p2) => {
//     if (p1 == p2)
//       return 'Draw!';
      
//      if (p1 == 'rock' && p2 == 'scissors') 
//        return 'Player 1 won!'
//      else if (p1 == 'scissors' && p2 == 'paper') 
//        return 'Player 1 won!'
//      else if (p1 == 'paper' && p2 == 'rock') 
//        return 'Player 1 won!'
//      else
//        return 'Player 2 won!';
//   };

// --------------------------------------------

// way of doing it with conditionals that is more concise and readable:

// const rps = (p1, p2) => {
//     if (p1 === p2) return 'Draw!';
//     if (p1 === 'rock' && p2 === 'scissors') return 'Player 1 won!';
//     if (p1 === 'scissors' && p2 === 'paper') return 'Player 1 won!';
//     if (p1 === 'paper' && p2 === 'rock') return 'Player 1 won!';
//     return 'Player 2 won!';
//   };