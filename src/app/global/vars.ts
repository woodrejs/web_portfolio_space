import ELEMENTS from "./elements";
import { Coords, Stars } from "../ts/types";

const GLOBAL: {
  shift: number;
  c: CanvasRenderingContext2D | null;
  length: number;
  startMouseCoord: Coords;
  endMouseCoord: Coords;
  starsArray: Stars[];
  starsQuantity: number;
  starsQuantityOnMobile: number;
} = {
  shift: 0,
  c: ELEMENTS.canvas.getContext("2d"),
  length: 0,
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
