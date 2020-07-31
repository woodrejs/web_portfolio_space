import "./app/scss/style.scss";
import createStars from "./app/utils/createStars";
import setCanvasDimensions from "./app/utils/setCanvasDimensions";
import stickMenu from "./app/utils/stickMenu";
import toggleMenu from "./app/utils/toggleMenu";
import updateSideMenu from "./app/utils/updateSideMenu";
import ELEMENTS from "./app/global/elements";
import GLOBAL from "./app/global/vars";
import setSlidesClones from "./app/utils/setSlidesClones";
import moveSlider from "./app/utils/moveSlider";
import resize from "./app/utils/resize";

window.onload = function () {
  const { hamburger, mainMenu, slider } = ELEMENTS;
  let { starsArray, c } = GLOBAL;

  //SET CLONES
  setSlidesClones();
  //SLIDER
  slider.addEventListener("mousedown", moveSlider);
  slider.addEventListener("touchstart", moveSlider);

  //HAMBURGER MENU
  hamburger.addEventListener("click", toggleMenu);
  //ASIDE MENU
  window.addEventListener("scroll", updateSideMenu, false);
  //STICKY MENUS
  window.addEventListener("scroll", () => {
    stickMenu(hamburger);
    stickMenu(mainMenu);
  });
  //RESIZE
  resize();
  window.addEventListener("resize", () => {
    starsArray = createStars();
    setCanvasDimensions();
    resize();
  });
  ///////////CANVAS BACKGROUND
  //ANIMATION FUNCTION
  function animation() {
    requestAnimationFrame(animation);
    c.clearRect(0, 0, innerWidth, innerHeight);
    for (const star of starsArray) star.update();
  }
  //INITIALIZATION
  animation();
  setCanvasDimensions();
  starsArray = createStars();
  updateSideMenu();
};
