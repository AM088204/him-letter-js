import React from 'react';
import ApplicationBase from 'orion-application/lib/application-base';
import { ApplicationSessionProvider } from 'orion-application/lib/application-session';
import ApplicationNavigation from 'orion-application/lib/application-navigation';
import HimLettersContainer from './HimLettersContainer';

const HimLettersApplication = () => (
  <ApplicationBase
    applicationName="HimLettersJs"
    applicationVersion="0.0.0"
    applicationAboutPageUrl="https://github.cerner.com/him-cloud/him-letters-js.git"
    applicationHelpPageUrl="https://github.cerner.com/him-cloud/him-letters-js.git"
    renderSessionProvider={children => (
      <ApplicationSessionProvider>
        {children}
      </ApplicationSessionProvider>
    )}
  >
    <ApplicationNavigation>
      <HimLettersContainer />
    </ApplicationNavigation>
  </ApplicationBase>
);

export default HimLettersApplication;
