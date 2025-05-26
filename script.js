// const meta = document.createElement("meta");
// meta.name = "viewport";
// meta.content = '"width=device-width, initial-scale=1.0"';
// document.head.appendChild(meta);

const buttonPlay = document.getElementById("button-play");
const buttonClose = document.getElementById("thosijulio-close");

buttonPlay.addEventListener("click", (ev) => {
  ev.preventDefault();
  window.location.replace("https://google.com");
});

buttonClose.addEventListener("click", () => {
  window.location.replace("https://facebook.com");
});

const link = document.createElement("link");
link.href =
  "https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;600;700;800&display=swap";
link.rel = "stylesheet";
document.head.appendChild(link);

// const style = document.createElement("link");
// // style.href = "https://cdn.jsdelivr.net/gh/hanzbet-scripts/popup-roleta@c8ad8a182ca570fd52db6ef054535136e3d8b59d/index.css";
// style.href =
//   "https://cdn.jsdelivr.net/gh/hanzbet-scripts/popup-roleta@c8ad8a182ca570fd52db6ef054535136e3d8b59d/index.css";
// style.rel = "stylesheet";
// document.head.appendChild(style);

// const script = document.createElement("script");

// script.src =
//   "https://cdn.jsdelivr.net/gh/hanzbet-scripts/popup-card-timer@88120e25db32b47cf02b8391a02c69033737fdaf/timer.js";

// document.body.insertAdjacentElement("beforeend", script);
