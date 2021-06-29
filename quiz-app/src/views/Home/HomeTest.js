import React from "react";
import { mount } from "enzyme";
import Home from "./Home.js";

describe("<Home />", () => {
  it("matches snapshot", () => {
    const wrapper = mount(<Home />);
    expect(wrapper).toMatchSnapshot();
  });
});
