import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import 'jsdom-global/register'; //at the top of file , even  , before importing react


Enzyme.configure({ adapter: new Adapter() });


