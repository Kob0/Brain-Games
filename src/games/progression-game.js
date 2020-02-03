import { makeGame } from '..';
import genRandomNumber from '../math';

const gameGreeting = 'What number is missing in the progression?';

const gameData = () => {
  const progression = [];
  const firstElement = genRandomNumber(1, 100);
  const progressionStep = genRandomNumber(1, 100);
  progression.push(firstElement);

  for (let i = 1; i < 10; i += 1) {
    let element = progression[i];
    element = progression[i - 1] + progressionStep;
    progression.push(element);
  }

  const questionElement = genRandomNumber(0, 9);
  const correctAnswer = String(progression[questionElement]);
  progression[questionElement] = '..';
  const question = progression.join(' ');
  const data = [question, correctAnswer];

  return data;
};

export default () => {
  const game = makeGame(gameGreeting, gameData);

  return game;
};
