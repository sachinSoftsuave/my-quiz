import React from "react";
import "jsdom-global/register";
import Enzyme, { mount } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import Main from ".";
import { QuizContext } from '.';
import toJson from 'enzyme-to-json';

Enzyme.configure({ adapter: new Adapter() });

let mockSetQuizStarted = jest.fn();
let mockSetMinutes = jest.fn();
let mockIsActive = jest.fn();

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useContext: () => ({
    isQuizStarted: false,
    isActive: false,
    minutes: false,
    setQuizStarted: () => mockSetQuizStarted,
    setMinutes: () => mockSetMinutes,
    setIsActive: () => mockIsActive
  })

}));

 const value = {
     mockIsActive,
     mockSetMinutes,
     mockSetQuizStarted
  };

  describe("Context", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<Main />);
  });

  it("should render the snapshot of main component", () => {
  const wrapper = mount(<QuizContext.Provider value={value}><Main /></QuizContext.Provider>);
  expect(toJson(wrapper)).toMatchSnapshot();
  });
  
  })


