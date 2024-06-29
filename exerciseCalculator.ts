
interface calcResultObject {
  periodLength: number,
  trainingDays: number,
  success: boolean,
  rating: string,//number
  ratingDescription: string,
  target: string,//number
  avarage: number
}

const calculateExercises = (hours: number[], target: number): calcResultObject => {
  /*
  Return:
    number of days 
    number of training days
    original target
    calculated avarage
    boolean if target reached
    rating value (number)
    rating how well done (number)
  */
  const days = hours.length
  const trainingDays = hours.filter(hour => hour > 0)
  // Amount of training hours within given timeframe
  const trainingDaysSum = trainingDays.reduce((acc, hours) => {
    return acc + hours
  }, 0)
  const avarageHoursTrained = trainingDaysSum / days
  return {
    periodLength: days,
    trainingDays: trainingDays.length,
    success: trainingDays.length >= target,
    rating: 'to-be-added',
    ratingDescription: 'to-be-added',
    target: 'to-be-added',
    avarage: avarageHoursTrained
  }
}

console.log(calculateExercises([0,5,5], 2))