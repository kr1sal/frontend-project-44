import * as brainInterface from './brain-interface.js'
import CalcGame from '../src/games/calc.js';
import EvenGame from '../src/games/even.js';
import GcdGame from '../src/games/gcd.js';
import PrimeGame from '../src/games/prime.js';
import ProgressionGame from '../src/games/progression.js';


const playCalcGame = () => {
    const userName = brainInterface.askUserName();
    const calcGame = new CalcGame(userName);
    calcGame.execute();
}

const playEvenGame = () => {
    const userName = brainInterface.askUserName();
    const evenGame = new EvenGame(userName);
    evenGame.execute();
}

const playGcdGame = () => {
    const userName = brainInterface.askUserName();
    const gcdGame = new GcdGame(userName);
    gcdGame.execute();
}

const playPrimeGame = () => {
    const userName = brainInterface.askUserName();
    const primeGame = new PrimeGame(userName);
    primeGame.execute();
}

const playProgressionGame = () => {
    const userName = brainInterface.askUserName();
    const progressionGame = new ProgressionGame(userName);
    progressionGame.execute();
}

export {playCalcGame, playEvenGame, playGcdGame, playPrimeGame, playProgressionGame}