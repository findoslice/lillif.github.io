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
        console.log(item.classList);
        item.classList.add("collapsed_link");
      }
      navButton.classList.remove("hide");
      console.log("added small");
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
      console.log("removed small");
    }
  }
}
