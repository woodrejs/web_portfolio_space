import ELEMENTS from "../global/elements";

const toggleMenu = (e: Event) => {
  (e.currentTarget as HTMLDivElement).classList.toggle("toggleHamburger");
  ELEMENTS.asideMenu.classList.toggle("showAsideMenu");
};

export default toggleMenu;
