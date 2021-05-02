// import React from 'react';
// import renderer from 'react-test-renderer';
// import Footer from './Footer';

// it('Testing render a component Footer', () => {
//   const elem = renderer.create(<Footer />).toJSON();
//   expect(elem).toMatchSnapshot();
// });

import React from "react";
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Footer from './Footer';

describe('Logo', () => {
  test('render snapshot', () => {
    const { asFragment } = render(<Footer />);
    expect( asFragment(<Footer />) ).toMatchSnapshot();
  })
})
