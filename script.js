
const canvas = document.getElementById("can-1");

function init() {

  const playRome = new PlayRome(canvas);

  window.addEventListener("keydown", (event) => {
    if (event.key == "ArrowRight") {
      Keyboard.arrowRight = true;
    }

    if (event.key == "ArrowLeft") {
      Keyboard.arrowLeft = true;
    }

    if (event.key == "ArrowUp") {
      Keyboard.arrowUp = true;
    }
  });

  window.addEventListener("keyup", (event) => {
    if (event.key == "ArrowRight") {
      Keyboard.arrowRight = false;
    }

    if (event.key == "ArrowLeft") {
      Keyboard.arrowLeft = false;
    }

      if (event.key == "ArrowUp") {
      Keyboard.arrowUp = false;
    }
  });
}
