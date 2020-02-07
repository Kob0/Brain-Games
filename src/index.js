import readlineSync from 'readline-sync';
import { greeting } from './greetings';

const roundsCount = 3;

// eslint-disable-next-line import/prefer-default-export
export const makeGame = (description, gameData) => {
  greeting(description);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}\n`);

  for (let i = 0; i < roundsCount; i += 1) {
    const data = gameData();
    const question = `Question: ${data[0]}`;
    const correctAnswer = data[1];
    const userAnswer = readlineSync.question(`${question}\nYour answer: `);
    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'\nLet's try again, ${userName}!`);
    }
    console.log('Correct!');
  }

  console.log(`Congratulations, ${userName}!`);
};
