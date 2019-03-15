// ====================================================
// More Templates: https://www.ebenmonney.com/templates
// Email: support@ebenmonney.com
// ====================================================

import { AppPage } from './app.po';

describe('Quick_Application_NG_REST App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display application title: Quick_Application_NG_REST', () => {
    page.navigateTo();
    expect(page.getAppTitle()).toEqual('Quick_Application_NG_REST');
  });
});
