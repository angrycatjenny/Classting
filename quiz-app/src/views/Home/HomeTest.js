import React from "react";
import { shallow } from "enzyme";
import Home from "./Home.js";

describe("<Home />", () => {
  it("matches snapshot", () => {
    const wrapper = shallow(<Home />);
    wrapper.setState({
      isLoading: false,
    });
    expect(wrapper.find("div").length).toBe(2);
    expect(wrapper.find("button").length).toBe(1);
    expect(wrapper.find("span").length).toBe(3);
    expect(wrapper).toMatchSnapshot();
  });
  it("start", () => {
    const wrapper = shallow(<Home />);
    let quizButton = wrapper.findWhere((node) => node.type() === "button");
    quizButton.simulate("click");
  });
});
