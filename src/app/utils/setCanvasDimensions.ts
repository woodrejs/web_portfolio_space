import ELEMENTS from "../global/elements";

const setCanvasDimensions = () => {
  ELEMENTS.canvas.width = window.innerWidth;
  ELEMENTS.canvas.height = window.innerHeight;
};
export default setCanvasDimensions;
