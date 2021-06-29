import React from "react";
import { shallow } from "enzyme";
import Quiz from "./Quiz.js";

describe("<Quiz />", () => {
  let component = null;
  it("renders correctly", () => {
    component = shallow(<Quiz />);
  });
  it("matches snapshot", () => {
    expect(component).toMatchSnapshot();
  });
});
