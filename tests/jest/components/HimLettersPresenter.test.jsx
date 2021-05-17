import React from 'react';
import { shallowWithIntl, mountWithIntl } from 'terra-enzyme-intl';
import TabContentTemplate from 'terra-tabs/lib/terra-dev-site/doc/example/TabContentTemplate';
import  HimLettersPresenter from '../../../src/him-letters-js/components/HimLettersPresenter';

describe('HimLettersPresenter', () => {
    it('Should Render HimLettersPresenter', () => {
        const himLettersPresenter = shallowWithIntl(<HimLettersPresenter />);
        expect(himLettersPresenter.first().shallow()).toMatchSnapshot();
    });

    it('should verify the label for tabs', () => {
        const himLettersPresenter = mountWithIntl(
            <HimLettersPresenter />,
        );
        expect(himLettersPresenter.find(TabContentTemplate).props().label).toStrictEqual('him-letters-engine.distributeLettersTabLabel','him-letters-engine.letterTemplateTabLabel');
    });

}); 