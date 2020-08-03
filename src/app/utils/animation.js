import GLOBAL from "../global/vars";

const animation = () => {
  requestAnimationFrame(animation);
  GLOBAL.c.clearRect(0, 0, innerWidth, innerHeight);

  for (const star of GLOBAL.starsArray) star.update();
};
export default animation;
