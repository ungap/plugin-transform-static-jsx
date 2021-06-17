function Component({
  className
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    ":id": "my-div",
    className: className
  }, /*#__PURE__*/React.createElement("p", {
    color: color,
    ":label": "f&quot;o",
    hidden: true
  })), /*#__PURE__*/React.createElement("div", {
    ":id": "my-div",
    className: className
  }, /*#__PURE__*/React.createElement("p", {
    color: color,
    ":label": "f&amp;o",
    ":data-attr": "2"
  })));
}
