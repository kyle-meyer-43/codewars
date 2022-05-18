// 8 kyu
// Let's play rock paper scissors!

// Parameters: show the winner of the game. If a draw, return "draw!"

// Return: looks like just need to return? Might be good to do console.log

// examples: 
    // rps('scissors','paper') // Player 1 won!
    // rps('scissors','rock') // Player 2 won!
    // rps('paper','paper') // Draw!

// Pseudo code: conditional statments? would work to display which "card" (play) won, but not which player made the play

const rps = (p1, p2) => {
    if p1 === 'rock' && p2 === 'scissors'{
        console.log('p1 wins!')
    }else if p1 === 'scissors' && p2 === 'paper'{
        console.log('p1 wins!')
    }else if p1 === 'paper' && p2 === 'rock'{
        console.log('p1 wins!')
    }else if p1 === 'scissors' && p2 === 'rock'{
        console.log('p2 wins!')
    }else if p1 === 'rock' && p2 === 'paper'{
        console.log('p2 wins!')
    }else if p1 === 'paper' && p2 === 'scissors'{
        console.log('p2 wins!')
    }else console.log('Draw!')
    
}   