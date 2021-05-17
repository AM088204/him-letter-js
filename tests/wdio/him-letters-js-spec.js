Terra.describeViewports('HimLettersJs', ['tiny', 'small', 'medium', 'large', 'huge', 'enormous'], () => {
  describe('No Data available', () => {
    it('validates when no data is available', () => {
      browser.url('/orion-dev-site/raw/tests/him-letters-js/him-letters-js-no-data');
      Terra.validates.element('no data available');
    });
  });
});
