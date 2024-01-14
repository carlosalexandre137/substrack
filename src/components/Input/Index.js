const Input = ({ type = "text", className, id, label, placeholder, change = null, required, min, max, value = "" }) => {
  return (
    <div className={className}>
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={id}>
        {label} {!required && <span className="text-red-400 text-xs">(Opcional)</span>}
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id={id}
        type={type}
        placeholder={placeholder ?? label}
        onChange={(e) => (change ? change(e.target.value) : "")}
        required={required}
        minLength={min}
        maxLength={max}
        min={min}
        max={max}
        value={value}
      />
    </div>
  );
};

export default Input;
