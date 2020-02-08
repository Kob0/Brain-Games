import makeGame from '..';
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

const description = 'What is the result of the expression?';
const operations = ['*', '-', '+'];

const getGameData = () => {
  const num = genRandomNumber(1, 100);
  const num2 = genRandomNumber(1, 100);
  const operation = randomElement(operations);
  const question = `${num} ${operation} ${num2}`;
  const correctAnswer = String(expression(num, num2, operation));

  const data = [question, correctAnswer];

  return data;
};

export default () => {
  const game = makeGame(description, getGameData);

  return game;
};
