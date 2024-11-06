import readlineSync from 'readline-sync';
import { compareStrings } from './utils.js';
import {
  getDifficultyModesNames, getDifficultyMode, getDifficultyModeName, defaultDifficultyMode,
} from './brain-config.js';

const welcome = () => console.log('Welcome to the Brain Games!');

const getUserName = () => readlineSync.question('May I have your name? ');

const greetUserName = (userName) => console.log(`Hello, ${userName}!`);

const askUserName = () => {
  const userName = getUserName();
  greetUserName(userName);
  return userName;
};

const describeGame = (description) => console.log(description);

const askQuestion = (question) => console.log(`Question: ${question}`);

const receiveUserAnswer = () => readlineSync.question('Your answer: ');

const respondToUser = (userName, rightAnswer, userAnswer) => {
  if (!compareStrings(`${rightAnswer}`, `${userAnswer}`)) {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
    console.log(`Let's try again, ${userName}!`);
    return false;
  }
  console.log('Correct!');
  return true;
};

const askUserAnswer = (userName, rightAnswer) => {
  const userAnswer = receiveUserAnswer();
  return respondToUser(userName, rightAnswer, userAnswer);
};

const congratulateUser = (userName) => console.log(`Congratulations, ${userName}!`);

const getUserDifficultyMode = () => {
  const userDifficultyModeName = readlineSync.question(`Your choice (${getDifficultyModeName(defaultDifficultyMode)} by default): `);
  const userDifficultyMode = getDifficultyMode(userDifficultyModeName);
  return userDifficultyModeName === '' ? defaultDifficultyMode : userDifficultyMode;
};

const askUserDifficultyMode = () => {
  console.log(`Select difficulty mode from available ones: ${getDifficultyModesNames().join(', ')}`);
  let userDifficultyMode;
  while (userDifficultyMode === undefined) {
    userDifficultyMode = getUserDifficultyMode();
  }
  console.log(`You chose: ${getDifficultyModeName(userDifficultyMode)}`);
  return userDifficultyMode;
};

const separateOutput = (count) => console.log('\n'.repeat(count - 1));

const printIbg = () => console.log('Welcome to IBG - the Improved Brain Games! For help input "help".');

const input = () => readlineSync.question('--> ');

const printHelp = () => console.log('Commands:\nhelp - display help on ibg commands;\nquit - exit ibg;\ngames-list - display a list of available games. To play, enter the name of the game;\nstatistics - display statistics of the current session;');

const printAvailableBrainGames = (...brainGamesNames) => {
  console.log(`Available brain games: ${brainGamesNames.join(', ')}`);
};

const printGameStatistics = (userName, difficultyMode, RightAsnwersCount, WrongAsnwersCount) => {
  console.log(`User name: ${userName}`);
  console.log(`Difficulty mode: ${getDifficultyModeName(difficultyMode)}`);
  console.log(`Right asnwers: ${RightAsnwersCount}`);
  console.log(`Wrong asnwers: ${WrongAsnwersCount}`);
};

const goodbye = (userName) => console.log(`Googbye, ${userName}`);

export {
  welcome, askUserName, describeGame, askQuestion, askUserAnswer, congratulateUser,
  askUserDifficultyMode, separateOutput, printAvailableBrainGames, printIbg, input, printHelp,
  printGameStatistics, goodbye,
};
