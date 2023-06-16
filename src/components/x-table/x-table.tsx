import { Component, Host, h, State, Element } from '@stencil/core';

@Component({
  tag: 'x-table',
  styleUrl: 'x-table.css',
  shadow: true,
})
export class XTable {

  @State() rows: any[];

  @Element() el: HTMLElement;

  slot: HTMLSlotElement;

  async componentDidLoad() {
    await this.getRows();
  }

  private async getRows() {
    const slotted = this.slot.assignedNodes().filter(node => node.nodeName == 'X-TABLE-ROW');
    // Loop through all slotted elements and call the asynchronous getMarkup method with a promise all
    const rows = await Promise.all(slotted.map(async (node) => {
      const markup = await (node as any).getMarkup();
      return markup;
    }));
    // append rows to the tbody inside the shadowroot
    const table = this.el.shadowRoot.querySelector('tbody');
    rows.forEach(row => {
      table.appendChild(row);
    }
    );
  }

  render() {
    return (
      <Host>
        <table>
          <tbody>
          </tbody>
        </table>
        <slot ref={(el: HTMLSlotElement) => this.slot = el}></slot>
      </Host>
    );
  }

}
