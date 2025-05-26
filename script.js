// const meta = document.createElement("meta");
// meta.name = "viewport";
// meta.content = '"width=device-width, initial-scale=1.0"';
// document.head.appendChild(meta);

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

const script = document.createElement("script");

script.src = "./timer.js";

document.body.insertAdjacentElement("beforeend", script);
