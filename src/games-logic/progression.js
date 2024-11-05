import { randint } from '../utils.js';
import BrainGame from '../brain-base/brain-game.js';
import * as brainInterface from '../brain-interface.js';
import {
  getDifficultyModeValue, defaultUserName, defaultRoundsCount, defaultDifficultyMode,
} from '../brain-config.js';

const getProgression = (length, start, step) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + step * i);
  }
  return progression;
};

class ProgressionGame extends BrainGame {
  constructor(
    userName = defaultUserName,
    difficultyMode = defaultDifficultyMode,
    roundsCount = defaultRoundsCount,
  ) {
    super(roundsCount);

    this.startAction.lambda = () => brainInterface.describeGame('What number is missing in the progression?');

    this.iterAction.lambda = () => {
      const progressionLength = 10;
      const difficultyModeValue = getDifficultyModeValue(difficultyMode) / 5;
      const progressionStart = randint(0, difficultyModeValue);
      const progressionStep = randint(0, difficultyModeValue) + 1;
      const progression = getProgression(progressionLength, progressionStart, progressionStep);
      const numberIndex = randint(1, 9);
      const rightAnswer = progression[numberIndex];
      const progressionWithUnknownNum = progression.map((element) => (element === progression[numberIndex] ? '..' : element));

      brainInterface.askQuestion(`Question: ${progressionWithUnknownNum.join(' ')}`);
      if (!brainInterface.askUserAnswer(userName, rightAnswer)) {
        this.iterAction.fail();
      }
    };

    this.winAction.lambda = () => brainInterface.congratulateUser(userName);
  }
}

export default ProgressionGame;
