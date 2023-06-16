import { Component, Host, h, Method, Element } from '@stencil/core';

@Component({
  tag: 'x-table-row',
  styleUrl: 'x-table-row.css',
  shadow: true,
})
export class XTableRow {

  @Element() el: HTMLElement;

  @Method() 
  async getMarkup() {
    const tr = document.createElement('tr');
    const slotted = this.el.shadowRoot.querySelector('slot').assignedNodes().filter(node => node.nodeName == 'X-TABLE-CELL');
    // append the slotted elements to the td
    slotted.forEach(async node => {
      const cells = await (node as any).getMarkup();
      tr.appendChild(cells);
    });
    return tr;
  }

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
