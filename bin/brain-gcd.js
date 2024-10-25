#!/usr/bin/env node
import readlineSync from 'readline-sync';
import welcome from '../src/cli.js';

const gcd = (a, b) => {
  if (a >= b) {
    if (a % b === 0) {
      return b;
    }
    return gcd(a % b, b);
  }

  if (b % a === 0) {
    return a;
  }
  return gcd(a, b % a);
};

const playBrainGcd = (userName = welcome()) => {
  console.log('Find the greatest common divisor of given numbers.');

  for (let i = 0; i < 3; i += 1) {
    const question = [Math.round(Math.random() * 50), Math.round(Math.random() * 50)];
    const rightAnswer = gcd(...question);
    console.log(`Question: ${question.join(' ')}`);
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

playBrainGcd();
