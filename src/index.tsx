import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


class WebComponent extends HTMLElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  connectedCallback() {
    ReactDOM.createRoot(this).render(
      <App siteID={this.getAttribute('siteID')} />
    );
  }
}

const ELEMENT_ID = 'custom-calendar';

if (!customElements.get(ELEMENT_ID)) {
  customElements.define(ELEMENT_ID, WebComponent);
}

