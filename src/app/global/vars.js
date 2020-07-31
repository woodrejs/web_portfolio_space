import ELEMENTS from "./elements";
const GLOBAL = {
  shift: 0,
  c: ELEMENTS.canvas.getContext("2d"),
  length: null,
  startMouseCoord: {
    x: 0,
    y: 0,
  },
  endMouseCoord: {
    x: 0,
    y: 0,
  },
  starsArray: [],
  starsQuantity: 20,
  starsQuantityOnMobile: 15,
};

export default GLOBAL;
