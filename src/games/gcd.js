import readlineSync from 'readline-sync';
import { playBrainGame, compareAnswer, responseToUserAnswer } from '../brain-game.js';
import Action from '../action.js';

const getGcd = (a, b) => {
  if (!b) {
    return a;
  }

  return getGcd(b, a % b);
};

const playBrainGcd = (userName) => {
  const startAction = new Action();
  startAction.lambda = () => console.log('Find the greatest common divisor of given numbers.');

  const iterAction = new Action();
  iterAction.lambda = () => {
    const numbersCouple = {
      num1: Math.round(Math.random() * 50),
      num2: Math.round(Math.random() * 50),
    };
    getGcd(0, 1);
    getGcd(19, 0);
    getGcd(0, 0);
    const rightAnswer = getGcd(...Object.values(numbersCouple));

    console.log(`Question: ${Object.values(numbersCouple).join(' ')}`);
    const userAnswer = readlineSync.question('Your answer: ');
    responseToUserAnswer(rightAnswer, userAnswer, userName);
    if (!compareAnswer(rightAnswer, userAnswer)) {
      iterAction.fail();
    }
  };

  const winAction = new Action();
  winAction.lambda = () => console.log(`Congratulations, ${userName}!`);

  return playBrainGame(startAction, iterAction, winAction);
};

export default playBrainGcd;
