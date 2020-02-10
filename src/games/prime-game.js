import makeGame from '..';
import genRandomNumber from '../math';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num === 1) {
    return true;
  }

  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

const getGameData = () => {
  const number = genRandomNumber(1, 100);
  const question = number.toString();
  const correctAnswer = String(isPrime(number) ? 'yes' : 'no');

  return [question, correctAnswer];
};

export default () => makeGame(description, getGameData);
