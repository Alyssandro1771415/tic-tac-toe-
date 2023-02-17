document.addEventListener('DOMContentLoaded', () => {


    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        square.addEventListener('click', handleClick);
    })

})

function handleClick(event){

    let square = event.target;
    let position = square.id;
    let winnerSymbol;

    if(handleMove(position)){

        if(playerTime == 1){
            winnerSymbol = "⚔";
        } else{
            winnerSymbol = "🛡";
        }

        setTimeout(() =>{
            alert("O jogo acabou e o vencedor foi " + winnerSymbol);
        }, 10);
    
    };
    updateSquare(position);
}

function updateSquare(position){
    let square = document.getElementById(position.toString());
    let symbol = board[position];
    square.innerHTML = `<div class='${symbol}'></div>`;
}

function reloadGame(){

    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {

        let position = square.id;
        let symbol = board[position];

        if(symbol != ''){
            square.innerHTML = ``;
        }

    })

    for(let i in board){
        board[i] = '';
    }

    playerTime = 0;

    gameOver = false;

}