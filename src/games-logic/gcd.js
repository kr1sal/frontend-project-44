import { randint } from '../utils.js';
import BrainGame from '../brain-base/brain-game.js';
import * as brainInterface from '../brain-interface.js';
import {
  getDifficultyModeValue, defaultUserName, defaultRoundsCount, defaultDifficultyMode,
} from '../brain-config.js';

const getGcd = (a, b) => {
  if (!b) {
    return a;
  }

  return getGcd(b, a % b);
};

class GcdGame extends BrainGame {
  constructor(
    userName = defaultUserName,
    difficultyMode = defaultDifficultyMode,
    roundsCount = defaultRoundsCount,
  ) {
    super(roundsCount);

    this.startAction.lambda = () => brainInterface.describeGame('Find the greatest common divisor of given numbers.');

    this.iterAction.lambda = () => {
      const difficultyModeValue = getDifficultyModeValue(difficultyMode);
      const num1 = randint(0, difficultyModeValue);
      const num2 = randint(0, difficultyModeValue);
      const rightAnswer = getGcd(num1, num2);

      brainInterface.askQuestion(`Question: ${num1} ${num2}`);
      if (!brainInterface.askUserAnswer(userName, rightAnswer)) {
        this.iterAction.fail();
      }
    };

    this.winAction.lambda = () => brainInterface.congratulateUser(userName);
  }
}

export default GcdGame;
