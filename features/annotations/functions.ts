const add = (a: number, b: number): number => {
  return a + b;
};
// There is no type inference for arguments
// We always have to use type annotations
// Type inference works for output but we should explicitly use annotations, in case we forget return statement or return incorrect type

function divide(a: number, b: number): number {
  return a / b;
}

const multiply = function (a: number, b: number): number {
  return a * b;
};

const logger = (message: string): void => {
  console.log(message);
  // void can return null or undefined but is used when no return value
  // return null;
  // return undefined;
}

const throwError = (message: string): never => {
  throw new Error(message)
}
// never is only used if you never expect a function to return anything ever

const forecast = {
  date: new Date(),
  weather: "sunny"
}

const logWeather = ({ date, weather }: {date: Date; weather: string}): void => {
  console.log(date)
  console.log(weather)
}