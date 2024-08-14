import Element from "./Element.mjs";
import { CounterText as ReactiveElement } from "./CounterText.mjs";
import Button from "./Button.mjs";

function Counter() {
  try {
    let savedReactiveElement = ReactiveElement();
    let state = { count: 0 };
    savedReactiveElement.innerText = state.count;
    const decrement = () => {
      state.count--;
      savedReactiveElement.innerText = state.count;
    };
    const increment = () => {
      state.count++;
      savedReactiveElement.innerText = state.count;
    };
    const components = [
      Button({
        innerText: "-",
        onclick: decrement,
      }),
      savedReactiveElement,
      Button({
        innerText: "+",
        onclick: increment,
      }),
    ];
    return components;
  } catch (error) {
    console.log(error);
  }
}
export default Counter;
