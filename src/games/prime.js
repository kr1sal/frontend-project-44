import BrainGame from '../brain-game.js';
import * as brainInterface from '../brain-interface.js';
import { defaultUserName, defaultRoundsCount, defaultDifficultyMode } from '../brain-config.js';

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
    roundsCount = defaultRoundsCount,
    difficultyMode = defaultDifficultyMode,
  ) {
    super(userName, roundsCount, difficultyMode);

    this.startAction.lambda = () => brainInterface.describeGame('Answer "yes" if given number is prime. Otherwise answer "no".');

    this.iterAction.lambda = () => {
      const number = Math.floor(Math.random() * 100);
      const rightAnswer = isPrime(number) ? 'yes' : 'no';

      brainInterface.askQuestion(`Question: ${number}`);
      if (!brainInterface.askUserAnswer(this.userName, rightAnswer)) {
        this.iterAction.fail();
      }
    };

    this.winAction.lambda = () => brainInterface.congratulateUser(userName);
  }
}

export default PrimeGame;
