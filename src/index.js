import readlineSync from 'readline-sync';

export const greeting = () => {
    console.log('Welcome to the Brain Games!');
};

export const getName = () => {
    const name = readlineSync.question('May I have your name? ');
    
    return name;
};