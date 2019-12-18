import readlineSync from 'readline-sync';

export const greeting = () => {
  console.log('Welcome to the Brain Games!');
};

export const greetingForEvenGame = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
};

export const getName = () => {
  const name = readlineSync.question('May I have your name? ');

  return name;
};

export const greetingByName = () => {
  const userName = getName();

  console.log(`Hello, ${userName}!`);

  return userName;
};

export const brainEvenGame = () => {
  const userName = getName();
  console.log(`Hello, ${userName}!`);
  const randomNumber = Math.floor(Math.random() * 100);

  console.log(`Question: ${randomNumber}`);
  const answer = readlineSync.question('Your answer: ');
  if ((answer !== 'yes' && randomNumber % 2 === 0) || (answer !== 'no' && randomNumber % 2 !== 0)) {
    console.log("'yes' is wrong answer ;(. Correct answer was 'no'.");
    console.log(`Let's try again, ${userName}!`);
  }
  console.log('Correct!');

  return userName;
};
