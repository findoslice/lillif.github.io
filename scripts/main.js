const RESUME = document.querySelector(".resume");

function reveal(e) {
  if (RESUME.innerHTML === "Resume") {
    RESUME.innerHTML = "B a a a a";
  } else {
    RESUME.innerHTML = "Resume";
  }
}

RESUME.addEventListener("click", reveal, false);
