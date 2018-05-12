import React from 'react';
import { shallow } from 'enzyme';
import Header from './../header/header';

describe('<Header />', () => {
  it('renders a <header>', () => {
    const renderedComponent = shallow(
      <Header />
    );
    expect(renderedComponent).toMatchSnapshot();
  });
});
