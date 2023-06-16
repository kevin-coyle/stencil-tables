import { newE2EPage } from '@stencil/core/testing';

describe('x-table-cell', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<x-table-cell></x-table-cell>');

    const element = await page.find('x-table-cell');
    expect(element).toHaveClass('hydrated');
  });
});
