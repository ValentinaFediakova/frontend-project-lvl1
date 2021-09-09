#!/usr/bin/env node

const brainProgressionGame = () => {
  const rulesText = 'What number is missing in the progression?';
  let correctAnswer;
  const arrayProgression = [];
  let prevNumberOfProgression;
  let newNumberForProgression;

  const stepOfProgression = Math.floor(Math.random() * 9) + 1;
  const firstNumberOfProgression = Math.floor(Math.random() * 99) + 1;
  const missingPosition = Math.floor(Math.random() * 9) + 1;

  arrayProgression.push(firstNumberOfProgression);
  prevNumberOfProgression = firstNumberOfProgression;

  for (let i = 1; i < 10; i += 1) {
    newNumberForProgression = prevNumberOfProgression + stepOfProgression;

    if (i === missingPosition) {
      arrayProgression.push('..');
      correctAnswer = newNumberForProgression;
    } else {
      arrayProgression.push(newNumberForProgression);
    }

    prevNumberOfProgression = newNumberForProgression;
  }

  //   console.log("arrayProgression.join(' ')", arrayProgression.join(' '));
  const stringCorrectAnswer = correctAnswer.toString();

  return {
    rulesText,
    question: arrayProgression.join(' '),
    correctAnswer: stringCorrectAnswer,
  };
};

export default brainProgressionGame;
