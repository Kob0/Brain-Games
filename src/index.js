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

  return console.log(`Hello, ${userName}!\n`);
};

const randomNumbers = () => Math.floor(Math.random() * 100);

const isEven = (number) => (number % 2 === 0 ? 'yes' : 'no');

export const brainEvenGame = () => {
  const userName = getName();
  console.log(`Hello, ${userName}!\n`);

  for (let i = 0; i <= 2; i += 1) {
    const randomNumber = randomNumbers();
    const correctAnswer = isEven(randomNumber);

    console.log(`Question: ${randomNumber}`);

    const userAnswer = readlineSync.question('Your answer: ');

    if (correctAnswer !== userAnswer) {
      return console.log(`'${userAnswer}' was wrong answer ;(. Correct answer is '${correctAnswer}'\nLet's try again, ${userName}!`);
    }
    console.log('Correct!');
  }

  return console.log(`Congratulations, ${userName}!`);
};
