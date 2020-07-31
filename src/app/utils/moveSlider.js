import GLOBAL from "../global/vars";
import checkMoveDirection from "./checkMoveDirection";

const moveSlider = (evt) => {
  if (
    evt.target.matches(".linkIcons") == false &&
    evt.target.matches(".slides") == false &&
    evt.target !== evt.currentTarget
  ) {
    evt.preventDefault();
    if (evt.touches) {
      GLOBAL.startMouseCoord.x = evt.touches[0].clientX;
      GLOBAL.startMouseCoord.y = evt.touches[0].clientY;
      document.addEventListener("touchend", checkMoveDirection, false);
    } else {
      GLOBAL.startMouseCoord.x = evt.clientX;
      GLOBAL.startMouseCoord.y = evt.clientY;
      document.addEventListener("mouseup", checkMoveDirection, false);
    }
  }
  evt.stopPropagation();
};

export default moveSlider;
