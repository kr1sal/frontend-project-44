import Action from './action.js';
import { defaultRoundsCount } from '../brain-config.js';

class BrainGame extends Action {
  startAction;

  iterAction;

  winAction;

  difficultyMode;

  roundsCount;

  userName;

  constructor(
    roundsCount = defaultRoundsCount,
  ) {
    super();

    this.startAction = new Action();
    this.iterAction = new Action();
    this.winAction = new Action();

    this.lambda = () => {
      const startActionIsSuccess = this.startAction.execute();
      if (!startActionIsSuccess) return this.fail();

      for (let i = 0; i < this.roundsCount; i += 1) {
        const iterActionIsSuccess = this.iterAction.execute();
        if (iterActionIsSuccess === false) return this.fail();
      }

      return this.winAction.execute();
    };

    this.roundsCount = roundsCount;
  }
}

export default BrainGame;
