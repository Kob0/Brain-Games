import { makeGame } from '..';
import genRandomNumber from '../math';

const gameGreeting = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => (number % 2 === 0 ? 'yes' : 'no');

const getGameData = () => {
  const number = genRandomNumber(1, 100);
  const question = `Question: ${number}`;
  const correctAnswer = isEven(number);

  return [question, correctAnswer];
};

export default () => {
  const game = makeGame(gameGreeting, getGameData);

  return game;
};
