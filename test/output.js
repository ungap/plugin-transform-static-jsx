function Component({
  className
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    ":id": "my-div",
    className: className
  }, /*#__PURE__*/React.createElement("p", {
    color: color,
    ":label": "foo",
    hidden: true
  })), /*#__PURE__*/React.createElement("div", {
    ":id": "my-div",
    className: className
  }, /*#__PURE__*/React.createElement("p", {
    color: color,
    ":label": "foo",
    ":data-attr": "2"
  })));
}
