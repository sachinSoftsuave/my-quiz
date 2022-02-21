import React from "react";
import { shallow } from 'enzyme';
import "jsdom-global/register";
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Header from "./index.jsx";
import toJson from 'enzyme-to-json';

Enzyme.configure({ adapter: new Adapter() });

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useContext: () => ({
  isQuizStarted: false
  }),
}));

describe("header component", () => {
  
  it('it render header component', () =>{
        const wrapper  = shallow(<Header/>);
        expect(wrapper.exists()).toBe(true);
  })

   it('it renders the snapshot of header component', () =>{
        const wrapper  = shallow(<Header/>);
       expect(toJson(wrapper)).toMatchSnapshot();
  })

});
