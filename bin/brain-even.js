#!/usr/bin/env node
import readlineSync from 'readline-sync';
import askNameInit from '../src/cli.js';

console.log('Welcome to the Brain Games!');
const name = askNameInit();
console.log('Answer "yes" if the number is even, otherwise answer "no".');

let answer;
let correctAnswer;
let answerInput;
let randomNumberUntilHundred;

const askQuestionHandle = (questionText) => {
    console.log(`Question: ${questionText}`);
};

const putAnswerHandle = () => {
    answerInput = readlineSync.question('Answer: ');
    return answerInput;
};

for (let i = 0; i < 3; i += 1) {
    randomNumberUntilHundred = Math.floor(Math.random() * 99) + 1;

    if (randomNumberUntilHundred % 2 === 0) {
        correctAnswer = 'yes';
    }
    if (randomNumberUntilHundred % 2 !== 0) {
        correctAnswer = 'no';
    }

    askQuestionHandle(randomNumberUntilHundred);
    answer = putAnswerHandle();

    if (correctAnswer === answer) {
        if (i === 2) {
            console.log(`Congratulations, ${name}!`);
            break;
        }
        console.log('Correct!');
    }
    if (correctAnswer !== answer) {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. Let's try again, ${name}`);
        break;
    }
}
