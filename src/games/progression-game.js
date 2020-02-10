import makeGame from '..';
import genRandomNumber from '../math';

const description = 'What number is missing in the progression?';

const getGameData = () => {
  const progression = [];
  const firstElement = genRandomNumber(1, 100);
  const progressionStep = genRandomNumber(1, 100);
  progression.push(firstElement);
  const progressionLength = 10;

  for (let i = 1; i < progressionLength; i += 1) {
    const element = progression[i - 1] + progressionStep;
    progression.push(element);
  }

  const hiddenElementIndex = genRandomNumber(0, progressionLength - 1);
  const correctAnswer = String(progression[hiddenElementIndex]);
  progression[hiddenElementIndex] = '..';
  const question = progression.join(' ');

  return [question, correctAnswer];
};

export default () => makeGame(description, getGameData);
