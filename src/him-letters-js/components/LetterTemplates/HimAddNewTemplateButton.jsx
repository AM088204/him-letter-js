import React from 'react';
import { DisclosureManagerContext } from 'terra-disclosure-manager';
import ModalManager from 'terra-modal-manager';
import IconAdd from 'terra-icon/lib/icon/IconAdd';
import Button from 'terra-button/lib/Button';
import { injectIntl } from 'react-intl';
import HimAddOrEditWindow from './HimAddOrEditWindow';
import '../../stylesheets/HimLetterTemplates.css';

const HimAddNewTemplateButton = (props) => {
  const { disclosureType, size ,intl } = props;
  const disclosureManager = React.useContext(DisclosureManagerContext);
  
  return (
    <div>
      <ModalManager >
        <Button
          text={intl.formatMessage({ id: 'him-letters-engine.himAddNewTemplate.button' })}
          icon={<IconAdd />}
          variant="emphasis"
          onClick={() => {
            disclosureManager.disclose({
              preferredType: disclosureType,
              size,
              content: {
                key: "add new template",
                component: <HimAddOrEditWindow name={intl.formatMessage({ id: 'him-letters-engine.himAddNewTemplate.button' })} disclosureType={disclosureType} />,
             },
            });
          }}
        >
      </Button>      
    </ModalManager>
   </div>);
}
export default injectIntl(HimAddNewTemplateButton);