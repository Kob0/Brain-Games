import { engine } from '../engine';
import { randomNumbers, greaterCommonDivisor } from '../math';

const gameGreeting = 'Find the greatest common divisor of given numbers.';

const gameData = () => {
  const num = randomNumbers(1, 100);
  const num2 = randomNumbers(1, 100);
  const question = `${num} ${num2}`;
  const correctAnswer = String(greaterCommonDivisor(num, num2));
  const data = [question, correctAnswer];

  return data;
};

export default () => {
  const game = engine(gameGreeting, gameData);

  return game;
};
