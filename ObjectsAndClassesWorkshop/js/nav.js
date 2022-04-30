function Nav(selector) {
  this.activePage = window.location.hash;
  this.mainNavElements = document.querySelectorAll(selector);
  this._activeEvents = [];
}

Nav.prototype = {
  attachListeners() {
    const oThis = this;
    this.mainNavElements.forEach(function(elem) {
      elem.addEventListener('click', oThis.onClick.bind(oThis));
    });
  },
  onClick(elem) {
    this.activePage = elem.target.getAttribute('href');
    this._onChange();
  },
  _onChange() {
    const oThis = this;
    this._activeEvents.forEach(function(eventCallback) {
      if (eventCallback && typeof eventCallback === 'function') {
        eventCallback(oThis.activePage);
      }
    });
  },
  onChange(callback) {
    this._activeEvents.push(callback);
  }
};

export default Nav;
