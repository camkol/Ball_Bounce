let ball = document.getElementById("float-circle");

const up = () => {
  ball.style.bottom = "250px";
};

const down = () => {
  ball.style.bottom = "50px";
};

document.onkeydown = up;

document.onkeyup = down;
