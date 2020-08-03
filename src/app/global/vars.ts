import ELEMENTS from "./elements";

const GLOBAL: {
  shift: number;
  c: CanvasRenderingContext2D | null;
  length: number;
  startMouseCoord: {
    x: number;
    y: number;
  };
  endMouseCoord: {
    x: number;
    y: number;
  };
  starsArray: any[]; //// ?????
  starsQuantity: number;
  starsQuantityOnMobile: number;
} = {
  shift: 0,
  c: ELEMENTS.canvas.getContext("2d"),
  length: 0, /// null
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
