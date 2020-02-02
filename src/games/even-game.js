import { engine } from '../engine';
import genRandomNumber from '../math';

const gameGreeting = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => (number % 2 === 0 ? 'yes' : 'no');

const gameData = () => {
  const number = genRandomNumber(1, 100);
  const question = `Question: ${number}`;
  const correctAnswer = isEven(number);
  const data = [question, correctAnswer];

  return data;
};

export default () => {
  const game = engine(gameGreeting, gameData);

  return game;
};
