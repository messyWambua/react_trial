import React from "react";
import { shallow} from "enzyme";

import App from "../App";

describe("<App /> root component", () => {

  test("renders <Navbar /> component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("[data-test='test-app']")).toHaveLength(1);
  });

  test("renders <Navbar /> component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("WithStyles(Navigation)")).toHaveLength(1);
  });

  test("renders <ThemeProvider /> component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("ThemeProvider")).toHaveLength(1);
  });

  test("renders <CssBaseline /> component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("CssBaseline")).toHaveLength(1);
  });
});
