'use strict';
const {escape} = require('html-escaper');

const PREFIX = '\x01';

/*! (c) Andrea Giammarchi & Nicolò Ribaudo - ISC */
module.exports = ({types: t}) => ({
  visitor: {
    JSXAttribute(path) {
      const {node: {name, value}, parent} = path;

      if (
        name.name[0] === PREFIX ||
        /^[A-Z]/.test(parent.name.name) ||
        t.isJSXNamespacedName(name) ||
        t.isJSXExpressionContainer(value)
      )
        return;

      path.set('name', t.jsxIdentifier(PREFIX + name.name));

      if (t.isStringLiteral(value))
        value.value = escape(value.value);
    }
  }
});
