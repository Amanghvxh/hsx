import Element from "./Element.mjs";

const Button = function ({ onclick, innerText }) {
  return Element("button", {
    innerText: innerText,
    type: "button",
    class: "p-5 font-lg border border-dashed border-blue-300 bg-blue-500",
    onclick: onclick,
  });
};

export default Button;
