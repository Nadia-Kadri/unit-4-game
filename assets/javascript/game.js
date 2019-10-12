let wins = 0;
let losses = 0;
let count = 0;

let target = Math.floor(Math.random() * ((120 - 19) + 1)) + 19;

let crystalOne = Math.floor(Math.random() * 12 + 1);
let crystalTwo = Math.floor(Math.random() * 12 + 1);
let crystalThree = Math.floor(Math.random() * 12 + 1);
let crystalFour = Math.floor(Math.random() * 12 + 1);

console.log(`target: ${target}`);
$("#computer-number").text(target);

console.log(`Crystal One: ${crystalOne}`)
console.log(`Crystal Two: ${crystalTwo}`)
console.log(`Crystal Three: ${crystalThree}`)
console.log(`Crystal Four: ${crystalFour}`)

$(document).ready(function() {

    $("#crystal-one").on("click", function() {
        count = count + crystalOne;
        console.log(`count: ${count}`)
        scoreChecker()
    });

    $("#crystal-two").on("click", function() {
        count = count + crystalTwo;
        console.log(`count: ${count}`)
        scoreChecker()
    });

    $("#crystal-three").on("click", function() {
        count = count + crystalThree;
        console.log(`count: ${count}`)
        scoreChecker()
    });

    $("#crystal-four").on("click", function() {
        count = count + crystalFour;
        console.log(`count: ${count}`)
        scoreChecker()
    });

    function scoreChecker() {
        $("#count").text(count);

        if (count > target) {
            losses++
            $("#losses").text(losses)
            console.log(`You lose! Wins: ${wins} Losses: ${losses}`)
            reset()
        }

        if (count === target) {
            wins++
            $("#wins").text(wins)
            console.log(`You win! Wins: ${wins} Losses: ${losses}`)
            reset()
        }
    }

    function reset() {
        count = 0;
        $("#count").text(count);

        $("#wins").text(wins)
        $("#losses").text(losses)

        target = Math.floor(Math.random() * ((120 - 19) + 1)) + 19;

        crystalOne = Math.floor(Math.random() * 12 + 1);
        crystalTwo = Math.floor(Math.random() * 12 + 1);
        crystalThree = Math.floor(Math.random() * 12 + 1);
        crystalFour = Math.floor(Math.random() * 12 + 1);

        console.log(`target: ${target}`);
        $("#computer-number").text(target);

        console.log(`Crystal One: ${crystalOne}`)
        console.log(`Crystal Two: ${crystalTwo}`)
        console.log(`Crystal Three: ${crystalThree}`)
        console.log(`Crystal Four: ${crystalFour}`)
    }

});
