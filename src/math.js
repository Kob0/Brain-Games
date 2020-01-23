export const randomNumbers = () => Math.floor(Math.random() * 100);

export const isEven = (number) => (number % 2 === 0 ? 'yes' : 'no');

export const expression = (num, num2, operation) => {
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

export const randomElement = (coll) => {
  const randomized = Math.floor(Math.random() * coll.length);

  return coll[randomized];
};

export const greaterCommonDivisor = (num, num2) => {
  if (num2 > 0) {
    const div = num % num2;
    return greaterCommonDivisor(num2, div);
  }
  return Math.abs(num);
};
