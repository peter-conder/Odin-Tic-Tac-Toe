    const ticTacToe = (() => {
    //this is now one massive object! no global code whatsover.
    //Just have to be careful where I put parentheses and stuff.
    
    const gameBoard = [
        {"magicNumber": 2, "playerInfo": null},
        {"magicNumber": 7, "playerInfo": null},
        {"magicNumber": 6, "playerInfo": null},
        {"magicNumber": 9, "playerInfo": null},
        {"magicNumber": 5, "playerInfo": null},
        {"magicNumber": 1, "playerInfo": null},
        {"magicNumber": 4, "playerInfo": null},
        {"magicNumber": 3, "playerInfo": null},
        {"magicNumber": 8, "playerInfo": null},
    ]

function createPlayer(name, icon) {
    const playerName = name;
    const playerIcon = icon;
    //maybe add a different parameter for wins later
    return {playerName, playerIcon};
}

const human = createPlayer('human', 'x');
const bot = createPlayer('bot', 'o');

const gameFlow = (() => {
    const placeOnBoard = (square) => {
        gameBoard[square].playerInfo = 'human';
        return console.log(gameBoard);
    };



return {placeOnBoard};
})();

console.log(gameFlow.placeOnBoard(prompt("what do you want to play?")));

})();
