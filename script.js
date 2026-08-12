/**
 * Need 4 objects:
     * gameBoard: holds a 3x3 matrix that x's or o's are stored in.
     * gameFlow: has each player take a turn placing an x or an o
     * player1: holds player1's name and his icons
     * player2: holds player2's name and his icons
 * 
 */

const gameBoard = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],

];

function createPlayer(name, icon) {
    const playerName = name;
    const playerIcon = icon;
    //maybe add a different parameter for wins later

    return {playerName, playerIcon};
}

const human = createPlayer('human', 'x');
const bot = createPlayer('bot', 'o');

console.log(human);
console.log(bot);