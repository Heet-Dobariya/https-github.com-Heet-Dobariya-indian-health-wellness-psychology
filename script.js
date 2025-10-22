// Daily quote
const quotes = [
  "Health is wealth. – Indian Proverb",
  "Yoga is the journey of the self, through the self, to the self. – Bhagavad Gita",
  "Peace comes from within. Do not seek it without. – Buddha",
  "Your body is your temple. Keep it pure and clean.",
  "The greatest wealth is health. – Virgil"
];
document.getElementById("quote").textContent = 
  quotes[Math.floor(Math.random() * quotes.length)];

// BMI Calculator
function calculateBMI() {
  const w = parseFloat(document.getElementById("weight").value);
  const h = parseFloat(document.getElementById("height").value) / 100;
  if (!w || !h) {
    document.getElementById("bmi-result").textContent = "Enter valid inputs!";
    return;
  }
  const bmi = (w / (h * h)).toFixed(2);
  let status = "";
  if (bmi < 18.5) status = "Underweight";
  else if (bmi < 24.9) status = "Normal weight";
  else if (bmi < 29.9) status = "Overweight";
  else status = "Obese";
  document.getElementById("bmi-result").textContent = `BMI: ${bmi} (${status})`;
}

// Mood Tracker
function selectMood(mood) {
  document.getElementById("mood-output").textContent = `You are feeling ${mood} today!`;
}
