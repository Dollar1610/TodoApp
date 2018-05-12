import React from 'react';
import { shallow } from 'enzyme';
import Button from './../body/components/button';


describe('<Button />', () => {
  it('renders a <button>', () => {
    const renderedComponent = shallow(
      <Button />
    );
    expect(
      renderedComponent.find('button').node
    ).toBeDefined();
  });
  it('should render a button title', () => {
    const wrapper = shallow(
      <Button buttonName={'Title'} />
    );
    expect(wrapper.props().children).toEqual('Title');
  });
  it('handles clicks', () => {
    const onClickSpy = jest.fn();
    const renderedComponent = shallow(<Button event={onClickSpy} />);
    renderedComponent.find('button').simulate('click');
    expect(onClickSpy).toHaveBeenCalled();
    expect(onClickSpy).toMatchSnapshot();
  });
});
