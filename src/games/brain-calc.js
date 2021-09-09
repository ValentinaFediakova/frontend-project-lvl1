import _ from 'lodash';

const brainCalcGame = () => {
  const rulesText = 'What is the result of the expression?';
  let correctAnswer = 0;

  const operators = ['*', '-', '+'];

  const randomOperator = _.sample(operators);
  const firstOperand = Math.floor(Math.random() * 99) + 1;
  const secondOperand = Math.floor(Math.random() * 99) + 1;

  const questionExpression = `${firstOperand} ${randomOperator} ${secondOperand}`;

  if (randomOperator === '*') {
    correctAnswer = firstOperand * secondOperand;
  }

  if (randomOperator === '-') {
    correctAnswer = firstOperand - secondOperand;
  }

  if (randomOperator === '+') {
    correctAnswer = firstOperand + secondOperand;
  }

  const stringCorrectAnswer = correctAnswer.toString();

  return {
    rulesText,
    question: questionExpression,
    correctAnswer: stringCorrectAnswer,
  };
};

export default brainCalcGame;
