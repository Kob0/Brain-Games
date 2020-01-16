import { engine } from '../engine';
import { expression, randomNumbers, randomElement } from '../math';

const gameGreeting = 'What is the result of the expression?';
const operations = ['*', '-', '+'];
const randomNum = () => randomNumbers();
const randomNum2 = () => randomNumbers();
const randomOperation = () => randomElement(operations);

const gameData = () => {
  const num = randomNum();
  const num2 = randomNum2();
  const operation = randomOperation();
  const question = `Question: ${num} ${operation} ${num2}`;
  const correctAnswer = String(expression(num, num2, operation));

  const data = [question, correctAnswer];

  return data;
};

export default () => {
  const game = engine(gameGreeting, gameData);

  return game;
};
