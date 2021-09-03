import readlineSync from 'readline-sync';

export const gameWelcome = () => {
  console.log(`Welcome to the Brain Games!`);

  const name = readlineSync.question('May I have your name?  ');
  console.log(`Hi, ${name}!`);
  return name;
}

// export const askNameInit = () => {
//   const name = readlineSync.question('May I have your name?  ');
//   console.log(`Hi, ${name}!`);
//   return name;
// };

export const askQuestionHandle = (questionText) => {
  console.log(`Question: ${questionText}`);
};

export const putAnswerHandle = () => {
  const answerInput = readlineSync.question('Answer: ');
  return answerInput;
};
