import ELEMENTS from "../global/elements";
import { setSlidesWidth, setSlidesHeight } from "./setSlidesDimension";

const resize = () => {
  const sliderFlexDirect = window
    .getComputedStyle(ELEMENTS.slider)
    .getPropertyValue("flex-direction");
  sliderFlexDirect === "row" ? setSlidesWidth() : setSlidesHeight();
};

export default resize;
