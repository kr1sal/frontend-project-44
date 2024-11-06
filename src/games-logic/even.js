import { randint } from '../utils.js';
import BrainGame from '../brain-base/brain-game.js';
import * as brainInterface from '../brain-interface.js';
import {
  getDifficultyModeValue, defaultUserName, defaultRoundsCount, defaultDifficultyMode,
} from '../brain-config.js';

const isEven = (num) => num % 2 === 0;

class EvenGame extends BrainGame {
  constructor(
    userName = defaultUserName,
    difficultyMode = defaultDifficultyMode,
    roundsCount = defaultRoundsCount,
  ) {
    super('brain-even', roundsCount);

    this.startAction.lambda = () => brainInterface.describeGame('Answer "yes" if the number is even, otherwise answer "no".');

    this.iterAction.lambda = () => {
      const num = randint(0, getDifficultyModeValue(difficultyMode)) * 2;
      const rightAnswer = isEven(num) ? 'yes' : 'no';

      brainInterface.askQuestion(`${num}`);
      if (!brainInterface.askUserAnswer(userName, rightAnswer)) {
        this.iterAction.fail();
      }
    };

    this.winAction.lambda = () => brainInterface.congratulateUser(userName);
  }
}

export default EvenGame;
