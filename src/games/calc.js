import BrainGame from '../brain-game.js';
import * as brainInterface from '../brain-interface.js';
import { defaultUserName, defaultRoundsCount, defaultDifficultyMode } from '../brain-config.js';

class CalcGame extends BrainGame {
  #operations = [
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

  constructor(
    userName = defaultUserName,
    roundsCount = defaultRoundsCount,
    difficultyMode = defaultDifficultyMode,
  ) {
    super(userName, roundsCount, difficultyMode);

    this.startAction.lambda = () => brainInterface.describeGame('What is the result of the expression?');

    this.iterAction.lambda = () => {
      const num1 = Math.round(Math.random() * this.difficultyMode);
      const num2 = Math.round(Math.random() * this.difficultyMode);
      const operationsCount = Object.keys(this.#operations).length;
      const operationIndex = Math.floor(Math.random() * operationsCount, 10);
      const operationObject = this.#operations[operationIndex];
      const rightAnswer = operationObject.lambda(num1, num2);

      brainInterface.askQuestion(`Question: ${num1} ${operationObject.operation} ${num2}`);
      if (!brainInterface.askUserAnswer(this.userName, rightAnswer)) {
        this.iterAction.fail();
      }
    };

    this.winAction.lambda = () => brainInterface.congratulateUser(userName);
  }
}

export default CalcGame;
