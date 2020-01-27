import React from "react";
import { Route } from "react-router-dom";
import { shallow } from "enzyme";

import { Navigation } from "../components/Navbar";
import Shows from "../components/Shows";

describe("<Navbar /> component", () => {
  let props;
  let wrapper;
  beforeEach(() => {
    props = {
        classes: {
        logo: {
          maxWidth: '300px',
          maxHeight: '79px',
          display: 'block'
        },
        title: {
          flexGrow: 1,
          marginLeft: '50px'
        }
      }
    };
    wrapper = shallow(<Navigation {...props} />);
  });

  test("Navigation route", () => {
    const pathMap = wrapper.find(Route).reduce((pathMap, route) => {
          const routeProps = route.props();
          pathMap[routeProps.path] = routeProps.component;
          return pathMap;
        }, {});
    
        expect(pathMap["/"]).toBe(Shows);
  }
  );

  test("renders the logo", () => {
    expect(wrapper.find("[data-test='logo']")).toHaveLength(1);
  });

  test("renders the Nav-links", () => {
    expect(wrapper.find("[data-test='nav-links']")).toHaveLength(1);
  });
});