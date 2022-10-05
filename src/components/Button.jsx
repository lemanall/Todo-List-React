const Button = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="text-sm bg-transparent border border-solid-[#ecf3f3] px-2 py-3 text-[#ecf3f3] cursor-pointer rounded-sm transition-all duration-300 ease-in-out hover:text-[#35454d] hover:bg-[#ecf3f3]"
    >
      {children}
    </button>
  );
};

export default Button;
