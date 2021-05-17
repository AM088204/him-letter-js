import React from 'react';
import { mockIntl, shallowWithIntl } from 'terra-enzyme-intl';
import { ApplicationIntlContext } from 'orion-application/lib/application-intl';
import HimLettersView from '../../../src/him-letters-js/components/HimLettersView';

it('should render a HimLettersView with no data', () => {
  jest.spyOn(React, 'useContext').mockImplementation((contextType) => {
    if (contextType === ApplicationIntlContext) {
      return mockIntl;
    }
    return undefined;
  });
  const himLettersView = shallowWithIntl(<HimLettersView />);
  expect(himLettersView.first().shallow()).toMatchSnapshot();
});

it('should render a HimLettersView that has succeeded with a valid HimLettersEngine', () => {
  jest.spyOn(React, 'useContext').mockImplementation((contextType) => {
    if (contextType === ApplicationIntlContext) {
      return mockIntl;
    }
    return undefined;
  });
  const himLettersView = shallowWithIntl(<HimLettersView exampleData="HimLettersJs" />);
  expect(himLettersView.first().shallow()).toMatchSnapshot();
});
