import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme, { shallow } from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
import Button from './Button';

Enzyme.configure({ adapter: new Adapter() });


describe('Testing Button component:', () => {
  it('Expects to find button HTML element in the DOM', () => {
    const elem = renderer.create(<Button />).toJSON();
    expect(elem).toMatchSnapshot();
  });

  it('Test click button event', () => {
    const mockCallBack = jest.fn();

    const button = shallow((<Button handleClick={mockCallBack}>Ok!</Button>));
    button.find('button').simulate('click');
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });
});