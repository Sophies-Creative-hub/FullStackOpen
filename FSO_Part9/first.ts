const birthdayGreeter = (name: string, age: number): string => {
    return `Happy birthday ${name}, you are now ${age} years old!`;
  };
  
  const birthdayHero = "Jane User";
  const age = 22;
  
  console.log(birthdayGreeter(birthdayHero, age));

const add = (a: number, b: number) => {
    /* The return value is used to determine
       the return type of the function */
    return a + b;
  };

  const multiplicator = (a, b, printText) => {
    console.log(printText,  a * b);
  }
  
  multiplicator(2, 4, 'Multiplied numbers 2 and 4, the result is:');