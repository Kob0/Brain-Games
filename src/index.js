import readlineSync from 'readline-sync';

export const greeting = () => {
  console.log('Welcome to the Brain Games!');
};

export const greetingForEvenGame = () => {
  greeting();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
};

export const getName = () => {
  const name = readlineSync.question('May I have your name? ');

  return name;
};

export const greetingByName = () => {
  const userName = getName();

  return console.log(`Hello, ${userName}!`);
};

const randomNumbers = () => Math.floor(Math.random() * 100);

export const brainEvenGame = () => {
  const userName = getName();
  console.log(`Hello, ${userName}!\n`);

  for (let i = 0; i <= 2; i += 1) {
    const randomNumber = randomNumbers();
    console.log(`Question: ${randomNumber}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer !== 'yes' && randomNumber % 2 === 0) {
      console.log("'no' is wrong answer ;(. Correct answer was 'yes'.");
      return console.log(`Let's try again, ${userName}!`);
    }
    if (answer !== 'no' && randomNumber % 2 !== 0) {
      console.log("'yes' is wrong answer ;(. Correct answer was 'no'.");
      return console.log(`Let's try again, ${userName}!`);
    }
    console.log('Correct!');
  }

  return console.log(`Congratulations, ${userName}!`);
};
