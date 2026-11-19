// 5 options for slot machine
// slot machine must have 3 reels 
// min $5 bet
// bet $5 and get *10
//max $50 bet 
// bet $50 and get *5
// a button to submit the bet 
// input a bet amount and reels will be randomly shuffled and given a value based on the bet amount
// need to have a balance of $500
const symbols = ['A','B','C','D','F'];

const minBetButton = document.getElementById("minBet");
const maxBetButton = document.getElementById("maxBet");
const walletDisplay = document.getElementById("wallet");
const reel1 = document.getElementById("reel1");
const reel2 = document.getElementById("reel2");
const reel3 = document.getElementById("reel3");

let wallet = 500;
walletDisplay.innerText = wallet;

function wager(bet, multiplier){
    if (wallet < bet) {
        walletDisplay.innerText = "You should go home";
    } else {
        //play the game 
        wallet = wallet - bet;

        let spin1 = symbols[Math.floor(Math.random() * symbols.length)];
        let spin2 = symbols[Math.floor(Math.random() * symbols.length)];
        let spin3 = symbols[Math.floor(Math.random() * symbols.length)];

        reel1.innerText = spin1;
        reel2.innerText = spin2;
        reel3.innerText = spin3;

        if (spin1 == spin2 && spin2 == spin3) {
            let winnings = bet * multiplier;
            wallet = wallet + winnings;
            walletDisplay.innerText = "YOU WIN " + winnings;
        } else {
            walletDisplay.innerText = wallet;
        }
    }
}

minBetButton.addEventListener("click", function(){
    wager(5, 10);
});

maxBetButton.addEventListener("click", function(){
    wager(50, 5);
})