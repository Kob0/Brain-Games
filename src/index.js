import readlineSync from 'readline-sync';
// greeting functions.

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

// math functions.

const randomNumbers = () => Math.floor(Math.random() * 100);

const isEven = (number) => (number % 2 === 0 ? 'yes' : 'no');

const expression = (num, num2, operation) => {
  switch (operation) {
    case '*':
      return num * num2;
    case '-':
      return num - num2;
    case '+':
      return num + num2;
    default:
      return NaN;
  }
};

const randomElement = (coll) => {
  const randomized = Math.floor(Math.random() * coll.length);

  return coll[randomized];
};

// game functions.

export const brainEvenGame = () => {
  const userName = getName();
  console.log(`Hello, ${userName}!\n`);

  for (let i = 0; i <= 2; i += 1) {
    const randomNumber = randomNumbers();
    const correctAnswer = isEven(randomNumber);

    console.log(`Question: ${randomNumber}`);

    const userAnswer = readlineSync.question('Your answer: ');

    if (correctAnswer !== userAnswer) {
      return console.log(`'${userAnswer}' was wrong answer ;(. Correct answer was '${correctAnswer}'\nLet's try again, ${userName}!`);
    }
    console.log('Correct!');
  }

  return console.log(`Congratulations, ${userName}!`);
};

export const brainCalcGame = () => {
  const operations = ['*', '-', '+'];
  const userName = getName();
  console.log(`Hello, ${userName}!`);

  for (let i = 0; i <= 2; i += 1) {
    const randomOperation = randomElement(operations);
    const randomNum = randomNumbers();
    const randomNum2 = randomNumbers();

    console.log(`Question: ${randomNum} ${randomOperation} ${randomNum2}`);

    const correctAnswer = String(expression(randomNum, randomNum2, randomOperation));
    const userAnswer = readlineSync.question('Your answer: ');

    if (correctAnswer !== userAnswer) {
      return console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.\nLet's try again, ${userName}!`);
    }
    console.log('Correct!');
  }

  return console.log(`Congratulations, ${userName}!`);
};
