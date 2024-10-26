import Action from './action.js';

const playBrainGame = (startAction, iterAction, winAction, roundsCount = 3) => {
  const brainGame = new Action();
  return brainGame.execute(() => {
    const startActionIsSuccess = startAction.execute();
    if (!startActionIsSuccess) return brainGame.fail();

    for (let i = 0; i < roundsCount; i += 1) {
      const iterActionIsSuccess = iterAction.execute();
      if (iterActionIsSuccess === false) return brainGame.fail();
    }

    return winAction.execute();
  });
};

export default playBrainGame;
