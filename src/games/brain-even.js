#!/usr/bin/env node

export const brainEvenGame = () => {
  let questionNumber;
  let correctAnswer;
  let randomNumberUntilHundred;

  randomNumberUntilHundred = Math.floor(Math.random() * 99) + 1;
  questionNumber = randomNumberUntilHundred;

  if (questionNumber % 2 === 0) {
    correctAnswer = 'yes';
  }
  if (questionNumber % 2 !== 0) {
    correctAnswer = 'no';
  }

  return {
    question: questionNumber,
    correctAnswer
  }

}
