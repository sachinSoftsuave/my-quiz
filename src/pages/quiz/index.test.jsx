import React from "react";
import { mount } from "enzyme";
import "jsdom-global/register";
import Enzyme from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import Quiz from "./index.jsx";
Enzyme.configure({ adapter: new Adapter() });
import toJson from "enzyme-to-json";
import "jest-localstorage-mock";

const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));
console.log('hi');
const mockStartQuiz = jest.fn();

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useContext: () => ({
      setQuizStarted: () => mockStartQuiz,
      isQuizStarted: true,
  }),
}));


describe("renders quiz component", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<Quiz />);
  });

  it('it renders the snapshot of quiz component', () =>{
       expect(toJson(wrapper)).toMatchSnapshot();
  })

});
