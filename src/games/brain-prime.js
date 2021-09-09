#!/usr/bin/env node

const brainPrimeGame = () => {
  const rulesText = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  let correctAnswer = 'yes';

  const randomNumber = Math.floor(Math.random() * 99) + 1;
  const halfOfNumber = randomNumber / 2;

  for (let i = 2; i < halfOfNumber; i += 1) {
    if (randomNumber % i === 0) {
      correctAnswer = 'no';
      break;
    }
  }

  return {
    rulesText,
    question: randomNumber,
    correctAnswer,
  };
};

export default brainPrimeGame;
