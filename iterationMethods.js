const numbers = [10, 13, 20, 25, 38, 35, 40];

GraterNumber = numbers.filter(function (number) {
  return number > 25;
});
console.log(GraterNumber);

DivisibleNumber = numbers.filter((number) => number % 5 === 0);
console.log(DivisibleNumber);

const squaredNumber = numbers.map((number) => number ** 2);
console.log(squaredNumber);

multipliedNumber = numbers.map((number) => number * 2);
console.log(multipliedNumber);

filteredNumber = numbers.filter((number) => number >= 20);
squareFilteredNumber = filteredNumber.map((number) => number ** 2);
console.log(filteredNumber);
console.log(squareFilteredNumber);

FiltedNumber = numbers.filter((number) => number % 5 === 0);
MultipliedNumber = FiltedNumber.map((number) => number * 3);
console.log(FiltedNumber);
console.log(MultipliedNumber);
