import { engine } from '../engine';
import genRandomNumber from '../math';

const gameGreeting = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export const isPrime = (num) => {
  if (num === 1) {
    return 'yes';
  }

  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) {
      return 'no';
    }
  }

  return 'yes';
};

const gameData = () => {
  const number = genRandomNumber(1, 100);
  const question = `Question: ${number}`;
  const correctAnswer = String(isPrime(number));
  const data = [question, correctAnswer];

  return data;
};

export default () => {
  const game = engine(gameGreeting, gameData);

  return game;
};
