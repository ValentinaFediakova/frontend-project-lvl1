import readlineSync from 'readline-sync';

export const gameWelcome = () => {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name?  ');
  console.log(`Hello, ${name}!`);
  return name;
};

export const exploreRules = (rulesText) => {
  console.log(`${rulesText}`);
};

export const askQuestionHandle = (questionText) => {
  console.log(`Question: ${questionText}`);
};

export const putAnswerHandle = () => {
  const answerInput = readlineSync.question('Answer: ');
  return answerInput;
};
