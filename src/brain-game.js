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

const compareAnswer = (rightAnswer, otherAnswer) => `${rightAnswer}`.trim() === `${otherAnswer}`.trim();

const responseToUserAnswer = (rightAnswer, userAnswer, userName) => {
  if (compareAnswer(rightAnswer, userAnswer)) {
    console.log('Correct!');
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
    console.log(`Let's try again, ${userName}!`);
  }
};

export { playBrainGame, compareAnswer, responseToUserAnswer };
