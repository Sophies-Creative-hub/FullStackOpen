// bmiCalculator.ts

// Function to calculate BMI and return a corresponding message
function calculateBmi(height: number, weight: number): string {
    const heightInMeters = height / 100;
    const bmi = weight / (heightInMeters * heightInMeters);
  
    if (bmi < 18.5) {
      return 'Underweight';
    } else if (bmi >= 18.5 && bmi < 25) {
      return 'Normal (healthy weight)';
    } else if (bmi >= 25 && bmi < 30) {
      return 'Overweight';
    } else {
      return 'Obese';
    }
  }
  
  // Call the function with hardcoded parameters
  const result = calculateBmi(180, 74);
  
  // Print out the result
  console.log(result);
  