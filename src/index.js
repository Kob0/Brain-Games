import readlineSync from 'readline-sync';

const roundsCount = 3;

export default (description, gameData) => {
  console.log(`Welcome to the Brain Games!\n${description}\n`);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}\n`);

  for (let i = 0; i < roundsCount; i += 1) {
    const data = gameData();
    const question = `Question: ${data[0]}`;
    const correctAnswer = data[1];
    const userAnswer = readlineSync.question(`${question}\nYour answer: `);
    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'\nLet's try again, ${userName}!`);
      break;
    }
    console.log('Correct!');
  }

  console.log(`Congratulations, ${userName}!`);
};
