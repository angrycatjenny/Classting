import React from "react";
import { mount } from "enzyme";
import Home from "./Home.js";

describe("<Home />", () => {
  it("matches snapshot", () => {
    const wrapper = mount(<Home />);
    expect(wrapper).toMatchSnapshot();
  });
  it("start", () => {
    const wrapper = mount(<Home />);
    let quizButton = wrapper.findWhere((node) => node.type() === "button");
    quizButton.simulate("click");
  });
});
