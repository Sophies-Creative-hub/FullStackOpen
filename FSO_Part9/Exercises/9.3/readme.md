## Command line

Change the previous exercises so that you can give the parameters of bmiCalculator and exerciseCalculator as command-line arguments.

Your program could work eg. as follows:

$ npm run calculateBmi 180 91

Overweight

and:

$ npm run calculateExercises 2 1 0 2 4.5 0 3 1 0 4

{ periodLength: 9,
  trainingDays: 6,
  success: false,
  rating: 2,
  ratingDescription: 'not too bad but could be better',
  target: 2,
  average: 1.7222222222222223
}

In the example, the first argument is the target value.

Handle exceptions and errors appropriately. The exerciseCalculator should accept inputs of varied lengths. Determine by yourself how you manage to collect all needed input.

A couple of things to notice:

If you define helper functions in other modules, you should use the JavaScript module system, that is, the one we have used with React where importing is done with

import { isNotNumber } from "./utils";

and exporting

export const isNotNumber = (argument: any): boolean =>
  isNaN(Number(argument));

export default "this is the default..."

$ npm run calculateBmi 180 91
Output: Overweight

$ npm run calculateExercises 2 1 0 2 4.5 0 3 1 0 4
Output: { periodLength: 9, trainingDays: 6, success: false, rating: 2, ratingDescription: 'not too bad but could be better', target: 2, average: 1.7222222222222223 }

klappt noch nicht