const Select = ({ className, id, label, children }) => {
  return (
    <div className={className}>
      <label htmlFor={id} className="block mb-2 text-sm font-medium text-gray-700 dark:text-white">
        {label}
      </label>
      <select
        id={id}
        className="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        {children}
      </select>
    </div>
  );
};

export default Select;