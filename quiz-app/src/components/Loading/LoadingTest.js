import React from "react";
import { shallow } from "enzyme";
import Loading from "./Loading.js";

describe("<Loading />", () => {
  it("matches snapshot", () => {
    const wrapper = shallow(<Loading />);
    expect(wrapper.find("div").length).toBe(1);
    expect(wrapper).toMatchSnapshot();
  });
});
