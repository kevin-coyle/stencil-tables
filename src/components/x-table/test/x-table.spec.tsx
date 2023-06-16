import { newSpecPage } from '@stencil/core/testing';
import { XTable } from '../x-table';

describe('x-table', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [XTable],
      html: `<x-table></x-table>`,
    });
    expect(page.root).toEqualHtml(`
      <x-table>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </x-table>
    `);
  });
});
