import { browser, $, protractor } from 'protractor';

describe('Given a SDET learning protractor', () => {
  describe('when open Google Page', () => {    
    beforeEach(() => {
      browser.get('http://www.google.com');
    });

    it('then should have a title', async () => {
      expect(browser.getTitle()).toEqual('Google');
      var searchTextBox = $("#lst-ib");
      await searchTextBox.sendKeys("Hola");
      await browser.actions().sendKeys(protractor.Key.ENTER).perform();
    });
  });
});