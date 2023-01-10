type Props = {
  addon?: any;
  inputType: string;
  placeholder: string;
  addOnFunction?: any;
  addonType?: string;
  customClass?: string;
};

const Input = ({
  inputType,
  placeholder,
  addon,
  addOnFunction,
  addonType,
  customClass,
}: Props) => (
  <div
    className={`${
      addonType === "icon" ? "custom__input-container-8px" : "mb-6"
    } custom__input-container`}
  >
    <input
      className="custom__input"
      type={inputType}
      placeholder={placeholder}
    />

    {/* For Text */}
    {addon && (
      <button
        onClick={addOnFunction}
        className={`${
          addonType === "icon"
            ? `cta-button w-[20px] ${customClass}`
            : "custom__input__addon"
        } `}
      >
        {addonType === "icon" ? <img src={addon} alt="" /> : addon}
      </button>
    )}

    {/* For Icon  */}
  </div>
);

export default Input;
