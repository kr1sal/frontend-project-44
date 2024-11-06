import { randint } from '../utils.js';
import BrainGame from '../brain-base/brain-game.js';
import * as brainInterface from '../brain-interface.js';
import {
  getDifficultyModeValue, defaultUserName, defaultRoundsCount, defaultDifficultyMode,
} from '../brain-config.js';

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
    difficultyMode = defaultDifficultyMode,
    roundsCount = defaultRoundsCount,
  ) {
    super(roundsCount);

    this.startAction.lambda = () => brainInterface.describeGame('What is the result of the expression?');

    this.iterAction.lambda = () => {
      const difficultyModeValue = getDifficultyModeValue(difficultyMode);
      const num1 = randint(0, difficultyModeValue);
      const num2 = randint(0, difficultyModeValue);
      const operationsCount = Object.keys(this.#operations).length;
      const operationIndex = Math.floor(Math.random() * operationsCount, 10);
      const operationObject = this.#operations[operationIndex];
      const rightAnswer = operationObject.lambda(num1, num2);

      brainInterface.askQuestion(`${num1} ${operationObject.operation} ${num2}`);
      if (!brainInterface.askUserAnswer(userName, rightAnswer)) {
        this.iterAction.fail();
      }
    };

    this.winAction.lambda = () => brainInterface.congratulateUser(userName);
  }
}

export default CalcGame;
