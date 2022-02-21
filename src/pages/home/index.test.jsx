import React from "react";
import { mount } from "enzyme";
import "jsdom-global/register";
import Enzyme from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import Home from "./index.jsx";
import { act } from "react-test-renderer";
Enzyme.configure({ adapter: new Adapter() });
import toJson from "enzyme-to-json";

const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

const mockStartQuiz = jest.fn();

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useContext: () => ({
      setQuizStarted: () => mockStartQuiz,
      isQuizStarted: true,
  }),
}));

const prop = {
    handleStart:jest.fn()
}


describe("<Home/>", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<Home />);

  });
  it("it should render title", () => {
    expect(wrapper.find("h1").text()).toContain("Coding Quiz Challenge");
  });

  it("it should render subtitle1", () => {
    expect(wrapper.find(".subTitleText1").text()).toContain(
      "Try to answer to code-related question within the timelimit"
    );
  });

  it("it should render subtitle2", () => {
    expect(wrapper.find(".subTitleText2").text()).toContain(
      "Keep in mind that incorrect answers will penalize your score/time by ten seconds"
    );
  });

  it("should render the start button", () => {
    expect(wrapper.find("button").text()).toContain("Start Quiz");
  });


   it('Test click event', async () => {
    await act(async () => {
    await wrapper.find('button').simulate('click');
    })
    console.log(window.location.pathname,"myurl");
  });

  it('it renders the snapshot of home component', () =>{
       expect(toJson(wrapper)).toMatchSnapshot();
  })
});
