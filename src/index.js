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
      return console.log(`'${userAnswer}' was wrong answer ;(. Correct answer was '${correctAnswer}'\nLet's try again, ${userName}!`);
    }
    console.log('Correct!');
  }

  return console.log(`Congratulations, ${userName}!`);
};

const randomElement = (coll) => {
  const randomized = Math.floor(Math.random() * coll.length);

  return coll[randomized];
};

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

export const greetingForBrainCalc = () => {
  console.log('Welcome to the Brain Games!\nWhat is the result of the expression?');
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
    const correctAnswer = expression(randomNum, randomNum2, randomOperation);
    const userAnswer = readlineSync.question('Your answer: ');

    if (correctAnswer !== userAnswer) {
      return console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.\nLet's try again, ${userName}!`);
    }
    console.log('Correct!');
  }

  return console.log(`Congratulations, ${userName}!`);
};
