const RESUME = document.querySelector(".resume");

function reveal(e) {
  if (RESUME.innerHTML === "Resume") {
    RESUME.innerHTML = "B a a a a";
  } else {
    RESUME.innerHTML = "Resume";
  }
}

RESUME.addEventListener("click", reveal, false);

/* add window event listener,
if window gets smaller than X, collapse nav bar */

window.addEventListener("resize", navAdjust, false);

function navAdjust() {
  /* if less than 700px wide, collapse */
  let myNav = document.getElementById("mynav");
  if (window.innerWidth < 700) {
    /* collapse */
    /* if nav bar contains class small don't do anything, otherwise add */
    if (!myNav.classList.contains("small")) {
      myNav.classList.add("small");
      console.log("added small");
    }
  } else {
    /* expand */
    if (myNav.classList.contains("small")) {
      myNav.classList.remove("small");
      console.log("removed small");
    }
  }
}
