    
    const setup = (() => {
        const gameBoard = [
        {"playerInfo": null},
        {"playerInfo": null},
        {"playerInfo": null},
        {"playerInfo": null},
        {"playerInfo": null},
        {"playerInfo": null},
        {"playerInfo": null},
        {"playerInfo": null},
        {"playerInfo": null},];
        
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
        //console.log(setup.gameBoard);
        //console.log(setup.player1);
        //console.log(setup.player2);  

        //gameSetup: has gameboard (returns with gameSetup.gameBoard) and players (gameSetup.player1/player2)


const gamePlay = (() => {
    const placeOnBoard = (square, player) => {
        setup.gameBoard[square].playerInfo = player;
    const checkWin = () => {
        //need some way to see if player is in square: use gameBoard.playerInfo = {object}, then access what that object is
        //maybe can use whoPlayed (who just played a piece) to check, bc you only need to see if the piece you just played will result in a win or not
        //if ROW add up to 15 {}
        //if COLUMN add up to 15 {}
        //if DIAGONAL add up to 15 {}
    }
    };

return {placeOnBoard};
})();

gamePlay.placeOnBoard(1, setup.player1);
gamePlay.placeOnBoard(3, setup.player2);
console.log(setup.gameBoard);
console.log(setup.gameBoard[3].playerInfo.playerIcon); //<-- maybe add function so that we can access playerIcons easily without needing this ridiculous string of object properties

const gameFlow = (() => {

})();

