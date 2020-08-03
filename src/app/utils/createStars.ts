import Star from "../class/Star";
import isMobileDevice from "./isMobileDevice";
import ELEMENTS from "../global/elements";
import GLOBAL from "../global/vars";

const createStars = () => {
  const { canvas } = ELEMENTS;
  let { starsQuantity, starsQuantityOnMobile } = GLOBAL;
  const array = [];
  const canvasWidth = canvas.width;
  const canvasHeight = canvas.height;
  const color = "225,224,222";

  isMobileDevice() && (starsQuantity = starsQuantityOnMobile);

  for (let i = 0; i < starsQuantity; i++) {
    const x = Math.random() * canvasWidth;
    const y = Math.random() * canvasHeight;
    const size = (Math.random() + 1) * 0.07;
    const vx = Math.random() * 0.3 - 0.15;
    const vy = Math.random() * 0.3 - 0.15;

    const star = new Star(canvas, x, y, size, color, vx, vy);
    array.push(star);
  }

  return array;
};

export default createStars;
