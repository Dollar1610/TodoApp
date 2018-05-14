import React from 'react';
import { shallow } from 'enzyme';
import Body from './../body/body';

describe('<Body />', () => {
  it('snapshot for Body component', () => {
    const snapshotBody = shallow(<Body />);
    expect(snapshotBody).toMatchSnapshot();
  });
  it('expandable High-Order Component', () => {
    let props;
    let wrapper;
    let ComposedComponent;
    let MockButton = ({ collapsed, expandCollapse }) => (
      <button onClick={expandCollapse}>
        {(collapsed) ? 'collapsed' : 'expanded' }
      </button>
    )

  });
});

