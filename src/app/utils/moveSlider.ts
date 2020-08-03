import GLOBAL from "../global/vars";
import checkMoveDirection from "./checkMoveDirection";

const moveSlider = (e: MouseEvent | TouchEvent) => {
  if ("changedTouches" in e) {
    // changedTouches instanceof e?????}
    if (
      (e.touches[0].target as HTMLElement).matches(".linkIcons") == false &&
      (e.touches[0].target as HTMLElement).matches(".slides") == false &&
      (e.touches[0].target as HTMLElement) !== e.currentTarget
    ) {
      e.preventDefault();
      GLOBAL.startMouseCoord.x = e.touches[0].clientX;
      GLOBAL.startMouseCoord.y = e.touches[0].clientY;
      document.addEventListener("touchend", checkMoveDirection, false);
    }
  } else {
    if (
      (e.target as HTMLElement).matches(".linkIcons") == false &&
      (e.target as HTMLElement).matches(".slides") == false &&
      (e.target as HTMLElement) !== e.currentTarget
    ) {
      e.preventDefault();
      GLOBAL.startMouseCoord.x = e.clientX;
      GLOBAL.startMouseCoord.y = e.clientY;
      document.addEventListener("mouseup", checkMoveDirection, false);
    }
  }

  e.stopPropagation();
};

export default moveSlider;
