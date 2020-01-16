import readlineSync from 'readline-sync';

export const generalGreeting = () => {
  console.log('Welcome to the Brain Games!\n');
};

export const greeting = (gameGreeting) => {
  console.log(`Welcome to the Brain Games!\n${gameGreeting}\n`);
};

export const getName = () => {
  const name = readlineSync.question('May I have your name? ');

  return name;
};

export const greetingByName = () => {
  const userName = getName();

  return console.log(`Hello, ${userName}!\n`);
};
