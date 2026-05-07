// Problem 1:
const filterEvenNumbers = (num: number[]): number[] => {
  return num.filter((num) => num % 2 === 0);
};

// Problem 2:
const reverseString = (text: string): string => {
  return text.split("").reverse().join("");
};

//Problem 3:
type StringOrNumber = string | number;

const checkType = (input: StringOrNumber): string => {
  if (typeof input === "string") {
    return "String";
  } else {
    return "Number";
  }
};

// Problem 4:
