import BrainGame from '../brain-game.js';
import * as brainInterface from '../brain-interface.js';
import { defaultUserName, defaultRoundsCount, defaultDifficultyMode } from '../brain-config.js';

const isEven = (num) => num % 2 === 0;

class EvenGame extends BrainGame {
  constructor(
    userName = defaultUserName,
    roundsCount = defaultRoundsCount,
    difficultyMode = defaultDifficultyMode,
  ) {
    super(userName, roundsCount, difficultyMode);

    this.startAction.lambda = () => brainInterface.describeGame('Answer "yes" if the number is even, otherwise answer "no".');

    this.iterAction.lambda = () => {
      const num = Math.round(Math.random() * this.difficultyMode);
      const rightAnswer = isEven(num) ? 'yes' : 'no';

      brainInterface.askQuestion(`Question: ${num}`);
      if (!brainInterface.askUserAnswer(this.userName, rightAnswer)) {
        this.iterAction.fail();
      }
    };

    this.winAction.lambda = () => brainInterface.congratulateUser(userName);
  }
}

export default EvenGame;
