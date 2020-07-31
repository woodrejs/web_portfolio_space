import GLOBAL from "../global/vars";
import ELEMENTS from "../global/elements";
import horizontalMove from "./horizontalMove";
import verticalMove from "./verticalMove";

const checkMoveDirection = (e) => {
  const { startMouseCoord, endMouseCoord } = GLOBAL;
  if (startMouseCoord.x !== e.clientX || startMouseCoord.y !== e.clientY) {
    if (e.changedTouches) {
      endMouseCoord.x = e.changedTouches[0].clientX;
      endMouseCoord.y = e.changedTouches[0].clientY;
      document.removeEventListener("touchend", checkMoveDirection, false);
    } else {
      endMouseCoord.x = e.clientX;
      endMouseCoord.y = e.clientY;
      document.removeEventListener("mouseup", checkMoveDirection, false);
    }

    const sliderFlexDirect = window
      .getComputedStyle(ELEMENTS.slider)
      .getPropertyValue("flex-direction");

    sliderFlexDirect == "row" ? horizontalMove(GLOBAL) : verticalMove(GLOBAL);
  }
};
export default checkMoveDirection;
