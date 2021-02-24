import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import '../setupTests';
import App from '../App';
import createStore from '../redux/index';

configure({ adapter: new Adapter() });
describe('Landing', () => {
  const store = createStore;
  const wrapper = shallow(<App store={store} />);
  it('should render landing page correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
