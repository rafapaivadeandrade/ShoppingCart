import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import NavBar from './index';

configure({ adapter: new Adapter() });

describe('NavBar', () => {
  const wrapper = shallow(<NavBar />);

  describe('renders', () => {
    it('should render NavBar', () => {
      expect(wrapper.contains('Shopping')).toBe(true);
    });
  });
});
