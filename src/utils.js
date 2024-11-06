const randint = (fromNum, toNum) => Math.floor(Math.random() * (toNum - fromNum)) + fromNum;

const normalizeString = (string) => string.trim().toLowerCase();

const compareStrings = (firstString, secondString) => {
  const normalizedFirstString = normalizeString(firstString);
  const normalizedSecondString = normalizeString(secondString);
  return normalizedFirstString === normalizedSecondString;
};

export { randint, normalizeString, compareStrings };
