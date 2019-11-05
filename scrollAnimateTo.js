
$ = jQuery;
/**
 * Scroll Animate To!
 * ======
 * Perform a scroll to a element
 * @param {*} elementOffsetTop
 * @param {*} speed - Optional
 */
const scrollAnimateTo = (elementOffsetTop, speed) => {
  const page = $('html, body');
  // Animates to a element
  page.animate({
    scrollTop: elementOffsetTop,
  }, speed !== undefined ? speed : 700);
  // Stop the animation when the events below happen 
  page.on('scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove', () => {
    page.stop();
  });
  return false;
};
export default scrollAnimateTo;
