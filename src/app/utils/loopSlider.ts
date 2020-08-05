import { setSliderTranslateX, setSliderTranslateY } from "./setSliderTranslate";
import ELEMENTS from "../global/elements";

const loopSlider = (direction: boolean): void => {
  const removeTransition = () => {
    if (ELEMENTS.slider)
      return ((<HTMLElement>ELEMENTS.slider).style.transition = "none");
  };

  removeTransition();

  direction == true ? setSliderTranslateX() : setSliderTranslateY();
};

export default loopSlider;
