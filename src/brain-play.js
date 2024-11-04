import * as brainInterface from './brain-interface.js';
import CalcGame from './games/calc.js';
import EvenGame from './games/even.js';
import GcdGame from './games/gcd.js';
import PrimeGame from './games/prime.js';
import ProgressionGame from './games/progression.js';

const playCalcGame = () => {
  const userName = brainInterface.askUserName();
  const calcGame = new CalcGame(userName);
  calcGame.execute();
};

const playEvenGame = () => {
  const userName = brainInterface.askUserName();
  const evenGame = new EvenGame(userName);
  evenGame.execute();
};

const playGcdGame = () => {
  const userName = brainInterface.askUserName();
  const gcdGame = new GcdGame(userName);
  gcdGame.execute();
};

const playPrimeGame = () => {
  const userName = brainInterface.askUserName();
  const primeGame = new PrimeGame(userName);
  primeGame.execute();
};

const playProgressionGame = () => {
  const userName = brainInterface.askUserName();
  const progressionGame = new ProgressionGame(userName);
  progressionGame.execute();
};

export {
  playCalcGame, playEvenGame, playGcdGame, playPrimeGame, playProgressionGame,
};
