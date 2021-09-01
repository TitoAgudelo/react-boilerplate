import React from 'react';
import { shallow } from 'enzyme';
import Home from './Home';

let wrapped = shallow(<Home />);

describe('Home', () => {
  it('should render the Page Component as snapshot', () => {   
    expect(wrapped).toMatchSnapshot();
  });
});
