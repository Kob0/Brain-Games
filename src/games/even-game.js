import { engine } from '../engine';
import { randomNumbers, isEven } from '../math';

const gameGreeting = 'Answer "yes" if the number is even, otherwise answer "no".';
const randomNumber = randomNumbers();
const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';
