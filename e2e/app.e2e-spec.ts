import { AngularLeafletMapNewPage } from './app.po';

describe('angular-leaflet-map-new App', () => {
  let page: AngularLeafletMapNewPage;

  beforeEach(() => {
    page = new AngularLeafletMapNewPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
