import {
  gameWelcome, askQuestionHandle, putAnswerHandle, exploreRules,
} from './cli.js';
import brainEvenGame from './games/brain-even.js';
import brainCalcGame from './games/brain-calc.js';

const startGame = (gameName) => {
  const participantName = gameWelcome();

  if (gameName === 'brain-games') {
    return;
  }

  let currentQuestion;
  let correctAnswer;
  let rulesText;

  if (gameName === 'brain-even') {
    const brainEvenData = brainEvenGame();
    rulesText = brainEvenData.rulesText;
    exploreRules(rulesText);
  }

  if (gameName === 'brain-calc') {
    const brainCalcData = brainCalcGame();
    rulesText = brainCalcData.rulesText;
    exploreRules(rulesText);
  }

  for (let i = 0; i < 3; i += 1) {
    if (gameName === 'brain-even') {
      brainEvenGame();
      const brainEvenData = brainEvenGame();
      currentQuestion = brainEvenData.question;
      correctAnswer = brainEvenData.correctAnswer;
    }

    if (gameName === 'brain-calc') {
      brainCalcGame();
      const brainCalcData = brainCalcGame();
      currentQuestion = brainCalcData.question;
      correctAnswer = brainCalcData.correctAnswer;
    }

    askQuestionHandle(currentQuestion);
    const answer = putAnswerHandle();

    if (correctAnswer !== answer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. Let's try again, ${participantName}`);
      return;
    }

    if (correctAnswer === answer) {
      if (i === 2) {
        console.log(`Congratulations, ${participantName}!`);
      } else {
        console.log('Correct!');
      }
    }
  }
};

export default startGame;
