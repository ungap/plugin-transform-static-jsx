function Component({ className }) {
  return (
    <>
      <div id="my-div" className={className}>
        <p color={color} label="f&quot;o" hidden={true} />
      </div>
      <div id="my-div" className={className}>
        <p color={color} label="f&amp;o" data-attr="2" />
      </div>
    </>
  );
}
