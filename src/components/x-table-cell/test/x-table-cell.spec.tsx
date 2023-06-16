import { newSpecPage } from '@stencil/core/testing';
import { XTableCell } from '../x-table-cell';

describe('x-table-cell', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [XTableCell],
      html: `<x-table-cell></x-table-cell>`,
    });
    expect(page.root).toEqualHtml(`
      <x-table-cell>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </x-table-cell>
    `);
  });
});
