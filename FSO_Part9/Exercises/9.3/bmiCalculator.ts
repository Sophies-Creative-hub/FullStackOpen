// bmiCalculator.ts
import { isNotNumber } from "./utils";

const calculateBmi = (height: number, weight: number): string => {
  if (isNotNumber(height) || isNotNumber(weight)) {
    throw new Error("Invalid input. Please provide valid numeric values.");
  }

  const bmi = weight / ((height / 100) * (height / 100));

  if (bmi < 18.5) {
    return "Underweight";
  } else if (bmi < 25) {
    return "Normal weight";
  } else if (bmi < 30) {
    return "Overweight";
  } else {
    return "Obese";
  }
};

export default calculateBmi;
