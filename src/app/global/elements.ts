const ELEMENTS = {
  hamburger: document.querySelector("#hamburger") as HTMLDivElement,
  asideMenu: document.querySelector("#asideMenu") as HTMLDivElement,
  slider: document.querySelector("#slider") as HTMLDivElement,
  sliderBox: document.querySelector("#sliderContainer") as HTMLDivElement,
  canvas: document.querySelector("#canvasBck") as HTMLCanvasElement,
  slides: null as NodeListOf<HTMLDivElement> | null,
  sphereMenuItems: document.querySelectorAll(".sphereMenuItem") as NodeListOf<
    HTMLDivElement
  >,
  mainMenu: document.querySelector("#menu") as HTMLDivElement,
  initSlides: document.querySelectorAll(".slides") as NodeListOf<
    HTMLDivElement
  >,
};
export default ELEMENTS;
