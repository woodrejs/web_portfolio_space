import GLOBAL from "../global/vars";
import ELEMENTS from "../global/elements";
import horizontalMove from "./horizontalMove";
import verticalMove from "./verticalMove";
import getFlexDirection from "./getFlexDirection";

const checkMoveDirection = (e: MouseEvent | TouchEvent): void => {
  const { startMouseCoord, endMouseCoord } = GLOBAL;

  if ("changedTouches" in e) {
    const touchX = e.changedTouches[0].clientX;
    const touchY = e.changedTouches[0].clientY;

    if (startMouseCoord.x !== touchX || startMouseCoord.y !== touchY) {
      endMouseCoord.x = touchX;
      endMouseCoord.y = touchY;
      document.removeEventListener("mouseup", checkMoveDirection, false);
    }
  } else {
    if (startMouseCoord.x !== e.clientX || startMouseCoord.y !== e.clientY) {
      endMouseCoord.x = e.clientX;
      endMouseCoord.y = e.clientY;
      document.removeEventListener("mouseup", checkMoveDirection, false);
    }
  }

  const sliderFlexDirect = getFlexDirection(ELEMENTS.slider);
  sliderFlexDirect == "row" ? horizontalMove() : verticalMove();
};
export default checkMoveDirection;
