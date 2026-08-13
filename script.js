    
    const setup = (() => {
        const gameBoard = [{"magicNumber": 2, "playerInfo": null},
        {"magicNumber": 7, "playerInfo": null},
        {"magicNumber": 6, "playerInfo": null},
        {"magicNumber": 9, "playerInfo": null},
        {"magicNumber": 5, "playerInfo": null},
        {"magicNumber": 1, "playerInfo": null},
        {"magicNumber": 4, "playerInfo": null},
        {"magicNumber": 3, "playerInfo": null},
        {"magicNumber": 8, "playerInfo": null},];
        

        function createPlayer(name, icon) {
        let playerName = name;
        let playerIcon = icon;
        //maybe add a different parameter for wins later
        return {playerName, playerIcon}; //<returns the player object
        };

        const player1 = createPlayer('player1', 'x');
        const player2 = createPlayer('player2', 'o');

        return {gameBoard, player1, player2};
        })();
        console.log(setup.gameBoard);
        console.log(setup.player1);
        console.log(setup.player2);  

        //gameSetup: has gameboard (returns with gameSetup.gameBoard) and players (gameSetup.player1/player2)


const gamePlay = (() => {
    const placeOnBoard = (square) => {
        gameBoard[square].playerInfo = player1;
        console.log(gameBoard);
    const checkWin = () => {
        //need some way to see if player is in square: use gameBoard.playerInfo = {object}, then access what that object is
        //can access checkWin with gamePlay.checkWin
        //maybe can use whoPlayed (who just played a piece) to check, bc you only need to see if the piece you just played will result in a win or not
        //if ROW add up to 15 {}
        //if COLUMN add up to 15 {}
        //if DIAGONAL add up to 15 {}
    }
    };

return {placeOnBoard};
})();

const gameFlow = (() => {
        //gamePlay.placeOnBoard(prompt("Where would you like to play?"));
    //(function isWin() {
    //})();
})();

