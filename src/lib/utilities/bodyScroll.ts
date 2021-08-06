/**
 * Toggles `overflow` on the body element between `hidden` and `auto`.
 */
export const toggleBodyScroll = () => {
  const body = document.body;
  const overflow = body.style.overflow;
  if (overflow === "hidden") {
    body.style.overflow = "auto";
  } else {
    body.style.overflow = "hidden";
  }
};

/**
 * Sets `overflow` to hidden on the body element.
 */
export const disableBodyScroll = () => {
  document.body.style.overflow = "hidden";
}

/**
 * Sets `overflow` to auto on the body element.
 */
export const enableBodyScroll = () => {
  document.body.style.overflow = "auto";
}
