import { setSliderTranslateX, setSliderTranslateY } from "./setSliderTranslate";
import ELEMENTS from "../global/elements";

export const setSlidesWidth = () => {
  const { slider, sliderBox, slides } = ELEMENTS;
  const OBJ_IN_ROW = 3;
  const length = slides.length;

  slider.style.width = `${(sliderBox.offsetWidth * length) / OBJ_IN_ROW}px`;
  slider.style.height = "100%";
  setSliderTranslateX();
};

export const setSlidesHeight = () => {
  const { slider, sliderBox, slides } = ELEMENTS;
  const OBJ_IN_COL = 3;
  const length = slides.length;

  slider.style.height = `${(sliderBox.offsetHeight * length) / OBJ_IN_COL}px`;
  slider.style.width = "100%";

  setSliderTranslateY();
};
