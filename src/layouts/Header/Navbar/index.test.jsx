import React from "react";
import { mount } from "enzyme";
import toJson from 'enzyme-to-json';

import Navbar from "./index.jsx";


describe("renders navbar component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<Navbar />);
  });

  it("renders the text of view score", () => {
    expect(wrapper.find("a").text()).toContain("View Highscore ");
  });

  it('when view highscore is clicked it navigates to highscore page', () => {
      wrapper.find('a').simulate('click')
    wrapper.setProps({ articles: [{Url : './high_Score'}]})
    expect(wrapper.find('a').prop('href')).toEqual('./high_Score')
  })

  it("should test Navbar component", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("should have icon", () => {
    expect(wrapper.find("i")).toHaveLength(1);
  });
});
