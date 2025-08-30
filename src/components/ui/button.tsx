type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
};

export const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="
        flex flex-row justify-center items-center 
        px-8 py-2 gap-[10px] 
        w-[106px] h-[36px] 
        bg-[#106A64] text-white 
        rounded-md
        cursor-pointer
      "
    >
      {children}
    </button>
  );
};
