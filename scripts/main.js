const RESUME = document.querySelector(".resume");
const NAVBUTTON = document.querySelector(".nav-btn");

RESUME.addEventListener("click", reveal, false);

/* add window event listener,
if window gets smaller than X, collapse nav bar */

window.addEventListener("resize", navAdjust, false);

/* check window size, if it is small already (when opening page): collapse */

if (window.innerWidth < 700) {
  navAdjust();
}

function navAdjust() {
  /* if less than 700px wide, collapse */
  let myNav = document.getElementById("mynav");
  let navButton = document.getElementById("mynavbutton");
  let myList = document.getElementById("mynavlist");
  let myLinks = document.getElementsByClassName("nav_link");
  if (window.innerWidth < 700) {
    /* collapse */
    /* if nav bar contains class small don't do anything, otherwise add */
    if (!myNav.classList.contains("collapsed_nav")) {
      myNav.classList.add("collapsed_nav");
      myList.classList.add("collapsed_list");
      for (let item of myLinks) {
        item.classList.add("collapsed_link");
      }
      navButton.classList.remove("hide");
    }
  } else {
    /* expand */
    if (myNav.classList.contains("collapsed_nav")) {
      myNav.classList.remove("collapsed_nav");

      myList.classList.remove("collapsed_list");

      for (let item of myLinks) {
        item.classList.remove("collapsed_link");
      }
      navButton.classList.add("hide");
    }
  }
}

function reveal(e) {
  e.preventDefault();
  if (RESUME.innerHTML === "Resume") {
    RESUME.innerHTML = "B a a a a";
  } else {
    RESUME.innerHTML = "Resume";
  }
}

/* show sidebar if button was clicked */
