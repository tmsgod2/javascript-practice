const title = document.querySelector("#title");
let i = 0;
const BASE_COLOR = "black";
const OTHER_COLOR = "skyblue";

function handleClick() {
  const currentColor = title.style.color;
  i++;
  if (currentColor === BASE_COLOR) title.style.color = OTHER_COLOR;
  else title.style.color = BASE_COLOR;
  if (i > 10) title.innerHTML = "Stop it!!";
}

function init() {
  title.style.color = BASE_COLOR;
  title.addEventListener("mouseenter", handleClick);
}
init();
