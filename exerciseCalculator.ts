
interface CalcResultObject {
  periodLength: number,
  trainingDays: number,
  success: boolean,
  rating: number,
  ratingDescription: string,
  target: number,
  avarage: number
}

interface Rating {
  ratingValue: number,
  ratingDescription: string
}

const calculateExercises = (hours: number[], target: number): CalcResultObject => {
  const days = hours.length
  const trainingDays = hours.filter(hour => hour > 0)
  // Amount of training hours within given timeframe
  const trainingDaysSum = trainingDays.reduce((acc, hours) => {
    return acc + hours
  }, 0)
  const avarageHoursTrained = trainingDaysSum / days

  // Rating logic
  const ratingChoices = {
    "bad": {ratingValue: 1, ratingDescription: "do better"},
    "ok": {ratingValue: 2, ratingDescription: "not bad but could be better"},
    "good": {ratingValue: 3, ratingDescription: "well done"}
  }
  let rating: Rating;
  if (avarageHoursTrained < target && avarageHoursTrained >= (target * 0.75)) {
    rating = {...ratingChoices.ok}
  } else if (avarageHoursTrained >= target) {
    rating = {...ratingChoices.good}
  } else {
    rating = {...ratingChoices.bad}
  }

  return {
    periodLength: days,
    trainingDays: trainingDays.length,
    success: trainingDays.length >= target,
    rating: rating.ratingValue,
    ratingDescription: rating.ratingDescription,
    target: target,
    avarage: avarageHoursTrained
  }
}
//Get inputs from command line
//Either create a module to verify inputs or add logic to main function
console.log(calculateExercises([1,2,2], 2))