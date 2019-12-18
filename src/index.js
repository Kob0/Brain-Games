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
  console.log(`Hello, ${userName}`);
  const answer = readlineSync.question('Your answer: ');

  for (let i = 0; i <= 2; i += 1) {
    console.log(`Question: ${Math.floor(Math.random() * 100)}`);

    if (Math.floor(Math.random() * 100) % 2 === 0 && answer === 'no') {
      console.log("'no' is the wrong aswer ;(. Correct answer was 'yes'.");
      console.log(`Let's try again, ${userName}!`);
      break;
    }
    if (Math.floor(Math.random() * 100) % 2 === 0 && answer === 'yes') {
      console.log("'yes' is the wrong aswer ;(. Correct answer was 'no'.");
      console.log(`Let's try again, ${userName}!`);
      break;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${userName}!`);
  return userName;
};
