import ELEMENTS from "../global/elements";
import GLOBAL from "../global/vars";

const updateActiveStatus = () => {
  const { slides } = ELEMENTS;
  const { shift } = GLOBAL;
  document.querySelector(".activeSphere").classList.remove("activeSphere");
  slides[shift + 1].classList.add("activeSphere");
};

export default updateActiveStatus;
