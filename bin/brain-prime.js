#!/usr/bin/env node
import readlineSync from 'readline-sync';
import welcome from "../src/cli.js";

const isPrime = (number) => {
    if (number === 1) {
        return true;
    }
    for (let i = 2; i < number / 2; i += 1) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

const playBrainPrime = (userName = welcome()) => {
    console.log("Answer \"yes\" if given number is prime. Otherwise answer \"no\".")

    for (let i = 0; i < 3; i += 1) {
        const question = Math.floor(Math.random() * 100);
        const rightAnswer = isPrime(question) ? "yes" : "no";
        console.log(`Question: ${question}`);
        const answer = readlineSync.question("Your answer: ");
        if (rightAnswer === answer) {
            console.log("Correct!");
        }
        else {
            console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
            console.log(`Let's try again, ${userName}!`);
            return;
        }
    }

    console.log(`Congratulations, ${userName}!`)
}

playBrainPrime()