// eslint-disable-next-line import/no-unresolved
import readlineSync from 'readline-sync';
import { greeting } from './greetings';


// eslint-disable-next-line import/prefer-default-export
export const engine = (gameGreeting, gameData) => {
  greeting(gameGreeting);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}\n`);

  for (let i = 0; i < 3; i += 1) {
    const data = gameData();
    const question = data[0];
    const correctAnswer = data[1];
    const userAnswer = readlineSync.question(`${question}\nYour answer: `);
    if (userAnswer !== correctAnswer) {
      return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'\nLet's try again, ${userName}!`);
    }
    console.log('Correct!');
  }

  return console.log(`Congratulations, ${userName}!`);
};
