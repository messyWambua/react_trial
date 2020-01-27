import React from "react";
import { shallow } from "enzyme";

import { Shows } from "../components/Shows";

describe("<Shows/> component", () => {
  let props;
  let shallowWrapper;
  beforeEach(() => {
    props = {
      loading: true,
      classes: {
        loader: 'app-1'
      }
    };
    props.fetchShows = jest.fn();
    shallowWrapper = shallow(<Shows {...props} />);
  });
  test("spinner renders correctly", () => {
    expect(shallowWrapper.find("[data-test='spinner']")).toHaveLength(1);
  });
});
