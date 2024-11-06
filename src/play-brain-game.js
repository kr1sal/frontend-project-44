import * as brainInterface from './brain-interface.js';

const playBrainGame = (BrainGame) => {
  brainInterface.welcome();
  const userName = brainInterface.askUserName();
  const brainGame = new BrainGame(userName);
  brainGame.execute();
};

export default playBrainGame;
