export const HiddenInput = () => {
  return (
    <input
      type="text"
      autoComplete="on"
      value=""
      style={{
        visibility: 'hidden',
        display: 'none',
        opacity: 0,
        position: 'absolute',
        left: '-100000px',
      }}
      readOnly={true}
    />
  );
};
