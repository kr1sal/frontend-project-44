import BrainGame from '../brain-game.js';
import * as brainInterface from '../brain-interface.js';
import { defaultUserName, defaultRoundsCount, defaultDifficultyMode } from '../brain-config.js';

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
    roundsCount = defaultRoundsCount,
    difficultyMode = defaultDifficultyMode,
  ) {
    super(userName, roundsCount, difficultyMode);

    this.startAction.lambda = () => brainInterface.describeGame('What number is missing in the progression?');

    this.iterAction.lambda = () => {
      const progressionLength = 10;
      const progressionStart = Math.round(Math.random() * 10);
      const progressionStep = Math.round(Math.random() * 10) + 1;
      const progression = getProgression(progressionLength, progressionStart, progressionStep);
      const numberIndex = Math.floor(Math.random() * 10);
      const rightAnswer = progression[numberIndex];
      const progressionWithUnknownNum = progression.map((element) => (element === progression[numberIndex] ? '..' : element));

      brainInterface.askQuestion(`Question: ${progressionWithUnknownNum.join(' ')}`);
      if (!brainInterface.askUserAnswer(this.userName, rightAnswer)) {
        this.iterAction.fail();
      }
    };

    this.winAction.lambda = () => brainInterface.congratulateUser(userName);
  }
}

export default ProgressionGame;
