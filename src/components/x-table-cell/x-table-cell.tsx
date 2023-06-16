import { Component, Host, h, Method, Element } from '@stencil/core';

@Component({
  tag: 'x-table-cell',
  styleUrl: 'x-table-cell.css',
  shadow: true,
})
export class XTableCell {

  @Element() el: HTMLElement;

  @Method()
  async getMarkup() {
    const td = document.createElement('td');
    const slotted = this.el.shadowRoot.querySelector('slot').assignedNodes();
    slotted.forEach(node => {
      td.appendChild(node);
    });
    // We have to add event listeners the old fashioned way
    td.addEventListener('mouseover', () => {
      console.log('mouse over');
    });
    return td;
  }

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
