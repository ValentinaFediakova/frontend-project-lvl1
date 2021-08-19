import readlineSync from 'readline-sync';

const askNameInit = () => {
  const name = readlineSync.question('May I have your name?  ');
  console.log(`Hi, ${name}!`);
};

export default askNameInit;
