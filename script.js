//const { createElement } = require("react");
    
    const setup = (() => {
        /**const gameBoard = [
        {"playerInfo": null, "boardID": 0},
        {"playerInfo": null, "boardID": 1},
        {"playerInfo": null, "boardID": 2},
        {"playerInfo": null, "boardID": 3},
        {"playerInfo": null, "boardID": 4},
        {"playerInfo": null, "boardID": 5},
        {"playerInfo": null, "boardID": 6},
        {"playerInfo": null, "boardID": 7},
        {"playerInfo": null, "boardID": 8},];**/
        const gameBoard = (() => {


        const boardArray = [];
        
            function addGameBoard(boardIdent) {
                let newSquare = {
                    "playerInfo": "",
                    "boardID": boardIdent}
                boardArray.push(newSquare);
                let newDiv =  document.createElement("div");
                this.boardID = boardIdent;
                newDiv.boardID = boardIdent;
                let newContent = document.createTextNode(`${newSquare.playerInfo}`);
                newDiv.classList.add("gameBox");
                newDiv.appendChild(newContent);
                divContainer.appendChild(newDiv);
                newDiv.addEventListener(
                    "click", ()=> {
            this.boardID=boardIdent;
            return console.log`${(this.boardID)}`;});
            }

            let looper = 0;
            for (i = 0; i < 9; i++) {
                addGameBoard(looper);
                looper++;
            }
            return boardArray;
        })();
        /**
         * how to have placeOnBoard
         * 
         * **/

        function createPlayer(name, icon) {
            let playerName = name;
            let playerIcon = icon;
                //maybe add a different parameter for wins later
            return {playerName, playerIcon}; //<returns the player object
        };

        const player1 = createPlayer('player1', 'x');
        const player2 = createPlayer('player2', 'o');

        // 0 | 1 | 2
        // 3 | 4 | 5
        // 6 | 7 | 8

        /**function makeWinArray() {
            //makes the mini-arrays that will check if a player has won or not
            let arr1 = (() => {
                let array = [];
                array.push(gameBoard[0]);
                array.push(gameBoard[1]);
                array.push(gameBoard[2]);
                return array;
                    })();

            let arr2 = (() => {
                let array = [];
                array.push(gameBoard[3]);
                array.push(gameBoard[4]);
                array.push(gameBoard[5]);
                return array;
                    })();

            let arr3 = (() => {
                let array = [];
                array.push(gameBoard[6]);
                array.push(gameBoard[7]);
                array.push(gameBoard[8]);
                return array;
                     })();

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
            return winArray1;**/
        

        //const winArray = makeWinArray(gameBoard);

        return {player1, player2, gameBoard
            //winArray
        };
        })();

const gamePlay = (() => {
        let canPlace = true;
        let continuePlay = true;
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
        setup.gameBoard[square].playerInfo = player.playerIcon;
    } else if (canPlace === false) {
        canPlace = true;
        let differentSquare = alert("choose a different square");
        placeOnBoard(square,player);
    };
}
//add a local function so u can know what square you're placing on



/**const isWin = (player) => {
    let s = 0;
    for (let t = 0; t < 8; t++) {
    let subArray = setup.winArray[s];
    let isEqual = arr => arr.every(item => item.playerInfo === arr[0].playerInfo);
    if (isEqual(subArray) === true) {
        console.log(`somebody won, triggered at${JSON.stringify(subArray)}`);
        return console.log(`${JSON.stringify(player.playerName)} won!`);
    }  else {
        console.log("nobody won");
    }
    s++;
   };
};**/

const gameTurn = (square, player) => {
    placeOnBoard(square, player);
    //isWin(player);
}
return {gameTurn};
})();



const gameFlow = (() => {
    console.log(setup.gameBoard);
})();

/**
 * Fix isWin
 * how to actually interact with the DOM?
     * can't call functions from within setup because nothing else is called yet.
     * maybe in gamePlay make a loop that loops through the DOM under divContainer, adding eventListeners to each gameBox div that are linked to a function that triggers placeOnBoard and change playerInfo to setup.player.playerIcon.
     * then for isWin I make a bunch of winArrays, very similar to before, and then loop through them, making sure to loop through each winArray after every time you place a piece and checking that the contents of each winArray are all equal to eachother and not blank. if they are all equal, then trigger win (confetti, maybe something with all the squares of the DOM).
     * when every square is filled, and if winArray returns false, then trigger catsGame, which spawns in a picture of a cat over the whole screen. 
 */