import React from "react";
import { mount } from "enzyme";
import "jsdom-global/register";
import Enzyme from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import "jest-localstorage-mock";
import Result from "./index.jsx";
import toJson from 'enzyme-to-json';

Enzyme.configure({ adapter: new Adapter() });

const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

const UserName = {
    error: 'please enter a unique name'
}


describe("results component", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<Result />);
  });

  it("renders", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("it should render title", () => {
    expect(wrapper.find("h1").text()).toContain("All done!");
  });

  it("should render the title to display score", () => {
    expect(wrapper.find("p").text()).toContain("Your final score is 0");
  });

  it("should render the submit button", () => {
    expect(wrapper.find(".submitBtn").text()).toContain("Submit");
  });

  it("to simulate the input change", () => {
    wrapper.find("input").simulate("change");
    expect(wrapper).toBeDefined();
  });

  it("should render correctly", () => {
     let usersList = [ 'A', 'B', 'C', 'D']
     const wrapper = mount(<Result usersList={usersList} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

    it("results component should render correctly", () => {
      let prevented = false;
      wrapper.find("form").simulate("submit", {
        preventDefault: () => {
          prevented = true;
        },
      });
      expect(prevented).toBe(true);
    });

});

