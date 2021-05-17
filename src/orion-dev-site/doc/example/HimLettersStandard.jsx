import React from 'react';
import OrionRequestorMockProvider from 'orion-application/lib/orion-requestor/OrionRequestorMockProvider';

// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import HimLettersContainer from 'him-letters-js/lib/him-letters-js/components/HimLettersContainer';

export default () => (
  <OrionRequestorMockProvider
    mock={(instance) => {
      instance.onGet().reply(200, {
        data: 'Example Data.',
      });
    }}
  >
    <HimLettersContainer />
  </OrionRequestorMockProvider>
);
