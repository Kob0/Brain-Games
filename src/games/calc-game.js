import { engine } from '../engine';
import genRandomNumber from '../math';


const expression = (num, num2, operation) => {
  switch (operation) {
    case '*':
      return num * num2;
    case '-':
      return num - num2;
    case '+':
      return num + num2;
    default:
      return NaN;
  }
};

export const randomElement = (coll) => {
  const randomized = Math.floor(Math.random() * coll.length);

  return coll[randomized];
};

const gameGreeting = 'What is the result of the expression?';
const operations = ['*', '-', '+'];
const randomOperation = () => randomElement(operations);

const gameData = () => {
  const num = genRandomNumber(1, 100);
  const num2 = genRandomNumber(1, 100);
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
