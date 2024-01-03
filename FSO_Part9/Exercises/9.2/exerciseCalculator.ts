// exerciseCalculator.ts

interface Result {
    periodLength: number;
    trainingDays: number;
    success: boolean;
    rating: number;
    ratingDescription: string;
    target: number;
    average: number;
  }
  
  const calculateExercises = (hours: number[], target: number): Result => {
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
  
  // Example usage
  const exampleHours = [3, 0, 2, 4.5, 0, 3, 1];
  const exampleTarget = 2;
  
  const result = calculateExercises(exampleHours, exampleTarget);
  console.log(result);
  
  export default calculateExercises;
  