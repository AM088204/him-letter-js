import React from 'react';
import ContentContainer from 'terra-content-container';
import Spacer from 'terra-spacer';
import { injectIntl } from 'react-intl';
import HimLettersPresenter from './HimLettersPresenter';

//To display DistributeLetters and LetterTemplates tabs
const HimLettersView = () => {
  
  return (
    <ContentContainer>
      <Spacer paddingTop="large+1" paddingBottom="large+1" paddingLeft="large+1" paddingRight="large+1">
        <div>
          <HimLettersPresenter/>
        </div>
      </Spacer>
    </ContentContainer>
  );
};

export default injectIntl(HimLettersView);