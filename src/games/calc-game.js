import { engine } from '../engine';
import { expression, randomNumbers, randomElement } from '../math';

const gameGreeting = 'What is the result of the expression?';
const operations = ['*', '-', '+'];
const randomNum = randomNumbers();
const randomNum2 = randomNumbers();
const randomOperation = randomElement(operations);
const correctAnswer = String(expression(randomNum, randomNum2, randomOperation));
const question = `Question: ${randomNum} ${randomOperation} ${randomNum2}`;

export default () => {
  const game = engine(gameGreeting, question, correctAnswer);

  return game;
};
