#!/usr/bin/env node

const brainEvenGame = () => {
  // let questionNumber;
  let correctAnswer;
  // let randomNumberUntilHundred;

  const randomNumberUntilHundred = Math.floor(Math.random() * 99) + 1;
  const questionNumber = randomNumberUntilHundred;

  if (questionNumber % 2 === 0) {
    correctAnswer = 'yes';
  }
  if (questionNumber % 2 !== 0) {
    correctAnswer = 'no';
  }

  return {
    question: questionNumber,
    correctAnswer,
  };
};

export default brainEvenGame;
