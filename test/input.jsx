function Component({ className }) {
  return (
    <>
      <div id="my-div" className={className}>
        <p color={color} label="foo" data-attr="2" />
      </div>
      <div id="my-div" className={className}>
        <p color={color} label="foo" data-attr="2" />
      </div>
    </>
  );
}
