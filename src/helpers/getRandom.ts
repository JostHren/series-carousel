const getArrayOfRandomNumbers = (
  arrayLength: number,
  maxValue: number
): number[] => {
  const randomNumbers: number[] = [];

  for (let i = 0; i < arrayLength; ) {
    const random = Math.floor(Math.random() * maxValue);

    if (!randomNumbers.includes(random)) {
      randomNumbers.push(random);
      i++;
    }
  }

  return randomNumbers;
};

export const getRandomFromArray = <T>(
  originalArray: T[],
  finalArrayLength: number
): T[] => {
  if (originalArray.length <= finalArrayLength) return originalArray;

  const randomNumbers = getArrayOfRandomNumbers(
    finalArrayLength,
    originalArray.length
  );

  const randomizedArray: T[] = [];
  randomNumbers.map((number) => randomizedArray.push(originalArray[number]));

  return randomizedArray;
};
