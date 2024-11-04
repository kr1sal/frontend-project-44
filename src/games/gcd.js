import BrainGame from '../brain-game.js';
import * as brainInterface from '../brain-interface.js';
import { defaultUserName, defaultRoundsCount, defaultDifficultyMode } from '../brain-config.js';

const getGcd = (a, b) => {
  if (!b) {
    return a;
  }

  return getGcd(b, a % b);
};

class GcdGame extends BrainGame {
  constructor(userName = defaultUserName, roundsCount = defaultRoundsCount, difficultyMode = defaultDifficultyMode) {
    super(userName, roundsCount, difficultyMode);

    this.startAction.lambda = () => brainInterface.describeGame('Find the greatest common divisor of given numbers.');
  
    this.iterAction.lambda = () => {
      const num1 = Math.round(Math.random() * this.difficultyMode);
      const num2 = Math.round(Math.random() * this.difficultyMode);
      const rightAnswer = getGcd(num1, num2);
      
      brainInterface.askQuestion(`Question: ${num1} ${num2}`)
      if (!brainInterface.askUserAnswer(this.userName, rightAnswer)) {
        this.iterAction.fail();
      }
    };

    this.winAction.lambda = () => brainInterface.congratulateUser(userName);
  }
}

export default GcdGame;
