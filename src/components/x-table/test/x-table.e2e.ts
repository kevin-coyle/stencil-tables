import { newE2EPage } from '@stencil/core/testing';

describe('x-table', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<x-table></x-table>');

    const element = await page.find('x-table');
    expect(element).toHaveClass('hydrated');
  });
});
