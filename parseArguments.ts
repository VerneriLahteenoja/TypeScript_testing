interface ExerciseArguments {
  target: number,
  hours: number[]
}

export const parseArguments = (args: string[]): ExerciseArguments => {
  // Check if there's enough arguments
  // args[2] is expected to be target value
  // args[3] onwards are expected to be days where arg[x] value is amout of hours
  if (args.length < 4) throw new Error('Not enough arguments');
  const target: number = Number(args[2]);
  // Slice all args into an array after the first target arg
  const hours: number[] = args.slice(3).map(n => Number(n));
  // Check if all args are numbers, else throw an error
  if (!isNaN(target) && hours.every((n) => !isNaN(n))) {
    return {
      target,
      hours
    };
  } else {
    throw new Error('Expected all arguments to be of type: number. Got NaN instead');
  };
};

parseArguments(process.argv)