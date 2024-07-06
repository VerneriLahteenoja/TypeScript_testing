import { parseBmiArguments } from "./parseArguments"

export const calculateBmi = (args: string[]): string => {
  const {height, weight} = parseBmiArguments(args)
  const bmi = weight / (height * 2) * 100
  if (bmi >= 40) {
    return "Obese (Class 3)"
  } else if (bmi >= 35 && bmi <= 39.9) {
    return "Obese (Class 2)"
  } else if (bmi >= 30 && bmi <= 34.9) {
    return "Obese (Class 1)"
  } else if (bmi >= 25 && bmi <= 29.9) {
    return "Overweight (Pre-obese)"
  } else if (bmi >= 18.5 && 24.9) {
    return "Normal (Healthy weight)"
  } else if (bmi >= 17 && bmi <= 18.4) {
    return "Underweight (Mild thinness)"
  } else if (bmi >= 16 && bmi <= 16.9) {
    return "Underweight (Moderate thinness)"
  } else if (bmi <= 16) {
    return "Underweight (Severe thinness)"
  } else {
    return "Something went wrong..."
  }
}

//console.log(calculateBmi(process.argv))