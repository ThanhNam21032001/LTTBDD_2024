const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const massMark2 = 95;
const heightMark2 = 1.88;
const massJohn2 = 85;
const heightJohn2 = 1.76;



const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

const BMIMark2 = massMark2 / heightMark2 ** 2;
const BMIJohn2 = massJohn2 / (heightJohn2 * heightJohn2);
console.log(BMIMark2, BMIJohn2);

if (BMIMark > BMIJohn) {
  console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
} else {
  console.log(`John's BMI (${BMIJohn}) is higher than Marks's (${BMIMark})!`);
}

if (BMIMark2 > BMIJohn2) {
  console.log(`Mark's BMI (${BMIMark2}) is higher than John's (${BMIJohn2})!`);
} else {
  console.log(`John's BMI (${BMIJohn2}) is higher than Marks's (${BMIMark2})!`);
}