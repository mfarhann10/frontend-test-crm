type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
};

export const Button = ({ children, onClick, className }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`
        flex flex-row justify-center items-center 
        px-8 py-2 gap-[10px]  
        bg-[#106A64] text-white 
        rounded-md cursor-pointer
        ${className ?? ""}
      `}
    >
      {children}
    </button>
  );
};

