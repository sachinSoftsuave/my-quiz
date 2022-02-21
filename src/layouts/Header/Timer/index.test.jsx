import React from "react";
import { mount } from 'enzyme';
import "jsdom-global/register";
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Timer from "./index.jsx";
import toJson from 'enzyme-to-json';

Enzyme.configure({ adapter: new Adapter() });

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useContext: () => ({
  isQuizStarted: false
  }),
}));


const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

describe("Timer component", () => {
  let wrapper;
    beforeEach(() => {
         wrapper = mount(<Timer/>)
    })
  
  it('it render Timer component', () =>{
        expect(wrapper.exists()).toBe(true);
  })

  it('render the title of timer', () => {
      expect(wrapper.find('.timer').text()).toContain(' Time: ')
  })

  it('renders the snapshot of timer component', () =>{
        expect(toJson(wrapper)).toMatchSnapshot();
  })

});
