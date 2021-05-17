import React from 'react';
import { shallowWithIntl, mountWithIntl } from 'terra-enzyme-intl';
import HimAddOrEditWindow from '../../../../src/him-letters-js/components/LetterTemplates/HimAddOrEditWindow';
import Tabs from 'terra-tabs';
import { DisclosureManagerHeaderAdapter } from 'terra-disclosure-manager';

describe('himAddOrEditWindow', () => {

    it('Should Render himAddOrEditWindow Button', () => {
        const himAddOrEditWindow = shallowWithIntl(<HimAddOrEditWindow />);
        expect(himAddOrEditWindow.first().shallow()).toMatchSnapshot();
    });

   
    it('Should Render himAdd', () => {
        const himAddOrEditWindow = shallowWithIntl(<HimAddOrEditWindow />);
        console.debug(himAddOrEditWindow.find(Tabs.Pane).at(0).props().label);
    });


    it('Should Render himAdd', () => {
        const himAddOrEditWindow = mountWithIntl(<HimAddOrEditWindow />);
        expect(himAddOrEditWindow.find(DisclosureManagerHeaderAdapter).props().collapsibleMenuView.type.displayName).toMatch('CollapsibleMenuView');
    });
});