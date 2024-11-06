import * as brainInterface from './brain-interface.js';
import CalcGame from './games-logic/calc.js';
import EvenGame from './games-logic/even.js';
import GcdGame from './games-logic/gcd.js';
import PrimeGame from './games-logic/prime.js';
import ProgressionGame from './games-logic/progression.js';

const playCalcGame = () => {
  brainInterface.welcome();
  const userName = brainInterface.askUserName();
  const calcGame = new CalcGame(userName);
  calcGame.execute();
};

const playEvenGame = () => {
  brainInterface.welcome();
  const userName = brainInterface.askUserName();
  const evenGame = new EvenGame(userName);
  evenGame.execute();
};

const playGcdGame = () => {
  brainInterface.welcome();
  const userName = brainInterface.askUserName();
  const gcdGame = new GcdGame(userName);
  gcdGame.execute();
};

const playPrimeGame = () => {
  brainInterface.welcome();
  const userName = brainInterface.askUserName();
  const primeGame = new PrimeGame(userName);
  primeGame.execute();
};

const playProgressionGame = () => {
  brainInterface.welcome();
  const userName = brainInterface.askUserName();
  const progressionGame = new ProgressionGame(userName);
  progressionGame.execute();
};

const playImprovedBrainGames = () => {
  brainInterface.welcome();
  const userName = brainInterface.askUserName();
  const difficultyMode = brainInterface.askUserDifficultyMode();
  let RightAsnwersCount = 0;
  let WrongAsnwersCount = 0;

  const onSuccess = () => {
    RightAsnwersCount += 1;
    brainInterface.separateOutput();
  };
  const onFail = () => {
    WrongAsnwersCount += 1;
    brainInterface.separateOutput();
  };
  brainInterface.separateOutput();

  const calcGame = new CalcGame(userName, difficultyMode);
  calcGame.onSuccess = onSuccess;
  calcGame.onFail = onFail;
  calcGame.execute();

  const evenGame = new EvenGame(userName, difficultyMode);
  evenGame.onSuccess = onSuccess;
  evenGame.onFail = onFail;
  evenGame.execute();

  const gcdGame = new GcdGame(userName, difficultyMode);
  gcdGame.onSuccess = onSuccess;
  gcdGame.onFail = onFail;
  gcdGame.execute();

  const primeGame = new PrimeGame(userName, difficultyMode);
  primeGame.onSuccess = onSuccess;
  primeGame.onFail = onFail;
  primeGame.execute();

  const progressionGame = new ProgressionGame(userName, difficultyMode);
  progressionGame.onSuccess = onSuccess;
  progressionGame.onFail = onFail;
  progressionGame.execute();

  brainInterface.printGameStatistics(difficultyMode, RightAsnwersCount, WrongAsnwersCount);
  brainInterface.separateOutput();
};

export {
  playCalcGame, playEvenGame, playGcdGame, playPrimeGame, playProgressionGame,
  playImprovedBrainGames,
};
