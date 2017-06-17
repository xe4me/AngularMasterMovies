import { FilmsPage } from './app.po';

describe('films App', () => {
  let page: FilmsPage;

  beforeEach(() => {
    page = new FilmsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
