// exerciseCalculator.ts
import { isNotNumber } from "./utils";

interface Result {
  periodLength: number;
  trainingDays: number;
  success: boolean;
  rating: number;
  ratingDescription: string;
  target: number;
  average: number;
}

const calculateExercises = (target: number, ...hours: number[]): Result => {
  if (isNotNumber(target) || hours.some(isNotNumber)) {
    throw new Error("Invalid input. Please provide valid numeric values.");
  }

  const periodLength = hours.length;
  const trainingDays = hours.filter((hour) => hour > 0).length;
  const totalHours = hours.reduce((sum, hour) => sum + hour, 0);
  const average = totalHours / periodLength;
  const success = average >= target;

  let rating = 1;
  let ratingDescription = 'could be better';

  if (average >= target) {
    rating = 3;
    ratingDescription = 'excellent';
  } else if (average >= target / 2) {
    rating = 2;
    ratingDescription = 'not too bad but could be better';
  }

  return {
    periodLength,
    trainingDays,
    success,
    rating,
    ratingDescription,
    target,
    average,
  };
};

export default calculateExercises;
