import React from "react";
import { shallow } from "enzyme";
import Analysis from "./Analysis.js";

describe("<Analysis />", () => {
  let component = null;
  it("renders correctly", () => {
    component = shallow(<Analysis />);
  });
  it("matches snapshot", () => {
    expect(component).toMatchSnapshot();
  });
});
