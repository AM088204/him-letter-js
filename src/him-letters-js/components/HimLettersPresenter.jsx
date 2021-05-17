import React from 'react';
import Tabs from 'terra-tabs';
import TabContentTemplate from 'terra-tabs/lib/terra-dev-site/doc/example/TabContentTemplate';
import { injectIntl } from 'react-intl';
import HimSearchTemplate from './LetterTemplates/HimSearchTemplate';
import HimAddNewTemplateButton from './LetterTemplates/HimAddNewTemplateButton';
import '../stylesheets/HimLetterTemplates.css';
import Grid from 'terra-grid';
//Container to present all the components
const HimLettersPresenter = (props) => {

  const { intl } = props;

  const distributionLettersTab = (
    <Tabs.Pane
      label={intl.formatMessage({ id: 'him-letters-engine.distributeLettersTabLabel' })}
      key="DistributeLetters">
      <TabContentTemplate label={intl.formatMessage({ id: 'him-letters-engine.distributeLettersTabLabel' })}>
        {/* to do */}
      </TabContentTemplate>
    </Tabs.Pane>
  );

  const lettersTemplatesTab = (
    <Tabs.Pane
      label={intl.formatMessage({ id: "him-letters-engine.letterTemplateTabLabel" })}
      key="LetterTemplates">
      <TabContentTemplate label={intl.formatMessage({ id: "him-letters-engine.letterTemplateTabLabel" })}>
        <div className='align-left'>
            <HimSearchTemplate />
          </div>
          <div className='align'>
            <HimAddNewTemplateButton disclosureType="modal" size="large" />
          </div>
      </TabContentTemplate>
    </Tabs.Pane>
  );
  return (
    <div>
      <Tabs>
        {distributionLettersTab}
        {lettersTemplatesTab}
      </Tabs>
    </div>
  );
};

export default injectIntl(HimLettersPresenter);