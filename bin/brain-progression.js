#!/usr/bin/env node
import readlineSync from 'readline-sync';
import welcome from "../src/cli.js";

const arithmeticProgression = (length, start, step) => {
    const progression = [];
    for (let i = 0; i < length; i += 1) {
        progression.push(start + step * i);
    }
    return progression;
}

const playBrainProgression = (userName = welcome()) => {
    console.log("What number is missing in the progression?")

    for (let i = 0; i < 3; i += 1) {
        const progression = arithmeticProgression(10, Math.floor(Math.random() * 10), Math.floor(Math.random() * 10) + 1)
        const numberIndex = parseInt(Math.random() * 10);
        const question = progression.map((element) => element == progression[numberIndex] ? ".." : element);
        const rightAnswer = progression[numberIndex];
        console.log(`Question: ${question.join(" ")}`);
        const answer = readlineSync.question("Your answer: ");
        if (rightAnswer === parseInt(answer)) {
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

playBrainProgression()