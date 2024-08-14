const root = document.getElementById("root");
import App from "./App.mjs";
export const randomColor = () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  const a = Math.random();
  return `rgba(${r},${g},${b},${a})`;
};

export default function index() {
  let AppComponent;
  try {
    AppComponent = App();
  } catch (error) {
    console.log(error);
  }
  return AppComponent.forEach((el) => root.appendChild(el));
}
index();

// const button = document.createElement("button");
// button.innerText = "button";
// button.onclick = () => console.log("clicked");
// document.body.appendChild(button);
