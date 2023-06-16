import { newSpecPage } from '@stencil/core/testing';
import { XTableRow } from '../x-table-row';

describe('x-table-row', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [XTableRow],
      html: `<x-table-row></x-table-row>`,
    });
    expect(page.root).toEqualHtml(`
      <x-table-row>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </x-table-row>
    `);
  });
});
