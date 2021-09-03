#!/usr/bin/env node
import _ from 'lodash';

export const brainCalcGame = () => {
    let questionExpression;
    let correctAnswer = 0;

    const operators = ['*', '-', '+']

    const randomOperator = _.sample(operators);
    const firstOperand = Math.floor(Math.random() * 99) + 1;
    const secondOperand = Math.floor(Math.random() * 99) + 1;


    questionExpression = `${firstOperand} ${randomOperator} ${secondOperand}`

    if (randomOperator === '*') {
        correctAnswer = firstOperand * secondOperand
    }

    if (randomOperator === '-') {
        correctAnswer = firstOperand - secondOperand
    }

    if (randomOperator === '+') {
        correctAnswer = firstOperand + secondOperand
    }

    const stringCorrectAnswer = correctAnswer.toString()

    return {
        question: questionExpression,
        correctAnswer: stringCorrectAnswer
    }

}
