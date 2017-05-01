import { AngularFrontEndPage } from './app.po';

describe('angular-front-end App', () => {
  let page: AngularFrontEndPage;

  beforeEach(() => {
    page = new AngularFrontEndPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
