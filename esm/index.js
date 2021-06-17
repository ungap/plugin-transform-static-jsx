import {escape} from 'html-escaper';

/*! (c) Andrea Giammarchi & Nicolò Ribaudo - ISC */
export default ({types: t}) => ({
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

      if (t.isStringLiteral(value))
        value.value = escape(value.value);
    }
  }
});
