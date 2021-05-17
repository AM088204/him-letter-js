import React from 'react';
import SearchField from 'terra-search-field';
import Text from 'terra-text';
import { injectIntl } from 'react-intl';
import classNames from 'classnames/bind';
import styles from '../../stylesheets/HimLetterTemplates.css';

const cx = classNames.bind(styles);
//Search bar to search templates.
const HimSearchTemplate = (props) => {

    const { intl } = props;

    return (
        <div className={cx(['margin-top'])}>
            <Text className={cx(['text-style'])}>{intl.formatMessage({ id: 'him-letters-engine.himSearchTemplate.label' })}</Text>
            <SearchField
                placeholder={intl.formatMessage({ id: 'him-letters-engine.himSearchTemplate.placeholder' })}
            />
        </div>
    );
}

export default injectIntl(HimSearchTemplate);