import React from 'react';
import { shallow } from 'enzyme';
import ListItems from './../body/components/list-items';

describe('<ListItems />', () => {
  it('it should render list items', () => {
    const items = ['item1'];
    const renderedComponent = shallow(<ListItems items={items} />);
    const expectedOutput =
      '<table class="table is-bordered">' +
      '<tbody>' +
      '<tr>' +
      '<td>item1</td>' +
      '</tr>' +
      '</tbody>' +
      '</table>';
    const realOutput = renderedComponent.find('div.list-items').html();
    expect(realOutput.indexOf(expectedOutput) > -1).toEqual(true);
  });
});
