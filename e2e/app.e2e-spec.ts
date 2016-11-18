import { AngularLeafletMapsPage } from './app.po';

describe('angular-leaflet-maps App', function() {
  let page: AngularLeafletMapsPage;

  beforeEach(() => {
    page = new AngularLeafletMapsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
