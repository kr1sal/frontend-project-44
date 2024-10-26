import readlineSync from 'readline-sync';
import playBrainGame from '../brain-game.js';
import Action from '../action.js';

const getGcd = (a, b) => {
  if (a === 0 && b === 0) return NaN;
  if (a === 0 || b === 0) return a !== 0 ? a : b;

  if (a >= b) {
    if (a % b === 0) {
      return b;
    }
    return getGcd(a % b, b);
  }

  if (b % a === 0) {
    return a;
  }
  return getGcd(a, b % a);
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
    const rightAnswer = getGcd(...Object.values(numbersCouple));

    console.log(`Question: ${Object.values(numbersCouple).join(' ')}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (rightAnswer === parseInt(userAnswer, 10)) {
      console.log('Correct!');
      iterAction.success();
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
      iterAction.fail();
    }
  };

  const winAction = new Action();
  winAction.lambda = () => console.log(`Congratulations, ${userName}!`);

  return playBrainGame(startAction, iterAction, winAction);
};

export default playBrainGcd;
