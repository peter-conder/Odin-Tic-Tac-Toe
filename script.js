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
                let newContent = document.createTextNode(`${newSquare.playerInfo}`);
                newDiv.classList.add("gameBox");
                newDiv.appendChild(newContent);
                divContainer.appendChild(newDiv);
            }
            let looper = 0;
            for (i = 0; i < 9; i++) {
                addGameBoard(looper);
                looper++;
            }
            return boardArray;
        })();
        /**
         * How to make the DOM elements?
             * add those divs with js directly:
                 * let gameBoard array
                 * for until 9:
                 * function add div:
                     * create object (class?)
                   * create element in DOM with name [s]
                   * let element.textContent = object.playerInfo
                   * push element to gameBoard
         */


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
        setup.gameBoard[square].playerInfo = player;
    } else if (canPlace === false) {
        canPlace = true;
        let differentSquare = prompt("choose a different square");
        placeOnBoard(differentSquare, player);
    };
}

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
 * link the gameBoard to the DOM
 */