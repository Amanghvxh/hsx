import Counter from "./Counter.mjs";
import Element from "./Element.mjs";
import Heading from "./Heading.mjs";

const App = function () {
  try {
    const CounterComponent = Counter();
    const components = [
      Element("div", {
        class:
          "w-full h-full  flex justify-between flex-col py-10 items-center absolute z-1",
        innerHtml: [
          Heading({
            innerText: "Nothing is re-rendering!,pure JS, Componentrization",
          }),
          Heading({
            innerText: "This is just a proof of concept!",
          }),
        ],
      }),
      Element("div", {
        class:
          "flex flex-col w-full h-full  items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-500",
        innerHtml: [
          Element("div", {
            class:
              "flex flex-col w-full h-full absolute z-2 items-center justify-center min-h-screen ",
            innerHtml: CounterComponent,
          }),
        ],
      }),
    ];

    return components;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default App;
