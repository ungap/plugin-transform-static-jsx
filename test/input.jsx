function Component({ className }) {
  return (
    <>
      <div id="my-div" className={className}>
        <p color={color} label="foo" hidden={true} />
      </div>
      <div id="my-div" className={className}>
        <p color={color} label="foo" data-attr="2" />
      </div>
    </>
  );
}
