import readlineSync from 'readline-sync';
import playBrainGame from '../brain-game.js';
import Action from '../action.js';

const getProgression = (length, start, step) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + step * i);
  }
  return progression;
};

const playBrainProgression = (userName) => {
  const startAction = new Action();
  startAction.lambda = () => console.log('What number is missing in the progression?');

  const iterAction = new Action();
  iterAction.lambda = () => {
    const progressionLength = 10;
    const progressionStart = Math.round(Math.random() * 10);
    const progressionStep = Math.round(Math.random() * 10) + 1;
    const progression = getProgression(progressionLength, progressionStart, progressionStep);
    const numberIndex = Math.floor(Math.random() * 10);
    const rightAnswer = progression[numberIndex];
    const progressionWithUnknownNum = progression.map((element) => (element === progression[numberIndex] ? '..' : element));

    console.log(`Question: ${progressionWithUnknownNum.join(' ')}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (rightAnswer === parseInt(userAnswer, 10)) {
      console.log('Correct!');
      iterAction.success();
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      iterAction.fail();
    }
  };

  const winAction = new Action();
  winAction.lambda = () => console.log(`Congratulations, ${userName}!`);

  playBrainGame(startAction, iterAction, winAction);
};

export default playBrainProgression;
