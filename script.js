const gameBoard = 
    [1,2,3,4,5,6,7,8,9];

//console.log(gameBoard);
//console.log(gameBoard.at[1],[1]);

function createPlayer(name, icon) {
    const playerName = name;
    const playerIcon = icon;
    //maybe add a different parameter for wins later
    return {playerName, playerIcon};
}

const human = createPlayer('human', 'x');
const bot = createPlayer('bot', 'o');
//console.log(human);
//console.log(bot);

const gameFlow = (() => {
    const placeOnBoard = (square) => {
        gameBoard.splice(square, 1, human);
        return console.log(gameBoard);
    };

return {placeOnBoard};
})();

console.log(gameFlow.placeOnBoard(1));