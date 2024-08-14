import Element from "./Element.mjs";

const Heading = function ({ innerText }) {
  return Element("h1", {
    class: "text-3xl text-center  font-mono font-bold text-white ",
    innerText: innerText,
  });
};

export default Heading;
