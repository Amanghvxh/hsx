export default function Element(elementTag, elementProperties) {
  try {
    const element = document.createElement(elementTag);
    Object.entries(elementProperties).forEach(([property, propertyValue]) => {
      if (property === "innerHtml") {
        if (Array.isArray(propertyValue)) {
          propertyValue.forEach((el) => element.appendChild(el));
        } else {
          element.appendChild(propertyValue);
        }
      }
      if (property === "class") {
        element.classList.add(...propertyValue.split(" ").filter((el) => el));
      }
      console.log(element[property], "element[property]", elementTag, property);

      element[property] = propertyValue;
    });
    return element;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
