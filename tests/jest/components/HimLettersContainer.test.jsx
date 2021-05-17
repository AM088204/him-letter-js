import React from 'react';
import HimLettersContainer from '../../../src/him-letters-js/components/HimLettersContainer';

it('should render a HimLettersContainer with a default HimLettersView', () => {
  const testContainer = <HimLettersContainer />;
  expect(shallow(testContainer)).toMatchSnapshot();
});
