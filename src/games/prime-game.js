import { makeGame } from '..';
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

const getGameData = () => {
  const question = genRandomNumber(1, 100);
  const correctAnswer = String(isPrime(question));

  return [question, correctAnswer];
};

export default () => {
  const game = makeGame(gameGreeting, getGameData);

  return game;
};
