let coinFlip;
let timesToLoop = prompt("How many times do you want to flip the coin?");
timesToLoop = parseInt(timesToLoop)
if (!isNaN(timesToLoop) && timesToLoop > 0) {
    for (let i = 0; i < timesToLoop; i++) {
        let randomNum = Math.round(Math.random());
        coinFlip = randomNum;
        if (coinFlip === 0) {
                    console.log("Heads");
                } else {
                    console.log("Tails");
                }
    }
}
else {
    alert("Please enter a number greater than 0")
}