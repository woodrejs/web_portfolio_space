import { setSliderTranslateX } from "./setSliderTranslate";
import setTransition from "./setTransition";
import updateActiveStatus from "./updateActiveStatus";
import loopSlider from "./loopSlider";
import GLOBAL from "../global/vars";

const horizontalMove = () => {
  const { endMouseCoord, startMouseCoord, shift, length } = GLOBAL;

  if (endMouseCoord.x < startMouseCoord.x && shift !== length - 3) {
    GLOBAL.shift++;
  } else if (endMouseCoord.x < startMouseCoord.x && shift == length - 3) {
    GLOBAL.shift = 1;
    loopSlider(true);
    GLOBAL.shift++;
  } else if (endMouseCoord.x > startMouseCoord.x && shift !== 0) {
    GLOBAL.shift--;
  } else if (endMouseCoord.x > startMouseCoord.x && shift == 0) {
    GLOBAL.shift = length - 4;
    loopSlider(true);
    GLOBAL.shift--;
  }
  setSliderTranslateX();
  setTransition();
  updateActiveStatus();
};
export default horizontalMove;
