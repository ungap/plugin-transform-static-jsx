'use strict';
/*! (c) Andrea Giammarchi & Nicolò Ribaudo - ISC */
module.exports = ({types: t}) => ({
  visitor: {
    JSXAttribute(path) {
      let {name, value} = path.node;

      if (t.isJSXNamespacedName(name))
        return;

      if (t.isJSXExpressionContainer(value))
        return;

      path.set('name', t.jsxNamespacedName(t.jsxIdentifier(''), name));
    }
  }
});
