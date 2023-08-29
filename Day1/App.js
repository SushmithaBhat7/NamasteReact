// const h1Elem = React.createElement(
//   "h1",
//   { id: "h1Element" },
//   "Hello world from React !"
// );
// console.log(h1Elem);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(h1Elem);

import React from "react";
import ReactDOM from "react-dom/client";

// const parentElem = React.createElement("div", { id: "parent" }, [
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {}, "I'm h1 element"),
//     React.createElement("h2", {}, "I'm h2 element"),
//   ]),
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {}, "I'm h1 element"),
//     React.createElement("h2", {}, "I'm h2 element"),
//   ]),
// ]);

const parentElem = (
  <h1 id="parent" xyz="ASGFCJHVJHJKJKJHK" color="blue">
    Namaste from JSX
  </h1>
);
const MiniTitleComp = () => <h3>Namasthe</h3>;
const Title = () => (
  <div id="title">
    <MiniTitleComp />
    <h2>Namasthe Title</h2>
  </div>
);
const HeadingComponent = () => {
  return (
    <div className="hedding">
      <Title />
      <h1>Namasthe from HeadingComponent</h1>
    </div>
  );
};
console.log({ parentElem });
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
