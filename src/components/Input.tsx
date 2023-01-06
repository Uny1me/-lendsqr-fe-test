type Props = {
  addon?: string;
  inputType: string;
  placeholder: string;
  addOnFunction?: any;
};

const Input = ({ inputType, placeholder, addon, addOnFunction }: Props) => (
  <div className="custom__input-container">
    <input
      className="custom__input"
      type={inputType}
      placeholder={placeholder}
    />
    {addon && (
      <button onClick={addOnFunction} className="custom__input__addon">
        {addon}
      </button>
    )}
  </div>
);

export default Input;
