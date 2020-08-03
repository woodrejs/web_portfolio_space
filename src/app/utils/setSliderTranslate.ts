import ELEMENTS from "../global/elements";
import GLOBAL from "../global/vars";

export const setSliderTranslateX = () => {
  const { slider, slides } = ELEMENTS;
  if (slides) {
    const width = slides[0].offsetWidth;
    const transform = width * GLOBAL.shift;
    slider.style.transform = `translateX(-${transform}px) translateY(0px)`;
  }
};
export const setSliderTranslateY = () => {
  const { slider, slides } = ELEMENTS;
  if (slides) {
    const height = slides[0].offsetHeight;
    const transform = height * GLOBAL.shift;

    slider.style.transform = `translateY(-${transform}px) translateX(0px)`;
  }
};
