const Input = ({ type, name, value, onChange }) => {
  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={name}
      autoFocus
    />
  );
};
export default Input;
