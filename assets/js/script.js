const infoBtn = document.getElementById("info-btn")

infoBtn.addEventListener("click", displayQuiz);

function displayQuiz() {
  let info = document.getElementById("info");
  info.classList.add("hidden");
  let quiz = document.getElementById("quiz");
  quiz.classList.remove("hidden");
}
