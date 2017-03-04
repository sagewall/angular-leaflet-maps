import { browser, element, by } from 'protractor';

export class AngularLeafletMapNewPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
