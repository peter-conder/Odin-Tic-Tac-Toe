    
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
        let canPlace = true;
        function isOccupied(input) {
            if (setup.gameBoard[input].playerInfo === null)
                {return;
                } else if (setup.gameBoard[input].playerInfo != null) {
                    console.error("that square is taken!")
                    return canPlace = false;
                }}
    const placeOnBoard = (square, player) => {
        isOccupied(square);
        if (canPlace === true) {
        setup.gameBoard[square].playerInfo = player;
    } else if (canPlace === false) {
        canPlace = true;
        let differentSquare = prompt("choose a different square");
        placeOnBoard(differentSquare, player);
    };
}
return {placeOnBoard};
})();

//gamePlay.placeOnBoard(1, setup.player1);
//gamePlay.placeOnBoard(3, setup.player2);
console.log(setup.gameBoard);
//console.log(setup.gameBoard[3].playerInfo.playerIcon); //<-- maybe add function so that we can access playerIcons easily without needing this ridiculous string of object properties

const gameFlow = (() => {
    gamePlay.placeOnBoard(prompt("where would you like to place?"), setup.player1);
    gamePlay.placeOnBoard(prompt("where would you like to place?"), setup.player2);
})();

