import React from 'react';
import { DisclosureManagerContext } from 'terra-disclosure-manager';

const MockContext = (context) => {
  jest.spyOn(React, 'useContext').mockImplementation((contextType) => {

    if (contextType === DisclosureManagerContext) {
      return context;
    }
    return undefined;
  });
};
export default MockContext;
