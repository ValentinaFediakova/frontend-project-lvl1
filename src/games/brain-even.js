const brainEvenGame = () => {
  const rulesText = 'Answer "yes" if the number is even, otherwise answer "no".';
  let correctAnswer;

  const randomNumberUntilHundred = Math.floor(Math.random() * 99) + 1;
  const questionNumber = randomNumberUntilHundred;

  if (questionNumber % 2 === 0) {
    correctAnswer = 'yes';
  }
  if (questionNumber % 2 !== 0) {
    correctAnswer = 'no';
  }

  return {
    rulesText,
    question: questionNumber,
    correctAnswer,
  };
};

export default brainEvenGame;
