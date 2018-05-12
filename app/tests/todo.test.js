import React from 'react';
import { shallow } from 'enzyme';
import Todo from './../todo';


describe('<Todo />', () => {
  it('snapshot for Todo component', () => {
    const snapshotTodo = shallow(<Todo />).html();
    expect(snapshotTodo).toMatchSnapshot();
  });
});
