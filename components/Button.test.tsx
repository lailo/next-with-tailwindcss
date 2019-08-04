import * as React from "react";
import { shallow } from "enzyme";

import Button from "./Button";

describe("Button", () => {
  it("renders the checkbox with correct label", () => {
    const wrapper = shallow(<Button>Hello</Button>);
    expect(wrapper.text()).toEqual("Hello");
  });
});
