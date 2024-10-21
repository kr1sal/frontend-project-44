#!/usr/bin/env node
import readlineSync from 'readline-sync';
import welcome from "../src/cli.js";

const playBrainEven = (userName = welcome()) => {
    console.log("Answer \"yes\" if the number is even, otherwise answer \"no\".")

    for (let i = 0; i < 3; i += 1) {
        const question = Math.floor(Math.random() * 100);
        console.log(`Question: ${question}`);
        const answer = readlineSync.question("Your answer: ");
        if ((question % 2 == 0 && answer == "yes") || (question % 2 == 1 && answer == "no")) {
            console.log("Correct!");
        }
        else {
            console.log(`'${answer}' is wrong answer ;(. Correct answer was '${question % 2 == 0 ? "yes" : "no"}'.`);
            console.log(`Let's try again, ${userName}!`);
            return;
        }
    }

    console.log(`Congratulations, ${userName}!`)
}

playBrainEven();