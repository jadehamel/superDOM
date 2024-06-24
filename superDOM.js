// SuperDOM by Jade Hamel - https://jadehamel.fr

const SuperDOM = {
  // Function to select elements by CSS selector
  select: function(selector) {
    return document.querySelector(selector);
  },

  // Function to select multiple elements by CSS selector
  selectAll: function(selector) {
    return document.querySelectorAll(selector);
  },

  // Function to add a class to an element
  addClass: function(element, className) {
    element.classList.add(className);
  },

  // Function to remove a class from an element
  removeClass: function(element, className) {
    element.classList.remove(className);
  },

  // Function to toggle a class on an element
  toggleClass: function(element, className) {
    element.classList.toggle(className);
  },

  // Function to check if an element has a class
  hasClass: function(element, className) {
    return element.classList.contains(className);
  },

  // Function to add an event listener to an element
  on: function(element, event, callback) {
    element.addEventListener(event, callback);
  },

  // Function to remove an event listener from an element
  off: function(element, event, callback) {
    element.removeEventListener(event, callback);
  },

  // Function to create a new element
  create: function(tagName) {
    return document.createElement(tagName);
  },

  // Function to append a child element to a parent element
  append: function(parent, child) {
    parent.appendChild(child);
  },

  // Function to prepend a child element to a parent element
  prepend: function(parent, child) {
    parent.insertBefore(child, parent.firstChild);
  },

  // Function to remove an element from the DOM
  remove: function(element) {
    element.parentNode.removeChild(element);
  },

  // Function to set an attribute on an element
  setAttribute: function(element, attrName, attrValue) {
    element.setAttribute(attrName, attrValue);
  },

  // Function to get an attribute from an element
  getAttribute: function(element, attrName) {
    return element.getAttribute(attrName);
  },

  // Function to remove an attribute from an element
  removeAttribute: function(element, attrName) {
    element.removeAttribute(attrName);
  },

  // Function to set inner HTML of an element
  html: function(element, htmlContent) {
    element.innerHTML = htmlContent;
  },

  // Function to get inner HTML of an element
  getHtml: function(element) {
    return element.innerHTML;
  },

  // Function to set text content of an element
  text: function(element, textContent) {
    element.textContent = textContent;
  },

  // Function to get text content of an element
  getText: function(element) {
    return element.textContent;
  }
};

// Example usage:
const myElement = SuperDOM.select('#myElement');
SuperDOM.addClass(myElement, 'highlight');
SuperDOM.text(myElement, 'Hello, world!');
SuperDOM.on(myElement, 'click', function() {
  SuperDOM.toggleClass(this, 'clicked');
});
