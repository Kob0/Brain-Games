import { engine } from '../engine';
import { randomNumbers, isPrime } from '../math';

const gameGreeting = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const gameData = () => {
  const number = randomNumbers;
  const question = `Question: ${number}`;
  const correctAnswer = String(isPrime(number));
  const data = [question, correctAnswer];

  return data;
};

export default () => {
  const game = engine(gameGreeting, gameData);

  return game;
};
