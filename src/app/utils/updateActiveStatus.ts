import ELEMENTS from "../global/elements";
import GLOBAL from "../global/vars";

const updateActiveStatus = () => {
  const { slides } = ELEMENTS;
  const activSphere = document.querySelector(".activeSphere") as HTMLDivElement;

  if (activSphere && slides) {
    activSphere.classList.remove("activeSphere");
    slides[GLOBAL.shift + 1].classList.add("activeSphere");
  }
};

export default updateActiveStatus;
