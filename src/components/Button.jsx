const Button = (props) => {
  const {
    children,
    variant = "bg-blue-600 text-gray-50 mt-4",
    width = "w-fit",
    type = "button",
  } = props;
  return (
    <button
      className={`flex items-center justify-center gap-2 px-6 py-2 border border-blue-600 tracking-wider cursor-pointer font-medium ${variant} ${width} rounded-full`}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
