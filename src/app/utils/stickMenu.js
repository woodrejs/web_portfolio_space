const stickMenu = (obj) =>
  window.scrollY >= window.innerHeight
    ? (obj.style.position = "fixed")
    : (obj.style.position = "static");

export default stickMenu;
