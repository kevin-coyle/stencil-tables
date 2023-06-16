import { newE2EPage } from '@stencil/core/testing';

describe('x-table-row', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<x-table-row></x-table-row>');

    const element = await page.find('x-table-row');
    expect(element).toHaveClass('hydrated');
  });
});
