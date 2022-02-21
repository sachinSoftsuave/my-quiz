import React from "react";
import { mount, shallow } from "enzyme";
import "jsdom-global/register";
import Enzyme from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import Options from "./index.jsx";
import "jest-localstorage-mock";

Enzyme.configure({ adapter: new Adapter() });
import toJson from "enzyme-to-json";


const props = {
  option : {},
  displayAnswer : jest.fn()
}


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



describe("renders options component", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<Options />);
  });
  
  it('it renders the snapshot of Options component', () =>{
    // expect(toJson.wrapper).toMatchSnapshot();
    const wrapper = mount(<Option {...props} />);
    expect(wrapper).toHaveLength(1);
  })

  // it('tests the click event of options', () => {
  //   const tree = shallow(
  //    <Options 
  //    option = {[{ id: '1', value: 'Item 1' }, { id: '2', value: 'Item 2' }]}
  //    />)
  //    tree.find('.option').at(0).simulate('click')
  //    expect(tree).toBeDefined();
  // })
});
