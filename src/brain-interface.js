import readlineSync from 'readline-sync';

const welcome = () => console.log('Welcome to the Brain Games!');

const getUserName = () => readlineSync.question('May I have your name? ');

const greetUserName = (userName) => console.log(`Hello, ${userName}!`);

const askUserName = () => {
    const userName = getUserName();
    greetUserName(userName);
    return userName;
}

const describeGame = (description) => console.log(description);

const askQuestion = (question) => console.log(question);

const receiveUserAnswer = () => readlineSync.question('Your answer: ');

const compareAnswers = (rightAnswer, otherAnswer) => `${rightAnswer}`.trim() === `${otherAnswer}`.trim();

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
}

const congratulateUser = (userName) => console.log(`Congratulations, ${userName}!`);

export { welcome, askUserName, describeGame, askQuestion, askUserAnswer, congratulateUser }