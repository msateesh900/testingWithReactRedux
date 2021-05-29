import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr } from "../../../Utils";
import Header from "./index.js";

const setUp = (props = {}) => {
  const component = shallow(<Header {...props} />);
  return component;
};

describe("Header Component", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it("should render without errors", () => {
    // expect(1).toBe(1);
    // const component = setUp();
    // console.log(component.debug());
    // const wrapper = component.find(`[data-test='headerComponent']`);
    const wrapper = findByTestAttr(component, "headerComponent");
    expect(wrapper.length).toBe(1);
  });

  it("Should render logo image", () => {
    // const component = setUp();
    // const logoWrapper = component.find(`[data-test='header-img-Logo']`);
    const logoWrapper = findByTestAttr(component, "header-img-Logo");
    expect(logoWrapper.length).toBe(1);
  });

  //   it("it should render with errors", () => {
  //     expect(1).toBe(2);
  //   });
});
