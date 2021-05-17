import React from 'react';
import HimLetterTemplateSrc from '!raw-loader!../../him-letters-js/components/HimLettersApplication';
import HimLettersStandard from './example/HimLettersStandard';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../docs/README.md';
import { name } from '../../../package.json';
const DocPage = () => (
  <DocTemplate
  packageName={name}
  readme={ReadMe}
  examples={[
    {
      // title: 'Him Letters',
      example: <HimLettersStandard />,
      source: HimLetterTemplateSrc,
    },
  ]}
/>
  ); 
  
  export default DocPage;
  