import readlineSync from 'readline-sync';
import playBrainGame from '../brain-game.js';
import Action from '../action.js';

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

const playBrainCalc = (userName) => {
  const startAction = new Action();
  startAction.lambda = () => console.log('What is the result of the expression?');

  const iterAction = new Action();
  iterAction.lambda = () => {
    const num1 = Math.round(Math.random() * 10);
    const num2 = Math.round(Math.random() * 10);
    const operationIndex = Math.floor(Math.random() * 3, 10);
    const operationObject = operations[operationIndex];
    const rightAnswer = operationObject.lambda(num1, num2);

    console.log(`Question: ${num1} ${operationObject.operation} ${num2}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (rightAnswer === parseInt(userAnswer, 10)) {
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

export default playBrainCalc;
