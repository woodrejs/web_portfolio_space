import ELEMENTS from "../global/elements";
import GLOBAL from "../global/vars";

const setSlidesClones = () => {
  const { initSlides } = ELEMENTS;
  const LENGTH = initSlides.length;
  const firstSlideClone = initSlides[0].cloneNode(true);
  const secoundSlideClone = initSlides[1].cloneNode(true);
  const lastSlideClone = initSlides[LENGTH - 1].cloneNode(true);
  const oneBeforeLastSlideClone = initSlides[LENGTH - 2].cloneNode(true);

  slider.prepend(lastSlideClone);
  slider.prepend(oneBeforeLastSlideClone);
  slider.append(firstSlideClone);
  slider.append(secoundSlideClone);

  //set activeSphere
  lastSlideClone.classList.add("activeSphere");
  ELEMENTS.slides = document.querySelectorAll(".slides");
  GLOBAL.length = document.querySelectorAll("#slider .slides").length;
};
export default setSlidesClones;
