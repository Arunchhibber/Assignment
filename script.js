// simple quote list
const quotes = [
  "Push your limits, one commit at a time.",
  "Keep it simple and clean.",
  "Every expert was once a beginner.",
  "Code, test, repeat.",
  "Don’t just dream it, code it!",
  "Success is built one small commit at a time.",
  "Think it, build it, improve it."
];


document.getElementById("newQuote").addEventListener("click", function() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  document.getElementById("quote").textContent = quotes[randomIndex];
});
