const CONTROL_CODES = new Set([
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "KeyA",
  "KeyD",
  "KeyS",
  "Space",
]);

export function createKeyboardControls(target = window) {
  const pressed = new Set();

  const handleKeyDown = (event) => {
    if (!CONTROL_CODES.has(event.code)) return;

    event.preventDefault();
    pressed.add(event.code);
  };

  const handleKeyUp = (event) => {
    if (!CONTROL_CODES.has(event.code)) return;

    event.preventDefault();
    pressed.delete(event.code);
  };

  const handleBlur = () => pressed.clear();

  target.addEventListener("keydown", handleKeyDown);
  target.addEventListener("keyup", handleKeyUp);
  target.addEventListener("blur", handleBlur);

  return Object.freeze({
    destroy() {
      pressed.clear();
      target.removeEventListener("keydown", handleKeyDown);
      target.removeEventListener("keyup", handleKeyUp);
      target.removeEventListener("blur", handleBlur);
    },
    read() {
      const left = pressed.has("ArrowLeft") || pressed.has("KeyA");
      const right = pressed.has("ArrowRight") || pressed.has("KeyD");
      const crouch =
        pressed.has("ArrowDown") ||
        pressed.has("KeyS") ||
        pressed.has("Space");

      return Object.freeze({
        carve: Number(right) - Number(left),
        crouch: Number(crouch),
      });
    },
  });
}
