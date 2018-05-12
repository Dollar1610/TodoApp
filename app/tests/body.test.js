import React from 'react';
import { shallow, mount } from 'enzyme';
import Body from './../body/body';

describe('<Body />', () => {
  it('snapshot for Body component', () => {
    const snapshotBody = shallow(<Body />);
    expect(snapshotBody).toMatchSnapshot();
  });
  it('test methods Body', () => {
    const wrapper = mount(<Body />, { attachTo: document.body.firstChild });
    const addItem = jest.spyOn(wrapper.instance(), 'addItem');
    const deleteItem = jest.spyOn(wrapper.instance())
    console.log(wrapper.instance().addItem);
    wrapper.find('button').first().simulate('click');
    expect(addItem).toHaveBeenCalled();
    wrapper.find('button').second().simulate('click');
    wrapper.instance().addItem.handleClick();
  });
});

