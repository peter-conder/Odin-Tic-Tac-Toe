    
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

        function makeWinArray(arr) {
            let arr1 = arr.slice(0,3);
            let arr2 = arr.slice(3,6);
            let arr3 = arr.slice(6);
            let arr4 = ((arr) => {
                let array = [];
                array.push(gameBoard[0]);
                array.push(gameBoard[3]);
                array.push(gameBoard[6]);
                return array;
            })();

            let arr5 = ((arr) => {
                let array = [];
                array.push(gameBoard[1]);
                array.push(gameBoard[4]);
                array.push(gameBoard[7]);
                return array;

            })();let arr6 = ((arr) => {
                let array = [];
                array.push(gameBoard[2]);
                array.push(gameBoard[5]);
                array.push(gameBoard[8]);
                return array;

            })();let arr7 = ((arr) => {
                let array = [];
                array.push(gameBoard[0]);
                array.push(gameBoard[4]);
                array.push(gameBoard[8]);
                return array;

            })();let arr8 = ((arr) => {
                let array = [];
                array.push(gameBoard[2]);
                array.push(gameBoard[4]);
                array.push(gameBoard[6]);
                return array;

            })();
            let winArray1 = [arr1, arr2, arr3, arr4, arr5, arr6, arr7, arr8];
            return winArray1;
        }

        const winArray1 = makeWinArray(gameBoard);

        return {gameBoard, player1, player2, winArray1};
        })();
        //console.log(setup.gameBoard);
        //console.log(setup.player1);
        //console.log(setup.player2);  

        //gameSetup: has gameboard (returns with gameSetup.gameBoard) and players (gameSetup.player1/player2)
        console.log(setup.winArray1);

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
//console.log(setup.gameBoard);
//console.log(setup.gameBoard[3].playerInfo.playerIcon); //<-- maybe add function so that we can access playerIcons easily without needing this ridiculous string of object properties

const gameFlow = (() => {
    //gamePlay.placeOnBoard(prompt("where would you like to place?"), setup.player1);
    //gamePlay.placeOnBoard(prompt("where would you like to place?"), setup.player2);
    //console.log(setup.gameBoard[1].playerInfo.playerIcon);
})();
function setPlayerInfo(arr) {
    let j = 0;
    for (let i = 0; i < 9; i++) {
        arr[j].playerInfo = j;
        j++;
    }
}
setPlayerInfo(setup.gameBoard);
console.log(setup.gameBoard);

//can now place icons in array.
//what now? need a way to check win condition.
//easiest way to implement this is to make a gamePlay.isWin object that can play after turn 5 in the gameFlow object.
/** isWin
 * check the contents of specific sub-arrays
 * sub-arrays: 1,2,3 || 4,5,6 || 7,8,9 || 1,4,7 || 2,5,8 || 3,6,9 || 1,5,9 || 3,5,7 
 * loop through each of these sub-arrays, if any of these sub-arrays have the same player object in all of them, then that player wins
 * maybe make this an array of arrays? winArray = array of these arrays, made using splice
 */