import { randint } from '../utils.js';
import BrainGame from '../brain-base/brain-game.js';
import * as brainInterface from '../brain-interface.js';
import {
  getDifficultyModeValue, defaultUserName, defaultRoundsCount, defaultDifficultyMode,
} from '../brain-config.js';

const isPrime = (number) => {
  if (number === 0 || number === 1) return false;

  for (let i = 2; i < number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

class PrimeGame extends BrainGame {
  constructor(
    userName = defaultUserName,
    difficultyMode = defaultDifficultyMode,
    roundsCount = defaultRoundsCount,
  ) {
    super(roundsCount);

    this.startAction.lambda = () => brainInterface.describeGame('Answer "yes" if given number is prime. Otherwise answer "no".');

    this.iterAction.lambda = () => {
      const num = randint(0, getDifficultyModeValue(difficultyMode)) * 2;
      const rightAnswer = isPrime(num) ? 'yes' : 'no';

      brainInterface.askQuestion(`Question: ${num}`);
      if (!brainInterface.askUserAnswer(userName, rightAnswer)) {
        this.iterAction.fail();
      }
    };

    this.winAction.lambda = () => brainInterface.congratulateUser(userName);
  }
}

export default PrimeGame;
