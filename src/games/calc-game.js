import makeGame from '..';
import genRandomNumber from '../math';


const calculateExpression = (num, num2, operation) => {
  switch (operation) {
    case '*':
      return num * num2;
    case '-':
      return num - num2;
    case '+':
      return num + num2;
    default:
      return null;
  }
};

const description = 'What is the result of the expression?';
const operations = ['*', '-', '+'];

const getGameData = () => {
  const num = genRandomNumber(1, 20);
  const num2 = genRandomNumber(1, 15);
  const operation = operations[genRandomNumber(0, operations.length - 1)];
  const question = `${num} ${operation} ${num2}`;
  const correctAnswer = String(calculateExpression(num, num2, operation));

  return [question, correctAnswer];
};

export default () => makeGame(description, getGameData);
