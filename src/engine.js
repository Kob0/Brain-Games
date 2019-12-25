import readlineSync from 'readline-sync';
import { greeting } from './index';

// eslint-disable-next-line import/prefer-default-export
export const gameEngine = (question, correctAnswer) => {
  greeting();
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}`);

  for (let i = 0; i < 3; i += 1) {
    const userAnswer = readlineSync.question(`${question}: `);
    if (userAnswer !== correctAnswer) {
      return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'\nLet's try again, ${userName}!`);
    }
    console.log('Correct!');
  }

  return console.log(`Congratulations, ${userName}!`);
};
