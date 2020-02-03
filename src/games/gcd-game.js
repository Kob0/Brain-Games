import { makeGame } from '..';
import genRandomNumber from '../math';

const gameGreeting = 'Find the greatest common divisor of given numbers.';

export const greaterCommonDivisor = (num, num2) => {
  if (num2 > 0) {
    const div = num % num2;
    return greaterCommonDivisor(num2, div);
  }
  return Math.abs(num);
};

const getGameData = () => {
  const num = genRandomNumber(1, 100);
  const num2 = genRandomNumber(1, 100);
  const question = `${num} ${num2}`;
  const correctAnswer = String(greaterCommonDivisor(num, num2));

  return [question, correctAnswer];
};

export default () => {
  const game = makeGame(gameGreeting, getGameData);

  return game;
};
