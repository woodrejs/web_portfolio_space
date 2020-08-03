const getFlexDirection = (obj: HTMLElement) => {
  return window.getComputedStyle(obj).getPropertyValue("flex-direction");
};
export default getFlexDirection;
