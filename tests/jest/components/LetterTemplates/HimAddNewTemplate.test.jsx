import React from 'react';
import { shallowWithIntl, mountWithIntl } from 'terra-enzyme-intl';
import HimAddNewTemplateButton from '../../../../src/him-letters-js/components/LetterTemplates/HimAddNewTemplateButton';
import Button from 'terra-button/lib/Button';
import { DisclosureManagerContext } from 'terra-disclosure-manager';
import MockContext from './MockContext';
describe('HimAddNewTemplate', () => {
    const disclosureSpy = jest.fn();
    beforeAll(() => {
        MockContext({ disclose: disclosureSpy });
    });
    it('Should Render HimAddNewTemplate Button', () => {
        const himAddNewTemplate = shallowWithIntl(<HimAddNewTemplateButton />);
        expect(himAddNewTemplate.first().shallow()).toMatchSnapshot();
    });
    it('Should verify the label', () => {
        const himAddNewTemplate = mountWithIntl(
            <HimAddNewTemplateButton />
        );
        expect(himAddNewTemplate.find(Button).props().text).toBe('him-letters-engine.himAddNewTemplate.button');
    });

    it('Should verify the variant', () => {
        const himAddNewTemplate = mountWithIntl(
            <HimAddNewTemplateButton />
        );
        expect(himAddNewTemplate.find(Button).props().variant).toBe('emphasis');
    });

    it('Should verify the add icon', () => {
        const himAddNewTemplate = mountWithIntl(
            <HimAddNewTemplateButton />
        );
        expect(himAddNewTemplate.find(Button).props().icon.type.displayName).toBe('IconAdd');
    });

    it('Should verify the onclick', () => {
        const mockClick = jest.fn();
        const himAddNewTemplate = mountWithIntl(
            <HimAddNewTemplateButton disclosureType="modal" size="large" />
        );
        himAddNewTemplate
            .find(Button)
            .props()
            .onClick(mockClick);

        console.log("dispatchnnnnnn", disclosureSpy.mock.calls[0][0]);
    });
});