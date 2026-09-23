    
    const setup = (() => {
        const gameBoard = [
        {"playerInfo": null, "boardID": 0},
        {"playerInfo": null, "boardID": 1},
        {"playerInfo": null, "boardID": 2},
        {"playerInfo": null, "boardID": 3},
        {"playerInfo": null, "boardID": 4},
        {"playerInfo": null, "boardID": 5},
        {"playerInfo": null, "boardID": 6},
        {"playerInfo": null, "boardID": 7},
        {"playerInfo": null, "boardID": 8},];
        
        function createPlayer(name, icon) {
        let playerName = name;
        let playerIcon = icon;
        //maybe add a different parameter for wins later
        return {playerName, playerIcon}; //<returns the player object
        };

        const player1 = createPlayer('player1', 'x');
        const player2 = createPlayer('player2', 'o');
        //creates players

        function makeWinArray(parentArray) {
            let arr1 = parentArray.slice(0,3);
            let arr2 = parentArray.slice(3,6);
            let arr3 = parentArray.slice(6);
            let arr4 = (() => {
                let array = [];
                array.push(gameBoard[0]);
                array.push(gameBoard[3]);
                array.push(gameBoard[6]);
                return array;
                    })();
                
            let arr5 = (() => {
                let array = [];
                array.push(gameBoard[1]);
                array.push(gameBoard[4]);
                array.push(gameBoard[7]);
                return array;
                    })();
            
            let arr6 = (() => {
                let array = [];
                array.push(gameBoard[2]);
                array.push(gameBoard[5]);
                array.push(gameBoard[8]);
                return array;
                    })();

            let arr7 = (() => {
                let array = [];
                array.push(gameBoard[0]);
                array.push(gameBoard[4]);
                array.push(gameBoard[8]);
                return array;
                    })();
    
            let arr8 = (() => {
                let array = [];
                array.push(gameBoard[2]);
                array.push(gameBoard[4]);
                array.push(gameBoard[6]);
                return array;
                    })();
            let winArray1 = [arr1, arr2, arr3, arr4, arr5, arr6, arr7, arr8];
            return winArray1;
        }

        const winArray = makeWinArray(gameBoard);

        return {gameBoard, player1, player2, winArray};
        })();


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

const isWin = () => {
    let s = 0;
    for (let t = 0; t < 8; t++) {
    let subArray = setup.winArray[s];
    let isEqual = arr => arr.every(item => item === arr[0]);
    if (isEqual(subArray) === true) {
        console.log('somebody won');
    }  else {
        console.log("nobody won");
    }
    s++;
   };
};
return {placeOnBoard, isWin};
})();

//console.log(setup.gameBoard[3].playerInfo.playerIcon); //<-- maybe add function so that we can access playerIcons easily without needing this ridiculous string of object properties

const gameFlow = (() => {
    gamePlay.placeOnBoard(prompt("player1"), setup.player1);
    gamePlay.placeOnBoard(prompt("player1"), setup.player1);
    gamePlay.placeOnBoard(prompt("player1"), setup.player1);
    gamePlay.isWin();
    console.log(setup.gameBoard);
})();



//sets playerInfo to 0-8 on each array square
//I made this little loop to practice loops I guess. I could have done this manually but no

//-------------------------------------
//setPlayerInfo(setup.gameBoard);
//console.log(setup.gameBoard);
//console.log(setup.winArray[0][1]);
//-------------------------------------

//can now place icons in array.
//what now? need a way to check win condition.
//easiest way to implement this is to make a gamePlay.isWin object that can play after turn 5 in the gameFlow object.

/** isWin
 * check the contents of specific sub-arrays
 * sub-arrays: 1,2,3 || 4,5,6 || 7,8,9 || 1,4,7 || 2,5,8 || 3,6,9 || 1,5,9 || 3,5,7
 
 * loop through each of these sub-arrays, if any of these sub-arrays have the same player object in all of them, then that player wins
 */