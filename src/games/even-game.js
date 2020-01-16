import { engine } from '../engine';
import { randomNumbers, isEven } from '../math';

const gameGreeting = 'Answer "yes" if the number is even, otherwise answer "no".';

const gameData = () => {
  const number = randomNumbers();
  const question = `Question: ${number}`;
  const correctAnswer = isEven(number);
  const data = [question, correctAnswer];

  return data;
};

export default () => {
  const game = engine(gameGreeting, gameData);

  return game;
};
