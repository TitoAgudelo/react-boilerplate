import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

let wrapped = shallow(<Header />);
let title = 'Posts';
let authorCopy = 'By Tito Agudelo';

describe('Header', () => {
  it('should render the Title Component correctly', () => {   
    expect(wrapped).toMatchSnapshot();
  });

  it('renders the Titles children', () => { 
    expect(wrapped.find('[testId="title"]').text()).toEqual(title);
  });

  it('renders the author children', () => { 
    expect(wrapped.find('[testId="author"]').text()).toEqual(authorCopy);
  });
});
