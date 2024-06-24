# SuperDOM

SuperDOM is a lightweight JavaScript library that simplifies DOM manipulation with easy-to-use utility functions. It provides a convenient way to perform common operations on DOM elements, making front-end development more efficient.

## Features

- **Element Selection**: Easily select DOM elements using CSS selectors.
- **Class Manipulation**: Add, remove, toggle, and check classes on elements.
- **Event Handling**: Attach and detach event listeners to elements.
- **Element Creation**: Create new DOM elements dynamically.
- **Content Manipulation**: Set or get HTML content and text of elements.
- **Attribute Management**: Set, get, and remove attributes from elements.
- **Element Insertion**: Append or prepend child elements to parent elements.
- **Element Removal**: Remove elements from the DOM.

## Installation

You can include SuperDOM in your project by downloading the `superdom.js` file and including it in your HTML file:

```html
<script src="path/to/superdom.js"></script>
```

Alternatively, you can copy and paste the functions directly into your JavaScript file.

## Usage

```javascript
// Example usage
const myElement = SuperDOM.select('#myElement');
SuperDOM.addClass(myElement, 'highlight');
SuperDOM.text(myElement, 'Hello, world!');
SuperDOM.on(myElement, 'click', function() {
  SuperDOM.toggleClass(this, 'clicked');
});
```

## API
- `SuperDOM.select(selector)`: Selects a single element based on the CSS selector.
- `SuperDOM.selectAll(selector)`: Selects multiple elements based on the CSS selector.
- `SuperDOM.addClass(element, className)`: Adds a class to the specified element.
- `SuperDOM.removeClass(element, className)`: Removes a class from the specified element.
- `SuperDOM.toggleClass(element, className)`: Toggles a class on the specified element.
- `SuperDOM.hasClass(element, className)`: Checks if the specified element has a class.
- `SuperDOM.on(element, event, callback)`: Attaches an event listener to the specified element.
- `SuperDOM.off(element, event, callback)`: Removes an event listener from the specified element.
- `SuperDOM.create(tagName)`: Creates a new element with the specified tag name.
- `SuperDOM.append(parent, child)`: Appends a child element to a parent element.
- `SuperDOM.prepend(parent, child)`: Prepends a child element to a parent element.
- `SuperDOM.remove(element)`: Removes the specified element from the DOM.
- `SuperDOM.setAttribute(element, attrName, attrValue)`: Sets an attribute on the specified element.
- `SuperDOM.getAttribute(element, attrName)`: Gets the value of the specified attribute from the element.
- `SuperDOM.removeAttribute(element, attrName)`: Removes the specified attribute from the element.
- `SuperDOM.html(element, htmlContent)`: Sets the inner HTML content of the specified element.
- `SuperDOM.getHtml(element)`: Gets the inner HTML content of the specified element.
- `SuperDOM.text(element, textContent)`: Sets the text content of the specified element.
- `SuperDOM.getText(element)`: Gets the text content of the specified element.

# Contributing
Contributions are welcome! If you have ideas for improvements or new features, feel free to open an issue or submit a pull request.
