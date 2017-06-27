import { Ng16dropsPage } from './app.po';

describe('ng16drops App', () => {
  let page: Ng16dropsPage;

  beforeEach(() => {
    page = new Ng16dropsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
