const CONTROL_CODES = new Set([
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowUp",
  "KeyA",
  "KeyD",
  "Space",
]);

const JUMP_CODES = new Set(["ArrowUp", "Space"]);

export function createKeyboardControls(target = window) {
  const pressed = new Set();
  let queuedJump = false;

  const handleKeyDown = (event) => {
    if (!CONTROL_CODES.has(event.code)) return;

    event.preventDefault();
    if (JUMP_CODES.has(event.code) && !pressed.has(event.code)) {
      queuedJump = true;
    }
    pressed.add(event.code);
  };

  const handleKeyUp = (event) => {
    if (!CONTROL_CODES.has(event.code)) return;

    event.preventDefault();
    pressed.delete(event.code);
  };

  const handleBlur = () => {
    queuedJump = false;
    pressed.clear();
  };

  target.addEventListener("keydown", handleKeyDown);
  target.addEventListener("keyup", handleKeyUp);
  target.addEventListener("blur", handleBlur);

  return Object.freeze({
    destroy() {
      queuedJump = false;
      pressed.clear();
      target.removeEventListener("keydown", handleKeyDown);
      target.removeEventListener("keyup", handleKeyUp);
      target.removeEventListener("blur", handleBlur);
    },
    read() {
      const left = pressed.has("ArrowLeft") || pressed.has("KeyA");
      const right = pressed.has("ArrowRight") || pressed.has("KeyD");
      const crouch = pressed.has("ArrowDown");
      const jump = queuedJump;

      queuedJump = false;

      return Object.freeze({
        carve: Number(right) - Number(left),
        crouch: Number(crouch),
        jump: Number(jump),
      });
    },
  });
}
