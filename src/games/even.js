import readlineSync from 'readline-sync';
import { playBrainGame, compareAnswer, responseToUserAnswer } from '../brain-game.js';
import Action from '../action.js';

const isEven = (num) => num % 2 === 0;

const playBrainEven = (userName) => {
  const startAction = new Action();
  startAction.lambda = () => console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const iterAction = new Action();
  iterAction.lambda = () => {
    const num = Math.round(Math.random() * 1000);
    const rightAnswer = isEven(num) ? 'yes' : 'no';

    console.log(`Question: ${num}`);
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

export default playBrainEven;
