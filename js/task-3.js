const feedback = {
   good: 5,
   neutral: 10,
   bad: 3,
};
let totalFaadback = 0;
const feedbackValues = Object.values(feedback);
for (const value of feedbackValues) {
    totalFaadback += value;
};
console.log(totalFaadback);