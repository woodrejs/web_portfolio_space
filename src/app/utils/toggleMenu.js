import ELEMENTS from "../global/elements";

const toggleMenu = (e) => {
  e.currentTarget.classList.toggle("toggleHamburger");
  ELEMENTS.asideMenu.classList.toggle("showAsideMenu");
};

export default toggleMenu;
