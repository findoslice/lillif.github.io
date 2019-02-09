const RESUME = document.querySelector(".resume");

function reveal(e) {
  e.preventDefailt();
  RESUME.innerHTML = "Baaaaa";
}

RESUME.addEventListener("click", reveal, false);
