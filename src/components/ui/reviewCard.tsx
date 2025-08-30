type CardProps = {
  description: string;
  image: string;
  name: string;
  profession: string;
};

export const ReviewCard = ({ description, image, name, profession }: CardProps) => {
  return (
    <div className="w-[368px] h-[240px] bg-white drop-shadow-[2px_4px_15px_rgba(0,0,0,0.08)] p-4 rounded-lg">
      {/* Description */}
      <p className="font-poppins text-base text-[#0A0A0A] pt-10">
        {description}
      </p>

      {/* User Info */}
      <div className="absolute top-[136px] left-4 flex items-center space-x-2 pt-2">
        <img
          src={image}
          alt={name}
          className="w-[40px] h-[40px] rounded-full object-cover"
        />
        <div className="flex flex-col">
          <span className="font-poppins font-medium text-[#106A64] text-[12px] leading-[16px]">
            {name}
          </span>
          <span className="font-poppins font-normal text-[#9E9E9E] text-[10px] leading-[14px]">
            {profession}
          </span>
        </div>
      </div>
    </div>
  );
};
