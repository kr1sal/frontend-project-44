#!/usr/bin/env node
import readlineSync from 'readline-sync';
import welcome from '../src/cli.js';

const operations = [
  {
    operation: '+',
    lambda: (a, b) => a + b,
  },
  {
    operation: '-',
    lambda: (a, b) => a - b,
  },
  {
    operation: '*',
    lambda: (a, b) => a * b,
  },
];

const playBrainCalc = (userName = welcome()) => {
  console.log('What is the result of the expression?');

  for (let i = 0; i < 3; i += 1) {
    const number1 = Math.round(Math.random() * 10);
    const number2 = Math.round(Math.random() * 10);
    const operationIndex = Math.floor(Math.random() * 3, 10);
    const rightAnswer = operations[operationIndex].lambda(number1, number2);
    console.log(`Question: ${number1} ${operations[operationIndex].operation} ${number2}`);
    const answer = readlineSync.question('Your answer: ');
    if (rightAnswer === parseInt(answer, 10)) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};

playBrainCalc();
