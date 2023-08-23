// const h1Elem = React.createElement(
//   "h1",
//   { id: "h1Element" },
//   "Hello world from React !"
// );
// console.log(h1Elem);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(h1Elem);

const parentElem = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I'm h1 element"),
    React.createElement("h2", {}, "I'm h2 element"),
  ]),
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I'm h1 element"),
    React.createElement("h2", {}, "I'm h2 element"),
  ]),
]);
console.log({ parentElem });
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parentElem);
