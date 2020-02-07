import makeGame from '..';
import genRandomNumber from '../math';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

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
  const number = genRandomNumber(1, 100);
  const question = number.toString();
  const correctAnswer = String(isPrime(number));

  return [question, correctAnswer];
};

export default () => {
  const game = makeGame(description, getGameData);

  return game;
};
