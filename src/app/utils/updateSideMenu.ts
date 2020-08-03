import ELEMENTS from "../global/elements";

const updateSideMenu = () => {
  const currentPage = Math.round(window.scrollY / window.innerHeight);
  const currentActive = document.querySelector(".activeItem") as HTMLDivElement;
  currentActive.classList.remove("activeItem");
  ELEMENTS.sphereMenuItems[currentPage].classList.add("activeItem");
};
export default updateSideMenu;
