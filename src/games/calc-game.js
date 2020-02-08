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

export const getRandomOperation = (operations) => {
  const randomOperation = genRandomNumber(0, operations.length - 1);

  return operations[randomOperation];
};

const description = 'What is the result of the expression?';
const operations = ['*', '-', '+'];

const getGameData = () => {
  const num = genRandomNumber(1, 20);
  const num2 = genRandomNumber(1, 15);
  const operation = getRandomOperation(operations);
  const question = `${num} ${operation} ${num2}`;
  const correctAnswer = String(expression(num, num2, operation));

  return [question, correctAnswer];
};

export default () => {
  const game = makeGame(description, getGameData);

  return game;
};
