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

