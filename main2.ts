let player1: string = "Rock"
let player2: string = "Scissors"
if (player1===player2){
    console.log("It's a tie!")
} else if ((player1==="Rock"&& player2==="Scissor")|| (player1==="Scissor"&& player2==="Paper")|| (player1==="Paper"&& player2==="Rock") ) {
    console.log("player 1 wins! ")
} else {
    console.log("player 2 wins!")
}