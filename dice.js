// dice.js

const crypto = require("crypto");

function rollDice() {

    const randomNumber = crypto.randomInt(1, 7);

    return randomNumber;
}

console.log("Rolling dice...");

for (let i = 1; i <= 5; i++) {

    const diceValue = rollDice();

    console.log(`Roll ${i}: Dice Rolled: ${diceValue}`);
}