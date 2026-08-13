    
    (function () {const gameBoard = [
        {"magicNumber": 2, "playerInfo": null},
        {"magicNumber": 7, "playerInfo": null},
        {"magicNumber": 6, "playerInfo": null},
        {"magicNumber": 9, "playerInfo": null},
        {"magicNumber": 5, "playerInfo": null},
        {"magicNumber": 1, "playerInfo": null},
        {"magicNumber": 4, "playerInfo": null},
        {"magicNumber": 3, "playerInfo": null},
        {"magicNumber": 8, "playerInfo": null},]
    })();
(function ()
    {function createPlayer(name, icon) {
    const playerName = name;
    const playerIcon = icon;
    //maybe add a different parameter for wins later
    return {playerName, playerIcon};
        }
    const human = createPlayer('human', 'x');
    const bot = createPlayer('bot', 'o');}
    )();

const gamePlay = (() => {
    const placeOnBoard = (square) => {
        gameBoard[square].playerInfo = human;
        console.log(gameBoard);
    };

return {placeOnBoard};
})();

//making a new function referencing events in gameFlow DOES work.

const gameFlow = (() => {
    function isWin() {
    };
})();

//gamePlace.placeOnBoard(0);
//gamePlace.botPlaysPiece();

