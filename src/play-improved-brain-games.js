import * as brainInterface from './brain-interface.js';
import { normalizeString } from './utils.js';

const playImprovedBrainGames = (...brainGames) => {
  brainInterface.printIbg();
  const userName = brainInterface.askUserName();
  const difficultyMode = brainInterface.askUserDifficultyMode();
  let RightAsnwersCount = 0;
  let WrongAsnwersCount = 0;

  const availableBrainGames = {};
  brainGames.forEach((BrainGame) => {
    const brainGame = new BrainGame(userName, difficultyMode);
    brainGame.iterAction.onSuccess = () => {
      RightAsnwersCount += 1;
    };
    brainGame.iterAction.onFail = () => {
      WrongAsnwersCount += 1;
    };
    availableBrainGames[normalizeString(brainGame.gameName)] = brainGame;
  });
  const availableBrainGamesNames = Object.keys(availableBrainGames);

  brainInterface.separateOutput(2);

  let userInput;
  while (userInput !== 'quit') {
    userInput = normalizeString(brainInterface.input());
    if (userInput === 'help') {
      brainInterface.printHelp();
      brainInterface.separateOutput(1);
    } else if (userInput === 'games-list') {
      brainInterface.printAvailableBrainGames(...availableBrainGamesNames);
      brainInterface.separateOutput(1);
    } else if (userInput === 'statistics') {
      brainInterface.printGameStatistics(
        userName,
        difficultyMode,
        RightAsnwersCount,
        WrongAsnwersCount,
      );
      brainInterface.separateOutput(1);
    } else if (availableBrainGamesNames.includes(userInput)) {
      const brainGame = availableBrainGames[userInput];
      brainGame.execute();
      brainInterface.separateOutput(1);
    }
  }

  brainInterface.goodbye(userName);
  brainInterface.separateOutput(1);
};

export default playImprovedBrainGames;
