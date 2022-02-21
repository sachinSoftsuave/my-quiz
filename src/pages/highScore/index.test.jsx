import React from "react";
import { mount } from "enzyme";
import "jsdom-global/register";
import Enzyme from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import HighScore from "./index.jsx";
import "jest-localstorage-mock";
import  toJson  from 'enzyme-to-json'

Enzyme.configure({ adapter: new Adapter() });

const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

const mockSetMinutes = jest.fn();
const mockSetQuizStarted = jest.fn();
jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useContext: () => ({
    setQuizStarted: () => mockSetQuizStarted,
    setMinutes: () => mockSetMinutes,
  }),
}));

describe("renders highscore component", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<HighScore />);
  });

  it("it should render title", () => {
    expect(wrapper.find("h1").text()).toContain("Highscores");
  });

  it("should render the goback button", () => {
    expect(wrapper.find(".backBtn").text()).toContain("GoBack");
  });

  it("should render the clear highscore button", () => {
    expect(wrapper.find(".clearBtn").text()).toContain("Clear Highscore");
  });

  it("tests the click event of backBtn", () => {
    wrapper.find(".backBtn").simulate("click");
    expect(wrapper).toBeDefined();
  });

  it("tests the click event of clearBtn", () => {
    wrapper.find(".clearBtn").simulate("click");
    expect(wrapper).toBeDefined();
  });

  it("render a snapshot of highscore component", () => {
    expect(wrapper).toMatchSnapshot();
  });


it("should render correctly", () => {
  const usersData = ['A', 'B', 'C'];
  const wrapper = mount(<HighScore usersData={usersData} />);
  expect(toJson(wrapper)).toMatchSnapshot();
});
});
