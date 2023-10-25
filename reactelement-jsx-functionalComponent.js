import React from "react";
import ReactDOM from "react-dom/client";

//there are 

//React Element
const reactElement = React.createElement(
  "h1",
  { id: "heading" },
  "React Element"
);
console.log(reactElement);

//JSX (JSX is transpiled before it reaches the JS)- PARCEL - Babel

//JSX ==> Babel transpiles it to React.createElement ==> ReactElement-JS Object ==> HTMLElement(render)
const jsxElement = <h1 id="heading">JSX Element</h1>;
console.log(jsxElement);

//React Component
//1. Class based components - OLD way of creating components
//2. Functional components - NEW way of creating components -- it's just normal JS function

//Functional Component (It starts with a capital letter just a way to distinguish it as FucntionalComponent) -- 
//It is just a JS function which returns a JSX element
const HeadingComponent = () => {
  return (
    <div>
      {jsxElement}
      {reactElement}
      <h1>React Functional Component</h1>;
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(HeadingComponent());
