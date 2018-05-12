import React from 'react';
import { shallow } from 'enzyme';
import Footer from './../footer/footer';

describe('<Footer />', () => {
  it('renders a <footer>', () => {
    const renderedComponent = shallow(
      <Footer />
    );
    expect(renderedComponent).toMatchSnapshot();
  });
});
