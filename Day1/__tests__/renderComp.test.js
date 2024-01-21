const { render, screen } = require("@testing-library/react");
const { HeadingComponent, MiniTitleComp } = require("../App");
import "@testing-library/jest-dom";
test("Should load component ", () => {
  render(<HeadingComponent />);
  const heading = screen.getByRole("button");

  //Assertion

  expect(heading).toBeInTheDocument();
});
test("Should load component ", () => {
  render(<HeadingComponent />);
  //   const heading = screen.getByText("Random");
  const heading = screen.getByText("Submit");
  //Assertion

  expect(heading).toBeInTheDocument();
});
test("Should load component ", () => {
  render(<HeadingComponent />);
  const buttonElem = screen.getAllByRole("button");
  console.log(buttonElem);
  //Assertion
  expect(buttonElem.length).toBe(1);
});
