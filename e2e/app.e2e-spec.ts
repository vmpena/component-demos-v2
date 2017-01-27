import { ComponentDemosV2Page } from './app.po';

describe('component-demos-v2 App', function() {
  let page: ComponentDemosV2Page;

  beforeEach(() => {
    page = new ComponentDemosV2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
