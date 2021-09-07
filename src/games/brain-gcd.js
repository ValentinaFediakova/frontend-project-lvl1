#!/usr/bin/env node

const brainGcdGame = () => {
    const rulesText = 'Find the greatest common divisor of given numbers.';
    let correctAnswer;
    let modulo;
    let stringCorrectAnswer;

    const firstRandomNumber = Math.floor(Math.random() * 99) + 1;
    const secondRandomNumber = Math.floor(Math.random() * 99) + 1;

    const questionExpression = `${firstRandomNumber} ${secondRandomNumber}`

    let firstDevider = firstRandomNumber
    let secondDevider = secondRandomNumber


    if (firstDevider < secondDevider) {
        firstDevider = secondRandomNumber
        secondDevider = firstRandomNumber
    }

    while (modulo !== 0) {
        modulo = firstDevider % secondDevider;
        stringCorrectAnswer = secondDevider.toString();
        firstDevider = secondDevider;
        secondDevider = modulo;
    }

    // const stringCorrectAnswer = correctAnswer.toString();


    return {
        rulesText,
        question: questionExpression,
        correctAnswer: stringCorrectAnswer,
    };
};

export default brainGcdGame;