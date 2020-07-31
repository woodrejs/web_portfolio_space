import setTransition from "./setTransition";
import updateActiveStatus from "./updateActiveStatus";
import loopSlider from "./loopSlider";
import GLOBAL from "../global/vars";
import { setSliderTranslateY } from "./setSliderTranslate";

const verticalMove = () => {
  const { endMouseCoord, startMouseCoord, shift, length } = GLOBAL;

  if (endMouseCoord.y < startMouseCoord.y && shift !== length - 3) {
    GLOBAL.shift++;
  } else if (endMouseCoord.y < startMouseCoord.y && shift == length - 3) {
    GLOBAL.shift = 1;
    loopSlider(false);
    GLOBAL.shift++;
  } else if (endMouseCoord.y > startMouseCoord.y && shift !== 0) {
    GLOBAL.shift--;
  } else if (endMouseCoord.y > startMouseCoord.y && shift == 0) {
    GLOBAL.shift = length - 4;
    loopSlider(false);
    GLOBAL.shift--;
  }
  setSliderTranslateY();
  setTransition();
  updateActiveStatus();
};

export default verticalMove;
