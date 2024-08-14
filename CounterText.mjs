import Element from "./Element.mjs";
export function CounterText() {
  return Element("span", {
    class: "text-2xl font-mono font-bold uppercase",
  });
}
