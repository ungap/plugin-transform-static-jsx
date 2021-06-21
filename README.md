# @ungap/plugin-transform-static-jsx

This plugin is [a follow up of this post](https://webreflection.medium.com/bringing-jsx-to-template-literals-1fdfd0901540) and it can be used together with [@babel/plugin-transform-react-jsx](https://www.npmjs.com/package/@babel/plugin-transform-react-jsx) and through [jsx2tag](https://github.com/WebReflection/jsx2tag#readme), so that static, non component related, attributes, are parsed as static values.

A huge thanks to [Nicolò Ribaudo](https://twitter.com/NicoloRibaudo) for helping out creating the basic structure to make this work.

### babel.config.json

```js
{
  "plugins": [
    ["@babel/plugin-transform-react-jsx"],
    ["module:@ungap/plugin-transform-static-jsx"]
  ]
}
```

### npm install

```sh
npm i --save-dev @babel/cli
npm i --save-dev @babel/core
npm i --save-dev @babel/plugin-transform-react-jsx
npm i --save-dev @ungap/plugin-transform-static-jsx
```

### What is it / How to use it

Once configured, and after following **[jsx2tag](https://github.com/WebReflection/jsx2tag#readme)** instructions, this module would produce a slightly different *Template Literal Tag*'s signature.

```js
// using this paragraph as example
const ref = <p class="any" data-test={dynamic}>Hello</p>;

// without @ungap/plugin-transform-static-jsx
[
  ['<p class="', '" data-test="', '">', '</p>'],
  'any',
  dynamic,
  ['Hello']
]


// with @ungap/plugin-transform-static-jsx
[
  ['<p class="any" data-test="', '">', '</p>'],
  dynamic,
  ['Hello']
]
```

Because template literals based libraries relies on interpolations to "*diff*" their updates, this module would be a performance boost whenever performance is, actually, a concern or a real issue.
