import React from "react";
import { mount } from "enzyme";
import Loading from "./Loading.js";

describe("<Loading />", () => {
  it("matches snapshot", () => {
    const wrapper = mount(<Loading />);
    expect(wrapper).toMatchSnapshot();
  });
});
