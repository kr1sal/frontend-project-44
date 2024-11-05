const randint = (fromNum, toNum) => Math.floor(Math.random() * (toNum - fromNum)) + fromNum;

const compareStrings = (firstString, secondString) => firstString.trim() === secondString.trim();

export { randint, compareStrings };
