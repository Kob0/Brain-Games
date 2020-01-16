import { engine } from '../engine';
import { expression, randomNumbers, randomElement } from '../math';

const gameGreeting = 'What is the result of the expression?';
const operations = ['*', '-', '+'];
const randomOperation = () => randomElement(operations);

const gameData = () => {
  const num = randomNumbers();
  const num2 = randomNumbers();
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
