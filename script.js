const quotes = [
  "Push your limits, one commit at a time.",
  "Keep it simple and clean.",
  "Every expert was once a beginner.",
  "Code, test, repeat.",
  "Don’t just dream it, code it!",
  "Debugging is like being a detective in a crime movie",
  "Success is built one small commit at a time.",
  "Code is poetry.",
  "Think it, build it, improve it."
];


document.getElementById("newQuote").addEventListener("click", function() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  document.getElementById("quote").textContent = quotes[randomIndex];
});
