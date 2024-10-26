import readlineSync from 'readline-sync';
import playBrainGame from '../brain-game.js';
import Action from '../action.js';

const isEven = (num) => num % 2 === 0;

const playBrainEven = (userName) => {
  const startAction = new Action();
  startAction.lambda = () => console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const iterAction = new Action();
  iterAction.lambda = () => {
    const num = Math.round(Math.random() * 100);
    const rightAnswer = isEven(num) ? 'yes' : 'no';

    console.log(`Question: ${num}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (rightAnswer === userAnswer) {
      console.log('Correct!');
      iterAction.success();
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      iterAction.fail();
    }
  };

  const winAction = new Action();
  winAction.lambda = () => console.log(`Congratulations, ${userName}!`);

  return playBrainGame(startAction, iterAction, winAction);
};

export default playBrainEven;
