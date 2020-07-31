import { setSliderTranslateX, setSliderTranslateY } from "./setSliderTranslate";
import ELEMENTS from "../global/elements";

const loopSlider = (direction) => {
  const removeTransition = () => (ELEMENTS.slider.style.transition = "none");

  removeTransition();

  direction == true ? setSliderTranslateX() : setSliderTranslateY();
};

export default loopSlider;
