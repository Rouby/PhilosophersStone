import { PhilosophersStonePage } from './app.po';

describe('philosophers-stone App', function() {
  let page: PhilosophersStonePage;

  beforeEach(() => {
    page = new PhilosophersStonePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
