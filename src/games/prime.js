import readlineSync from 'readline-sync';
import { playBrainGame, compareAnswer, responseToUserAnswer } from '../brain-game.js';
import Action from '../action.js';

const isPrime = (number) => {
  if (number === 0) return false;
  if (number === 1) return true;

  for (let i = 2; i < number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const playBrainPrime = (userName) => {
  const startAction = new Action();
  startAction.lambda = () => console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  const iterAction = new Action();
  iterAction.lambda = () => {
    const question = Math.floor(Math.random() * 100);
    const rightAnswer = isPrime(question) ? 'yes' : 'no';

    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    responseToUserAnswer(rightAnswer, userAnswer, userName);
    if (!compareAnswer(rightAnswer, userAnswer)) {
      iterAction.fail();
    }
  };

  const winAction = new Action();
  winAction.lambda = () => console.log(`Congratulations, ${userName}!`);

  playBrainGame(startAction, iterAction, winAction);
};

export default playBrainPrime;
