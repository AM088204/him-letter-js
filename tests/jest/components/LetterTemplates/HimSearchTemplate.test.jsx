import React from 'react';
import SearchField from 'terra-search-field';
import { shallowWithIntl, mountWithIntl } from 'terra-enzyme-intl';
import HimSearchTemplate from '../../../../src/him-letters-js/components/LetterTemplates/HimSearchTemplate';

describe('HimSearchTemplate', () => {
    it('Should Render HimSearchTemplate', () => {
        const himSearchTemplate = shallowWithIntl(<HimSearchTemplate />);
        expect(himSearchTemplate.first().shallow()).toMatchSnapshot();
    });

    it('should verify the attributes of the component', () => {
        const himSearchTemplate = mountWithIntl(
            <HimSearchTemplate />,
        );
        expect(himSearchTemplate.find(SearchField).props().placeholder).toBe('him-letters-engine.himSearchTemplate.placeholder');
    });

    it('Should verify the label', () => {
        const himSearchTemplate = mountWithIntl(
            <HimSearchTemplate />
        );
        expect(himSearchTemplate.contains('him-letters-engine.himSearchTemplate.label')).toBe(true);
    });
}
); 