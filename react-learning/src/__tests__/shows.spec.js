import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import { BrowserRouter } from "react-router-dom";

import { Shows } from "../components/Shows";

describe("<Shows /> component", () => {
  let props;
  let shallowWrapper;
  beforeEach(() => {
    props = {
      shows: [{
        id: 1747698,
        season: 2019,
        show: {
          id: 15779,
          name: "CBS News Sunday Morning",
          image: {
            medium: "http://static.tvmaze.com/uploads/images/medium_portrait/90/226497.jpg",
          }
        }
      }],
      classes: {
        root: 'app-root',
        gridList: 'grid',
        zoom: 'zoom',
        loader: 'loader'
      }
    };
    props.fetchShows = jest.fn();
    shallowWrapper = shallow(<Shows {...props} />);
  });

  test("translate on mouseover a show", () => {
    let hover = shallowWrapper.find("WithStyles(ForwardRef(GridListTile))");
    expect(shallowWrapper.state()).toEqual({ hover: false });
    hover.simulate("mouseenter");
    expect(shallowWrapper.state()).toEqual({ hover: 1747698 });
    hover.simulate("mouseleave");
    expect(shallowWrapper.state()).toEqual({ hover: false });
  });

  test("renders without crashing", () => {
    const wrapper = renderer.create(<BrowserRouter><Shows {...props} /></BrowserRouter>);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test("fetches shows on load", () => {
    const spy = jest.spyOn(shallowWrapper.instance().props, "fetchShows");
    expect(spy).toHaveBeenCalled();
  });

  test("show cards render correctly", () => {
    expect(shallowWrapper.find("[data-test='shows-cards-test']")).toHaveLength(
      1
    );
  });
});
