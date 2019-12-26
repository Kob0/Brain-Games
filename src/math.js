export const randomNumbers = () => Math.floor(Math.random() * 100);

export const isEven = (number) => (number % 2 === 0 ? 'true' : 'false');

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
