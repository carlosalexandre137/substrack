const Select = ({ className, id, label, children, change, required, value }) => {
  return (
    <div className={className}>
      <label htmlFor={id} className="block mb-2 text-sm font-medium text-gray-700">
        {label} {!required && <span className="text-red-400 text-xs">(Opcional)</span>}
      </label>
      <select
        id={id}
        className="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        onChange={(e) => change(e.target.value)}
        required={required}
        value={value}
      >
        {children}
      </select>
    </div>
  );
};

export default Select;
