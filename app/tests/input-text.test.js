import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import InputText from './../body/components/input-text';

describe('<InputText />', () => {
  it('renders a <input>', () => {
    const renderedComponent = shallow(
      <InputText />
    );
    expect(
      renderedComponent.find('input').node
    ).toBeDefined();
    it('it should render span', () => {
      const error = false;
      const rendered = renderer.create(
        <InputText error={error} />
      );
      expect(rendered.toJSON()).toMatchSnapshot();
    });
  });
  it('renders a <p/>', () => {
    const bool = true;
    const renderedComponent = shallow(<InputText error={bool} />);
    const expectedOutput =
      '<p class="help is-danger">' +
      'Empty text field' +
      '</p>';
    const realOutput = renderedComponent.find('div.field').html();
    expect(realOutput.indexOf(expectedOutput) > -1).toEqual(true);
  });
});
