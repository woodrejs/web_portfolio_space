import "./app/scss/style.scss";
import createStars from "./app/utils/createStars";
import setCanvasDimensions from "./app/utils/setCanvasDimensions";
import stickMenu from "./app/utils/stickMenu";
import toggleMenu from "./app/utils/toggleMenu";
import updateSideMenu from "./app/utils/updateSideMenu";
import ELEMENTS from "./app/global/elements";
import setSlidesClones from "./app/utils/setSlidesClones";
import moveSlider from "./app/utils/moveSlider";
import resize from "./app/utils/resize";
import animation from "./app/utils/animation";
import GLOBAL from "./app/global/vars";

window.onload = () => {
  const { hamburger, mainMenu, slider } = ELEMENTS;

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
    GLOBAL.starsArray = createStars();
    setCanvasDimensions();
    resize();
  });
  //INITIALIZATION
  animation();
  setCanvasDimensions();
  GLOBAL.starsArray = createStars();
  updateSideMenu();
};
