import readlineSync from 'readline-sync';
import { compareStrings } from './utils.js';
import {
  getDifficultyModesNames,
  getDifficultyMode,
  getDifficultyModeName,
  defaultDifficultyMode,
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

const compareAnswers = (rightAnswer, otherAnswer) => compareStrings(`${rightAnswer}`, `${otherAnswer}`);

const respondToUser = (userName, rightAnswer, userAnswer) => {
  if (!compareAnswers(rightAnswer, userAnswer)) {
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

const separateOutput = () => console.log('');

const printGameStatistics = (difficultyMode, RightAsnwersCount, WrongAsnwersCount) => {
  console.log(`Difficulty mode: ${getDifficultyModeName(difficultyMode)}`);
  console.log(`Right asnwers: ${RightAsnwersCount}`);
  console.log(`Wrong asnwers: ${WrongAsnwersCount}`);
};

export {
  welcome,
  askUserName,
  describeGame,
  askQuestion,
  askUserAnswer,
  congratulateUser,
  askUserDifficultyMode,
  separateOutput,
  printGameStatistics,
};
