const Input = (props) => {
  const { htmlfor, type, name, id, placeholder, value, onChange, children } =
    props;
  return (
    <div>
      <label
        htmlFor={htmlfor}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {children}
      </label>
      <input
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        value={value} // Menampilkan nilai dari state
        onChange={onChange} // Event handler untuk memperbarui state
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
      />
    </div>
  );
};

export default Input;
