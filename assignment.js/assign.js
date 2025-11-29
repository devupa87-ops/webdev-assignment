// Quiz Game – Runs fully in browser console

// Predefined questions and answers
const quiz = [
  { question: "What is the currency of japan", answer: "yen" },
  { question: "how many states are there in india?", answer: "28" },
  { question: "Which planet is known as red planet?", answer: "mars" },
  { question: "Who is known as the father of computers?", answer: "charles babbage" },
  { question: "What river is longest in world?", answer: "nile" }
];

let score = 0; // to track points

alert("Welcome to the Quiz Game!");

// Loop through each question
for (let i = 0; i < quiz.length; i++) {
  let userAnswer = prompt(quiz[i].question);

  // Process input to avoid case/spacing mistakes
  if (userAnswer && userAnswer.toLowerCase().trim() === quiz[i].answer) {
    alert("Correct! 🎉");
    score++;
  } else {
    alert("Wrong ❌. Correct answer is: " + quiz[i].answer);
  }
}

// Final score
alert("Quiz Completed!\nYour Score: " + score + " out of " + quiz.length);

console.log("Final Score:", score);