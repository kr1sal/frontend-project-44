import Action from './action.js';
import { defaultDifficultyMode, defaultRoundsCount, defaultUserName } from './brain-config.js';

class BrainGame extends Action {
  startAction;

  iterAction;

  winAction;

  difficultyMode;

  roundsCount;

  userName

  constructor(userName = defaultUserName, roundsCount = defaultRoundsCount, difficultyMode = defaultDifficultyMode) {
    super();

    this.lambda = () => {
      const startActionIsSuccess = this.startAction.execute();
      if (!startActionIsSuccess) return this.fail();
  
      for (let i = 0; i < this.roundsCount; i += 1) {
        const iterActionIsSuccess = this.iterAction.execute();
        if (iterActionIsSuccess === false) return this.fail();
      }
  
      return this.winAction.execute();
    };

    this.startAction = new Action();
    this.iterAction = new Action();
    this.winAction = new Action();

    this.userName = userName;
    this.roundsCount = roundsCount;
    this.difficultyMode = difficultyMode;
  }
}

export default BrainGame;
