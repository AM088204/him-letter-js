import React from 'react';
import CollapsibleMenuView from 'terra-collapsible-menu-view';
import { DisclosureManagerHeaderAdapter } from 'terra-disclosure-manager';
import Tabs from 'terra-tabs';
import  '../../stylesheets/HimLetterTemplates.css';

const HimAddOrEditWindow = (props) => {
  const { name } = props;
  const PropertiesTab = (
    <Tabs.Pane label="Properties" key="Properties" />
  );
  const PrintTemplateTab = (
    <Tabs.Pane label="Print Template" key="Print Template" />
   );
   const EmailTemplateTab = (
   <Tabs.Pane label="Email Template" key="Email Template" />
   );
  return (
    <div>
      <DisclosureManagerHeaderAdapter
        title={name}
        collapsibleMenuView={(
          <CollapsibleMenuView />
        )}
      />
      <div className='margin-top'>
        <Tabs>
          {PropertiesTab}
          {PrintTemplateTab}
          {EmailTemplateTab}
        </Tabs>
      </div>
    </div>
  );

}
export default HimAddOrEditWindow;