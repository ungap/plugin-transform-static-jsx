'use strict';
/*! (c) Andrea Giammarchi & Nicolò Ribaudo - ISC */
module.exports = ({types: t}) => ({
  visitor: {
    JSXAttribute(path) {
      const {node: {name, value}, parent} = path;

      if (
        t.isJSXNamespacedName(name) ||
        t.isJSXExpressionContainer(value) ||
        /^[A-Z]/.test(parent.name.name)
      )
        return;

      path.set('name', t.jsxNamespacedName(t.jsxIdentifier(''), name));
    }
  }
});
